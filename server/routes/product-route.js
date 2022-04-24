const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products-controller.js");

router.get("/", productsController.getAllproducts);
router.post("/", productsController.addproduct);
router.get("/:id", productsController.getById);
router.put("/:id", productsController.updateproduct);
router.delete("/:id", productsController.deleteproduct);
router.get("/search/:name", productsController.getByName);

module.exports = router;