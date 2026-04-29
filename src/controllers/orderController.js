let orders = [];

const VALID_STATUS = ["RECEIVED", "PROCESSING", "READY", "DELIVERED"];

exports.createOrder = (req, res) => {
  const { customerName, phone, items } = req.body;

  if (!customerName || !phone || !items || !Array.isArray(items)) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const totalAmount = items.reduce((sum, i) => sum + i.quantity * i.price, 0);

  const order = {
    id: "ORD-" + Date.now(),
    customerName,
    phone,
    items,
    totalAmount,
    status: "RECEIVED",
    createdAt: new Date()
  };

  orders.push(order);
  res.json(order);
};

exports.getOrders = (req, res) => {
  let result = orders;
  const { status, search } = req.query;

  if (status) result = result.filter(o => o.status === status);

  if (search) {
    result = result.filter(o =>
      o.customerName.toLowerCase().includes(search.toLowerCase()) ||
      o.phone.includes(search)
    );
  }

  res.json(result);
};

exports.updateStatus = (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).send("Order not found");

  const { status } = req.body;
  if (!VALID_STATUS.includes(status)) {
    return res.status(400).json({ error: "Invalid status" });
  }

  order.status = status;
  res.json(order);
};

exports._orders = orders;
