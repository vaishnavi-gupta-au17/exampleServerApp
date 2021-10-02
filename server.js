const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server Working. This is a Homepage");
});

console.log(`Heroku Port No. Is ${process.env.PORT}`);

const prt = process.env.PORT || 3000;

app.listen(prt, () => {
  console.log(`Server Started at Port ${prt}`);
});
