const express = require('express');
const app = express();
require('dotenv').config();
const products = require('./routes/products');

// middleware
app.use(express.json());

// routes
app.use('/api/v1/products', products);

const port = process.env.PORT || 3000;

app.listen(port, console.log(`Server is running on port ${port}`));
