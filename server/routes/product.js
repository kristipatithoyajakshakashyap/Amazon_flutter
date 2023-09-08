const express = require("express");
const auth = require("../middlewares/auth");
const {
  productController,
  searchController,
  rateProductController,
  dealOfDayController,
} = require("../controllers/product");

const router = express.Router();

router.get("/api/products", auth, productController);
router.get("/api/products/search/:name", auth, searchController);
router.post("/api/rate-product", auth, rateProductController);
router.get('/api/deal-of-day', auth, dealOfDayController)

module.exports = router;
