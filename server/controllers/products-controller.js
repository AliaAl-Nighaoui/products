var Product = require("../model/product");

const getAllproducts = async (req, res, next) => {
  let products;
  try {
    products = await Product.find();
  } catch (err) {
    console.log(err);
  }

  if (!products) {
    return res.status(404).send("offer not found");
  }
  return res.status(200).json({ products });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let product;
  try {
    product = await Product.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!product) {
    return res.status(404).json({ message: "No Product found 1" });
  }
  return res.status(200).json({ product });
};

const getByName = async (req, res, next) => {
  const name = req.params.name;
  let product;
  try {
    product = await Product.find({name: `${name}`});
  } catch (err) {
    
  }
  if (!product) {
    return res.status(404).json({ message: `No Product found ${name}`  });
  }
  return res.status(200).json({ product });
};

const addproduct = async (req, res, next) => {
  const { name, price, qte } = req.body;
  let product;
  try {
    product = new Product({
      name,
      price,
      qte,
    });
    await product.save();
  } catch (err) {
    console.log(err);
  }

  if (!product) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ product });
};

const updateproduct = async (req, res, next) => {
  const id = req.params.id;
  const { name, price, qte } = req.body;
  let product;
  try {
    product = await Product.findByIdAndUpdate(id, {
        name,
        price,
        qte,
    });
    product = await product.save();
  } catch (err) {
    console.log(err);
  }
  if (!product) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ product });
};

const deleteproduct = async (req, res, next) => {
  const id = req.params.id;
  let product;
  try {
    product = await Product.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!product) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllproducts = getAllproducts;
exports.addproduct = addproduct;
exports.getById = getById;
exports.updateproduct = updateproduct;
exports.deleteproduct = deleteproduct;
exports.getByName = getByName;