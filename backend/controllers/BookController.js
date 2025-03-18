const BookModel = require("./../models/BookModel");

const AddBook = async (req, res) => {
    try {
        const { Name, Author, Pages, Price, Rating } = req.body;

        if (!Name || !Author) {
            return res.status(400).json({
                message: "Name and Author are required",
                status: "Failed"
            });
        }
        const existingBook = await BookModel.findOne({ Name, Author });
        if (existingBook) {
            return res.status(400).json({
                message: "Book already exists",
                status: "Failed"
            });
        }
        const newBook = new BookModel({ Name, Author, Pages, Price, Rating });
        const savedBook = await newBook.save();

        res.status(201).json({
            message: "Book added successfully",
            status: "Success",
            data: savedBook
        });

    } catch (err) {
        res.status(500).json({
            message: err.message,
            status: "Failed"
        });
    }
};


const RemoveBook = async (req, res) => {
    try {
        const { Name } = req.body;

        if (!Name) {
            return res.status(400).json({
                message: "Book Name is required",
                status: "Failed"
            });
        }

        const deletedBook = await BookModel.findOneAndDelete({ Name });

        if (!deletedBook) {
            return res.status(404).json({
                message: "Book not found",
                status: "Failed"
            });
        }

        res.status(200).json({
            message: "Book removed successfully",
            status: "Success",
            data: deletedBook
        });

    } catch (err) {
        res.status(500).json({
            message: err.message,
            status: "Failed"
        });
    }
};


const GetBook = async (req, res) => {
    try {
        const { Name } = req.params; // Get Name from request parameters

        if (!Name) {
            return res.status(400).json({
                message: "Book Name is required",
                status: "Failed"
            });
        }

        // Search for the book
        const book = await BookModel.findOne({ Name });

        if (!book) {
            return res.status(404).json({
                message: "Book not found",
                status: "Failed"
            });
        }

        res.status(200).json({
            message: "Book found successfully",
            status: "Success",
            data: book
        });

    } catch (err) {
        res.status(500).json({
            message: err.message,
            status: "Failed"
        });
    }
};


module.exports = { AddBook , RemoveBook ,GetBook};
