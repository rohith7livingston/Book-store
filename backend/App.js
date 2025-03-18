const express = require("express");
const BookRouting = require("./routes/BookRouting");
const cors = require("cors");

const App = express();
App.use(express.json())
App.use(cors())
App.use('/api/book',BookRouting)


module.exports = App