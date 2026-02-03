const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Seed products (Utility)
router.post('/seed', async (req, res) => {
    try {
        await Product.deleteMany({});
        const products = [
            { name: "Vestido Seda 'L'Élégance'", category: "Ropa", price: 89.99, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800", stock: true },
            { name: "Blusa Lino 'Breeze'", category: "Ropa", price: 45.00, image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?q=80&w=800", stock: true },
            { name: "Collar Oro 18K 'Minimal'", category: "Joyería", price: 120.00, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800", stock: true },
            { name: "Aros Diamante 'Starlight'", category: "Joyería", price: 250.00, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800", stock: true },
            { name: "Paleta Nude 'Master Glow'", category: "Maquillaje", price: 35.00, image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800", stock: true },
            { name: "Labial Matte 'Velvet Rose'", category: "Maquillaje", price: 18.50, image: "https://images.unsplash.com/photo-1586776977607-310e9c725c37?q=80&w=800", stock: true },
            { name: "Bolso 'Velvet Night'", category: "Exclusivos 2026", price: 150.00, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800", stock: true },
            { name: "Reloj 'Eternal Rose'", category: "Exclusivos 2026", price: 320.00, image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800", stock: true }
        ];
        const createdProducts = await Product.insertMany(products);
        res.json(createdProducts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
