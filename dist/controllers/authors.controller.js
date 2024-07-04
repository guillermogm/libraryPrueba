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
exports.deleteAuthorById = exports.updateAuthorById = exports.createdAuthor = exports.getAuthor = exports.getAllAuthor = void 0;
const Author_1 = require("../database/models/Author");
const getAllAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Authors = yield Author_1.Author.find();
        res.status(200).json({
            success: true,
            message: "Authors retrive successfully",
            data: Authors
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retrive authors",
            error: error
        });
    }
});
exports.getAllAuthor = getAllAuthor;
const getAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getAuthor = getAuthor;
const createdAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // saca info del body del json
        const name = req.body.name;
        const nationality = req.body.nationality;
        // Comprobar campos vacios
        if (!name) {
            return res.status(400).json({
                success: false,
                message: "name is required"
            });
        }
        if (!nationality) {
            return res.status(400).json({
                success: false,
                message: "nationality is required"
            });
        }
        // Guardar datos en la base de datos
        const newAuthor = yield Author_1.Author.create({
            name: name,
            nationality: nationality
        }).save();
        // Respuesta correcta de guardado
        res.json({
            success: true,
            message: "Author created",
            data: newAuthor
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating author",
            error: error
        });
    }
});
exports.createdAuthor = createdAuthor;
const updateAuthorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idUpdate = req.params.id;
        const newInfo = req.body;
        const updateAuthor = yield Author_1.Author.update({ id: parseInt(idUpdate) }, newInfo);
        res.status(200).json({
            succes: true,
            message: "Update Author successfully",
            data: updateAuthor
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error Updating author",
            error: error
        });
    }
});
exports.updateAuthorById = updateAuthorById;
const deleteAuthorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idDelete = req.params.id;
        const deleteAuthor = yield Author_1.Author.delete(Number(idDelete));
        if (!deleteAuthor.affected) {
            return res.status(404).json({
                success: false,
                message: "Author doesn't exist"
            });
        }
        res.status(200).json({
            succes: true,
            message: "Delete Author successfully",
            data: deleteAuthor
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting author",
            error: error
        });
    }
});
exports.deleteAuthorById = deleteAuthorById;
