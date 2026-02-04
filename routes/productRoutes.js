const express = require('express');
const router = express.Router();
const { getProducts, seedProducts } = require('../controllers/productController');

// Get all products
router.get('/', getProducts);

// Seed products (Utility)
router.post('/seed', seedProducts);

module.exports = router;
