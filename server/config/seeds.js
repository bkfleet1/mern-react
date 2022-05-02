const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Flowering" },
    { name: "Low Light" },
    { name: "Colorful Foliage" },
    { name: "Low Watering" },
    { name: "All" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
      {
      name: "Classic White Calla Lily",
      description: "This houseplant is great for making every day bright.",
      image: "lilys.png",
      category: categories[1]._id,
      price: 15.99,
      quantity: 1,
    },
    {
      name: "Gardenia",
      description: "EverGreen flowering product.",
      image: "gardenia.jpeg",
      category: categories[0]._id,
      price: 15.99,
      quantity: 1,
    },
    {
      name: "Dragon Tree",
      description: "Tall, elegant houseplant specimens .",
      image: "madascar.jpg",
      category: categories[3]._id,
      price: 35.00,
      quantity: 1,
    },
    {
      name: "Orchid",
      description: "Fragant and colourful.",
      image: "orchid.jpg",
      category: categories[2]._id,
      price: 16.00,
      quantity: 1,
    },
    {
      name: "AloeVera",
      category: categories[3]._id,
      description: "Secculent low watering.",
      image: "aloe-vera.jpg",
      price: 25.00,
      quantity: 2,
    },
    {
      name: "Rose",
      category: categories[0]._id,
      description: "The flower of love.",
      image: "rose.jpg",
      price: 45.00,
      quantity: 5,
    },

    {
      name: "Ficus",
      category: categories[1]._id,
      description: "fig tree  and low light .",
      image: "fig.jpg",
      price: 30.00,
      quantity: 7,
    },
    {
      name: "Jasmin",
      category: categories[1]._id,
      description: "Aromatic and beautiful .",
      image: "jasmin.jpg",
      price: 50.00,
      quantity: 7,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
