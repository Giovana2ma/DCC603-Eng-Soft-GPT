const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");

const app = express();
// Middleware
app.use(body_parser.json());
app.use(cors());

const getSugestions = require("./routes/api/getSugestions")

app.use("/api/getSugestions",getSugestions)
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));