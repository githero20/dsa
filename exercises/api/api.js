const express = require("express");

const app = express();

app.use(express.json());

const people = [
  {
    name: "Johnson",
    age: 29,
    nationality: "Ghanian",
  },
  {
    name: "Tosin",
    age: 14,
    nationality: "Nigerian",
  },
  {
    name: "Aboutrika",
    age: 32,
    nationality: "Egyptian",
  },
];

app.get("/", (req, res) => {
  res.status(200).send(people);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`API is live on ${PORT}`);
});
//call "$ node api.js" on gitBash to run
