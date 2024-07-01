"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookById = exports.deleteBookById = exports.updateBookById = exports.createBook = exports.getAllBooks = void 0;
const getAllBooks = (req, res) => {
    res.json({
        success: true,
        message: "Get all books"
    });
};
exports.getAllBooks = getAllBooks;
const createBook = (req, res) => {
    console.log(req.body);
    console.log(req.body.title);
    res.json({
        success: true,
        message: "Book created"
    });
};
exports.createBook = createBook;
const updateBookById = (req, res) => {
    res.json({
        success: true,
        message: `Book updated con id: ${req.params.id}`
    });
};
exports.updateBookById = updateBookById;
const deleteBookById = (req, res) => {
    res.json({
        success: true,
        message: `Book borrado con id: ${req.params.id}`
    });
};
exports.deleteBookById = deleteBookById;
const getBookById = (req, res) => {
    res.json({
        success: true,
        message: `Get book con id: ${req.params.id}`
    });
};
exports.getBookById = getBookById;
