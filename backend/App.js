const express = require("express");
const BookRouting = require("./routes/BookRouting");


const App = express();
App.use(express.json())


App.use('/api/book',BookRouting)


module.exports = App