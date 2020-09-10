const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Wrestlers");

const wseeds = [
  {
    id: 1,
    name: "Fighter1",
    description: "A great fighter",
    imgUrl: "./assets/images/f2.jpg",
    hp: 100,
    time: 2000,
    attack: 50,
    defense: 32,
  },
  {
    id: 2,
    name: "Fighter2",
    description: "Another great fighter",
    imgUrl: "./assets/images/hh.jpg",
    hp: 100,
    time: 2000,
    attack: 50,
    defense: 32,
  },
  {
    id: 3,
    name: "Fighter3",
    description: "A great fighter",
    imgUrl: "./assets/images/f2.jpg",
    hp: 100,
    time: 2000,
    attack: 50,
    defense: 32,
  },
  {
    id: 4,
    name: "Fighter4",
    description: "Another great fighter",
    imgUrl: "./assets/images/hh.jpg",
    hp: 100,
    time: 2000,
    attack: 50,
    defense: 32,
  },
  {
    id: 5,
    name: "Fighter5",
    description: "A great fighter",
    imgUrl: "./assets/images/f2.jpg",
    hp: 100,
    time: 2000,
    attack: 50,
    defense: 32,
  },
  {
    id: 6,
    name: "Fighter6",
    description: "Another great fighter",
    imgUrl: "./assets/images/hh.jpg",
    hp: 100,
    time: 2000,
    attack: 50,
    defense: 32,
  },
  {
    id: 7,
    name: "Fighter7",
    description: "A great fighter",
    imgUrl: "./assets/images/f2.jpg",
    hp: 100,
    time: 2000,
    attack: 50,
    defense: 32,
  },
  {
    id: 8,
    name: "Fighter8",
    description: "Another great fighter",
    imgUrl: "./assets/images/hh.jpg",
    hp: 100,
    time: 2000,
    attack: 50,
    defense: 32,
  },
  {
    id: 9,
    name: "Fighter9",
    description: "A great fighter",
    imgUrl: "./assets/images/f2.jpg",
    hp: 100,
    time: 2000,
    attack: 50,
    defense: 32,
  },
  {
    id: 10,
    name: "Fighter10",
    description: "Another great fighter",
    imgUrl: "./assets/images/hh.jpg",
    hp: 100,
    time: 2000,
    attack: 50,
    defense: 32,
  },
  {
    id: 11,
    name: "Fighter11",
    description: "A great fighter",
    imgUrl: "./assets/images/f2.jpg",
    hp: 100,
    time: 2000,
    attack: 50,
    defense: 32,
  },
  {
    id: 12,
    name: "Fighter12",
    description: "Another great fighter",
    imgUrl: "./assets/images/hh.jpg",
    hp: 100,
    time: 2000,
    attack: 50,
    defense: 32,
  },
];

db.Wrestlers.remove({})
  .then(() => db.Wrestlers.collection.insertMany(wseeds))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
