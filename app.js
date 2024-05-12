const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { cors } = require("./middlewares/cors");
const { gamesRouter, mainRoute } = require("./routes");

const PORT = 3000;
const app = express();

app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  gamesRouter,
  mainRoute
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});
