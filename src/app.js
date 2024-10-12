const express = require("express");
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("./routes");
const notFoundMiddleware = require("./middlewares/notFoundMiddleware.js");
const errorHandlerMiddleware = require("./middlewares/errorHandlerMiddleware.js");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) =>
  res.json({ message: "Welcome to API Berita SKAVEN" })
);

app.use("/", routes);

app.use(notFoundMiddleware);

app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
