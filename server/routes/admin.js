const express = require("express");
const admin = require("../middlewares/admin");
const {
  addProductController,
  getProductsController,
  deleteProductController,
  getOrdersController,
  changeStatusController,
  analyticsController
} = require("../controllers/admin");
const router = express.Router();

// ADD PRODUCT
router.post("/admin/add-product", admin, addProductController);
router.post("/admin/change-order-status", admin, changeStatusController);
router.get("/admin/get-products", admin, getProductsController);
router.get("/admin/get-orders", admin, getOrdersController);
router.get("/admin/analytics", admin, analyticsController);
router.post("/admin/delete-product", admin, deleteProductController);
module.exports = router;
