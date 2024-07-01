"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAuthorById = exports.updateAuthorById = exports.createdAuthor = exports.getAuthor = exports.getAllAuthor = void 0;
const getAllAuthor = (req, res) => {
    res.json({
        success: true,
        message: "Get all authors"
    });
};
exports.getAllAuthor = getAllAuthor;
const getAuthor = (req, res) => {
    res.json({
        success: true,
        message: `Get author: ${req.params.id}`
    });
};
exports.getAuthor = getAuthor;
const createdAuthor = (req, res) => {
    console.log(req.body);
    console.log(req.body.name);
    res.json({
        success: true,
        message: "Author created"
    });
};
exports.createdAuthor = createdAuthor;
const updateAuthorById = (req, res) => {
    res.json({
        success: true,
        message: `Author updated con id: ${req.params.id}`
    });
};
exports.updateAuthorById = updateAuthorById;
const deleteAuthorById = (req, res) => {
    res.json({
        success: true,
        message: `Author borrado con id: ${req.params.id}`
    });
};
exports.deleteAuthorById = deleteAuthorById;
