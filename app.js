const express = require('express');
const app = express();
require('dotenv').config();
const products = require('./routes/products');
const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');
const connectDB = require('./db/connect');

// middleware
app.use(express.json());

// product routes
app.use('/api/v1/products', products);

// error middleware
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connect to DB
    await connectDB(process.env.MONGO_URI);
    // server port
    app.listen(port, console.log(`Server is running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
