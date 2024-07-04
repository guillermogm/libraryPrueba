"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBookById = exports.deleteBookById = exports.updateBookById = exports.createBook = exports.getAllBooks = void 0;
const Book_1 = require("../database/models/Book");
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBooks = yield Book_1.Book.find();
        return res.status(201).json({
            success: true,
            message: "All Books retrived",
            data: allBooks
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error getting Books",
            error: error
        });
    }
});
exports.getAllBooks = getAllBooks;
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const title = req.body.title;
        const description = req.body.description;
        const authorId = req.body.author_id;
        if (!title || !authorId) {
            res.status(400).json({
                success: false,
                message: "Title and Author are null"
            });
        }
        const createBook = yield Book_1.Book.create({
            title: title,
            description: description,
            authorId: authorId
        }).save();
        return res.status(201).json({
            success: true,
            message: "Book created"
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error creating Book",
            error: error
        });
    }
});
exports.createBook = createBook;
const updateBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idUpdate = req.params.id;
        const newInfo = req.body;
        const updateBook = yield Book_1.Book.update({ id: parseInt(idUpdate) }, newInfo);
        res.status(200).json({
            succes: true,
            message: "Update Book successfully",
            data: updateBook
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error Updating Book",
            error: error
        });
    }
});
exports.updateBookById = updateBookById;
const deleteBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idDelete = req.params.id;
        const deleteBook = yield Book_1.Book.delete(Number(idDelete));
        if (!deleteBook.affected) {
            return res.status(404).json({
                success: false,
                message: "Book doesn't exist"
            });
        }
        res.status(200).json({
            succes: true,
            message: "Delete Book successfully",
            data: deleteBook
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting Book",
            error: error
        });
    }
});
exports.deleteBookById = deleteBookById;
const getBookById = (req, res) => {
    res.json({
        success: true,
        message: `Get book con id: ${req.params.id}`
    });
};
exports.getBookById = getBookById;
