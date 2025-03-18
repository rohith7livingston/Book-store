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

const handleRemoveBook = async () => {
    if (!bookTitle) {
      setResponseMessage('Book title is required to delete.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:8000/api/book/RemoveBook', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Name: bookTitle }),
      });
  
      const data = await response.json();
      setResponseMessage(data.message);
    } catch (error) {
      setResponseMessage('Error deleting the book.');
    }
};

const GetBook = async (req, res) => {
    try {
        const { Name } = req.params;

        if (!Name) {
            return res.status(400).json({
                message: "Book Name is required",
                status: "Failed"
            });
        }

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

module.exports = { AddBook, handleRemoveBook, GetBook };
