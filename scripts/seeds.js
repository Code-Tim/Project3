const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Wrestlers");

const wseeds = [
  {
    name: "Hello World",
    stamina: "admin",
  },
  {
    name: "The Second Post",
    stamina: "admin",
   
  },
  
];
db.Wrestlers
db.Wrestlers.remove({})
  .then(() => db.Wrestlers.collection.insertMany(wseeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
