const express = require("express")
const {AddBook, RemoveBook ,GetBook}  = require("./../controllers/BookController")
const router = express.Router();


router.post("/AddBook",AddBook);
router.get("/RemoveBook",RemoveBook)
router.get("/GetBook/:Name",GetBook);
module.exports = router; 