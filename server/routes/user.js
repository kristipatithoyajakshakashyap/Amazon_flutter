const express = require("express");
const {
  addToCartController,
  removeFromCartController,
  saveAddressController,
  orderController,
  getOrderController
} = require("../controllers/user");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/api/add-to-cart", auth, addToCartController);
router.post("/api/save-user-address", auth, saveAddressController);
router.post("/api/order", auth, orderController);
router.get("/api/orders/me", auth, getOrderController);
router.delete("/api/remove-from-cart/:id", auth, removeFromCartController);
module.exports = router;
