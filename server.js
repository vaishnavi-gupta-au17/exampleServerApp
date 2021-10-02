const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server Working. This is a Homepage");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server Started at Port ${PORT}`);
});
