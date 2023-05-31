const express = require("express");
const cors = require("cors");
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
      "https://www.receitasemenus.net/wp-content/uploads/2018/08/receitas-sardinhas.jpg",
  },
  {
    id: 2,
    name: "Red wine do pacote",
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
    description:
      "Estefânia favorite wine, perfect for a sunny Santos morning, afternoon, evening and repeat",
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
    name: "Shitty Santos populares music - Best of ",
    price: 2.5,
    category: "Music",
    description: "So bad that is good",
    image: "https://i.ytimg.com/vi/_7mNCtXc47s/maxresdefault.jpg",
  },
  {
    id: 7,
    name: "Chouriça",
    price: 4.5,
    category: "Food",
    description: "The queen of all sausages",
    image:
      "https://minhofumeiro.pt/wp-content/uploads/2019/02/Chourica-Carne_banner.png",
  },
  {
    id: 8,
    name: "Ugly hat",
    price: 2.5,
    category: "Accessories",
    description: "The hat that everybody seems to wear on Santo António.",
    image:
      "https://3.bp.blogspot.com/-U-RspvbI4SY/UbpKPYpvjpI/AAAAAAAAKoo/Khfi5o1sTbA/s1600/Blogue+14+Jun+2013+2b.JPG",
  },
  {
    id: 9,
    name: "Bluetooth Speaker",
    price: 666.66,
    category: "Others",
    description:
      "The first thing that a portuguese person takes out of their garage on June 1st.",
    image:
      "https://ireland.apollo.olxcdn.com/v1/files/o7kjpdpncrz83-PT/image;s=1000x700",
  },
  {
    id: 10,
    name: "Sangria",
    price: 1.0,
    category: "Drinks",
    description:
      "The best drink to do when you are surrounded by shitty ingredients",
    image:
      "https://foodandroad.com/wp-content/uploads/2021/04/sangria-espanha-2-500x500.jpg",
  },
  {
    id: 11,
    name: "Red table cloths",
    price: 9.99,
    category: "Accessories",
    description:
      "The best drink to do when you are surrounded by shitty ingredients",
    image:
      "https://tezturas.pt/_wp/wp-content/uploads/2017/06/IMG_20170609_190300-01-650x401.jpg",
  },
  {
    id: 12,
    name: "Clay sausage grill",
    price: 15.99,
    category: "Accessories",
    description: "To properly cook a chouriça, you just need this and alcohol",
    image:
      "https://www.auchan.pt/dw/image/v2/BFRC_PRD/on/demandware.static/-/Sites-auchan-pt-master-catalog/default/dw644d229c/images/hi-res/000184885.jpg",
  },
  {
    id: 13,
    name: "Extinguisher",
    price: 150.0,
    category: "Accessories",
    description: "If you buy the item - Clay sausage grill",
    image:
      "https://groupsumi.pt/_next/image?url=https%3A%2F%2Fcdn.groupsumi.com%2Fp%2F58d6fc030f02d9919aac046e1ead8b5d05d01d2a_image%2Fextintor-de-po-6-kg-21-a-113b-r-pd6ga-extarsa-140004e.jpg&w=3840&q=75",
  },
  {
    id: 14,
    name: "Santos flags",
    price: 3.0,
    category: "Accessories",
    description: "Goes well in any room of your house",
    image:
      "https://img.misterius.pt/resources/BANDEIROLAS-PAPEL-20X30-CM-25-MT_l.PNG",
  },
  {
    id: 15,
    name: "Drinking funnel for 2",
    price: 7.68,
    category: "Accessories",
    description: "Never drink alone. Sharing is caring",
    image:
      "https://www.mascarilha.pt/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/7/1/71635_a.png",
  },
];

app.use(cors());

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
  const categoryName = req.params.name.toLowerCase();
  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );
  res.json(filteredProducts);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
