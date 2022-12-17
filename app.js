const express = require('express')

const app = express();
const PORT = 3500;

app.get("/", (req, res) => {
    res.send('<h1>Express Demo</h1>')
});

app.get("/products", (req, res) => {
    const products = [
        {
            productId: '101',
            price: 100
        },
        {
            productId: '102',
            price: 150
        }
    ]
    res.send(products);
});

app.listen(PORT, () => {console.log(`Server listening to port ${PORT}`);})