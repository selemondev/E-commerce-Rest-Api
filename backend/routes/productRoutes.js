const express = require('express');
const router = express.Router();
const { protectAdmin } = require("../middleware/authMiddleware");
const { createProduct, updateProduct, deleteProduct, getAllProducts } = require("../controllers/productController");
router.route("/create").post(protectAdmin, createProduct);
router.route("/update/:id").put(protectAdmin, updateProduct);
router.route("/delete/:id").delete(protectAdmin, deleteProduct);
router.route("/products").get(getAllProducts);
module.exports = router;