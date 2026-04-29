const { _orders } = require('./orderController');

module.exports = (req, res) => {
  const totalOrders = _orders.length;
  const totalRevenue = _orders.reduce((s, o) => s + o.totalAmount, 0);

  const statusBreakdown = {};
  _orders.forEach(o => {
    statusBreakdown[o.status] = (statusBreakdown[o.status] || 0) + 1;
  });

  res.json({ totalOrders, totalRevenue, statusBreakdown });
};
