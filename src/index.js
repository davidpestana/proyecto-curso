const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("¡Hola desde Express en GitLab CI/CD!");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Servidor escuchando en puerto 3000");
});
