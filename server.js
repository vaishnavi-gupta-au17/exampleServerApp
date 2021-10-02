const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Oh Hello");
});

console.log(`Heroku Port No. Is ${process.env.PORT}`);

const prt = process.env.PORT || 3000;

app.listen(prt, () => {
  console.log(`Server Started at Port ${prt}`);
});
