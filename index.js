const express = require('express');
const app = express();
app.use(express.json());

const orderRoutes = require('./src/routes/orderRoutes');

app.use('/orders', orderRoutes);

app.get('/dashboard', require('./src/controllers/dashboardController'));

app.listen(3000, () => console.log("Server running on port 3000"));
