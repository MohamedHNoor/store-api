const getAllProducts = (req, res) => {
  res.status(200).send('All products');
};

const createProduct = (req, res) => {
  res.status(200).send('Create a product');
};

const getProduct = (req, res) => {
  res.status(200).send('Get single product');
};

const updateProduct = (req, res) => {
  res.status(200).send('Update product');
};

const deleteProduct = (req, res) => {
  res.status(200).send('Delete product');
};

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
