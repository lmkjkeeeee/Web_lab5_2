const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let products = [
    { id: 1, title: 'Продукт 1', price: 100 },
    { id: 2, title: 'Продукт 2', price: 200 },
];

// Отримати всі продукти
app.get('/products', (req, res) => {
    res.status(200).json(products);
});

// Додати новий продукт
app.post('/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        title: req.body.title,
        price: req.body.price,
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Видалити продукт за ID
app.delete('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    products = products.filter(product => product.id !== productId);
    res.status(204).send();
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Сервер REST API запущено на http://localhost:${PORT}`);
});
