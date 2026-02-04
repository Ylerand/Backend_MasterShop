const express = require('express');
const router = express.Router();
const { getProducts, seedProducts } = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');

// Get all products
router.get('/', getProducts);

// Seed products (Utility) - Protected
router.post('/seed', protect, seedProducts);

module.exports = router;
