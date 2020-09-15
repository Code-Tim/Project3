const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Wrestlers", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const wseeds = [
  {
    name: "Shawn Michaels",
    Finishing_move: "Sweet Chin Music",
    id: 1,
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2018/10/Shawn_Michaels_Pro--d4bc7c99be4fcec510501f5e7d25bde7.png",
    description: "Heartbreak Kid",
    Stamina: 100,
    Health: 100,
    Speed: 80,
    Power: 85,
  },
  {
    name: "Randy Orton",
    Finishing_move: "RKO",
    id: 2,
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2019/05/Randy_Orton_Pro--a9e0f9cbc3c45a244752ae995a7570ab.png",
    description: "The Viper",
    Stamina: 100,
    Health: 100,
    Speed: 75,
    Power: 85,
  },
  {
    name: "Triple H",
    Finishing_move: "Pedigree",
    id: 3,
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2019/02/DX_Pro--d50fbad56a554dc91838431c89db6398.png",
    description: "The Game",
    Stamina: 100,
    Health: 100,
    Speed: 65,
    Power: 90,
  },
  {
    name: "John Cena",
    Finishing_move: "STF",
    id: 4,
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/01/John_Cena_Pro--c49ac192e6c71d6dde11351ad70975d4.png",
    description: "The Doctor of Thuganomics",
    Stamina: 100,
    Health: 100,
    Speed: 75,
    Power: 90,
  },
  {
    name: "Jeff Hardy",
    Finishing_move: "Swanton Bomb",
    id: 5,
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/08/Superstar_Jeff_Hardy_Title_Profile--6ff2d0a373976b8f5d0c3b24034091f2.png",
    description: "The Charismatic Enigma",
    Stamina: 100,
    Health: 100,
    Speed: 90,
    Power: 75,
  },
  {
    name: "Hardcore Holly",
    Finishing_move: "Alabama Slam",
    id: 6,
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/rd-talent/Profile/Hardcore_Holly_pro.png",
    description: "The Alabama Slamma",
    Stamina: 100,
    Health: 100,
    Speed: 75,
    Power: 90,
  },
  {
    name: "Chris Jericho",
    Finishing_move: "Walls of Jericho",
    id: 7,
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2017/05/Chris_Jericho_Pro--3ccfc973e6285e437ea6cd55100a7aae.png",
    description: "The Ayatollah of Rock 'n' Rolla",
    Stamina: 100,
    Health: 100,
    Speed: 80,
    Power: 85,
  },
  {
    name: "The Undertaker",
    Finishing_move: "Tombstone Piledriver",
    id: 8,
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/01/Undertaker_Pro--e73c07b669f8d823088cf8de4cebfde8.png",
    description: "The Deadman",
    Stamina: 100,
    Health: 100,
    Speed: 80,
    Power: 90,
  },
  {
    name: "Edge",
    Finishing_move: "Spear",
    id: 9,
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/04/Edge_Pro--bf0ddae0f8bfed58e4b90c587b5037c4.png",
    description: "The Rated R Superstar",
    Stamina: 100,
    Health: 100,
    Speed: 85,
    Power: 85,
  },
  {
    name: "Rey Mysterio",
    Finishing_move: "619",
    id: 10,
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/01/Rey_Mysterio_Pro--ce1392898148b89855067b09c44dedf0.png",
    description: "The Master of the 619",
    Stamina: 100,
    Health: 100,
    Speed: 90,
    Power: 80,
  },
  {
    name: "Batista",
    Finishing_move: "Batista Bomb",
    id: 11,
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/rd-talent/Profile/Batista_pro.png",
    description: "The Animal",
    Stamina: 100,
    Health: 100,
    Speed: 75,
    Power: 95,
  },
  {
    name: "Matt Hardy",
    Finishing_move: "Twist Of Fate",
    id: 12,
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2019/04/Matt_Hardy_Pro--f658eb813c43ec3a61bcfd29f14ef54f.png",
    description: "",
    Stamina: 100,
    Health: 100,
    Speed: 80,
    Power: 80,
  },
  {
    name: "Gregory Helms",
    Finishing_move: "Shining Wizard",
    id: 13,
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/rd-talent/Profile/Hurricane_pro.png",
    description: "The Hurricane",
    Stamina: 100,
    Health: 100,
    Speed: 85,
    Power: 75,
  },
  {
    name: "Torrie Wilson",
    Finishing_move: "Spinning DDT",
    id: 14,
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2019/03/TorrieWilson_Pro--22036a191ceec320c4e240846699c40a.png",
    description: "Torrie",
    Stamina: 80,
    Health: 80,
    Speed: 85,
    Power: 60,
  },
  {
    name: "Kane",
    Finishing_move: "ChokeSlam",
    id: 15,
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/01/Kane_Pro--97fd51c6219810ef02070c332958e10a.png",
    description: "The Big Red Machine",
    Stamina: 100,
    Health: 100,
    Speed: 75,
    Power: 90,
  },
  {
    name: "Stone Cold Steve Austin",
    Finishing_move: "Stone Cold Stunner",
    id: 16,
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/rd-talent/Profile/Stone_Cold_Steve_Austin_pro.png",
    description: "The Texas Rattle Snake",
    Stamina: 100,
    Health: 100,
    Speed: 80,
    Power: 85,
  },
  {
    name: "Trish Stratus",
    Finishing_move: "Stratusfaction",
    id: 17,
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/rd-talent/Profile/Trish_Stratus_pro.png",
    description: "Canada’s greatest export",
    Stamina: 80,
    Health: 80,
    Speed: 85,
    Power: 60,
  },
  {
    name: "Lita",
    Finishing_move: "Moonsault",
    id: 18,
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/rd-talent/Profile/Lita_pro.png",
    description: "Miss Congeniality",
    Stamina: 80,
    Health: 80,
    Speed: 85,
    Power: 60,
  },
  {
    name: "Sasha Banks",
    Finishing_move: "Bank Statement",
    id: 19,
    imgUrl:
      "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2020/09/Sasha_Banks_Pro--ee558023ef6127e11fae6abcc424fa20.png",
    description: "The Boss",
    Stamina: 80,
    Health: 80,
    Speed: 85,
    Power: 60,
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
