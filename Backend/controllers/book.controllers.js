import Book from "../models/book.model.js";

export const getBook = async (req, res) => {
    try {
        // Fetch all books from the database
        const books = await Book.find();
        // Respond with the fetched books
        res.status(200).json(books);
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: error.message });
    }
};
