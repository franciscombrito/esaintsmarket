const express = require("express");
const app = express();
const PORT = 3000;

const products = [
  {
    id: 1,
    name: "Sardines",
    price: 4.99,
    category: "Food",
    description: "The best sardines from the portuguese coast",
    image:
      "https://www.infoescola.com/wp-content/uploads/2010/12/sardinha_265068365.jpg",
  },
  {
    id: 2,
    name: "Red wine",
    price: 0.99,
    category: "Drinks",
    description:
      "Red wine from the package, also known as Carrascão, perfect for terrible hangovers and cheap pockets",
    image:
      "https://cdn360hyper.azureedge.net/images/thumbs/6890100_vcasal-da-eira-t-25cl.jpeg",
  },
  {
    id: 3,
    name: "Soalheiro Alvarinho",
    price: 10.99,
    category: "Drinks",
    description: "Estefânia favorite wine, perfect for a sunny afternoon",
    image:
      "https://cdnx.jumpseller.com/vinhalvarinho-pt/image/21851030/resize/640/640?1652801739",
  },
  {
    id: 4,
    name: "Febras",
    price: 2.99,
    category: "Food",
    description: "From the best pork in the world, porco alentejano",
    image:
      "https://www.grafe-e-faca.com/wp-content/uploads/2018/06/Febras-na-brasa-%C3%A0-moda-do-Ribatejo4.jpg",
  },
  {
    id: 5,
    name: "Manjerico",
    price: 2.5,
    category: "Others",
    description:
      "The traditional Manjerico, mandatory in every portuguese house during the Santos Populares",
    image: "http://imagens.publico.pt/imagens.aspx/418611?tp=KM&w=620",
  },
  {
    id: 6,
    name: "Santos populares - Best of ",
    price: 2.5,
    category: "Music",
    description: "",
    image: "",
  },
  {
    id: 7,
    name: "Chouriça",
    price: 4.5,
    category: "Food",
    description: "",
    image: "",
  },
  // Add more products here...
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
