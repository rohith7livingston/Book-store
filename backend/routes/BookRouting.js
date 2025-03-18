const express = require("express")
const {AddBook, handleRemoveBook ,GetBook}  = require("./../controllers/BookController")
const router = express.Router();


router.post("/AddBook",AddBook);
router.delete("/RemoveBook", handleRemoveBook);
router.get("/GetBook/:Name",GetBook);
module.exports = router; 