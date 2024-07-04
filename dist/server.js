"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const authors_controller_1 = require("./controllers/authors.controller");
const books_controller_1 = require("./controllers/books.controller");
const loans_controller_1 = require("./controllers/loans.controller");
const user_controller_1 = require("./controllers/user.controller");
const auth_controller_1 = require("./controllers/auth.controller");
const db_1 = require("./database/db");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
// middleware
app.use(express_1.default.json());
app.get('/healthy', (req, res) => {
    //res.send('Server is healthy')
    res.status(205).json({
        success: true,
        message: "Server is healthy"
    });
});
//Authors
app.get('/api/authors', authors_controller_1.getAllAuthor);
app.post('/api/authors', authors_controller_1.createdAuthor);
app.put('/api/authors/:id', authors_controller_1.updateAuthorById);
app.delete('/api/authors/:id', authors_controller_1.deleteAuthorById);
app.get('/api/author/:id', authors_controller_1.getAuthor);
// Books
app.get('/api/books', books_controller_1.getAllBooks);
app.post('/api/books', books_controller_1.createBook);
app.put('/api/books/:id', books_controller_1.updateBookById);
app.delete('/api/books/:id', books_controller_1.deleteBookById);
app.get('/api/books/:id', books_controller_1.getBookById);
// Loans
app.get('/api/loans', loans_controller_1.getAllLoans);
app.post('/api/loans', loans_controller_1.createLoans);
app.put('/api/loans/:id', loans_controller_1.updateLoanById);
app.delete('/api/loans/:id', loans_controller_1.deleteLoanById);
app.get('/api/loans/:id', loans_controller_1.getLoanById);
// Users
app.get('/api/users/', user_controller_1.getUsers);
app.post('/api/users/', user_controller_1.createUser);
app.put('/api/users/:id', user_controller_1.updateUserById);
app.delete('/api/users/:id', user_controller_1.deleteUserById);
app.get('/api/users/:id', user_controller_1.getUserById);
// Auth
app.post('/api/auth/register', auth_controller_1.signInUser);
app.post('/api/auth/login', auth_controller_1.logInUser);
db_1.AppDataSource.initialize()
    .then(() => {
    // Sever listening
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    console.log('Database connected');
})
    .catch(error => {
    console.log(error);
});
