const express = require("express");
const app = express();
const PORT = 3000;

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    category: "Electronics",
    description: "Description for Product 1",
    image: "image-url-1",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    category: "Clothing",
    description: "Description for Product 2",
    image: "image-url-2",
  },
  {
    id: 3,
    name: "Product 3",
    price: 9.99,
    category: "Home",
    description: "Description for Product 3",
    image: "image-url-3",
  },
  // Add more products here...
  {
    id: 18,
    name: "Product 18",
    price: 14.99,
    category: "Books",
    description: "Description for Product 18",
    image: "image-url-18",
  },
  {
    id: 19,
    name: "Product 19",
    price: 49.99,
    category: "Electronics",
    description: "Description for Product 19",
    image: "image-url-19",
  },
  {
    id: 20,
    name: "Product 20",
    price: 39.99,
    category: "Home",
    description: "Description for Product 20",
    image: "image-url-20",
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    res.status(404).json({ error: "Product not found" });
  } else {
    res.json(product);
  }
});

app.get("/categories", (req, res) => {
  const categories = [...new Set(products.map((product) => product.category))];
  res.json(categories);
});

app.get("/categories/:name", (req, res) => {
  const categoryName = req.params.name;
  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );
  res.json(filteredProducts);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
