import 'dotenv/config';
import express from 'express';
import { createdAuthor, deleteAuthorById, getAllAuthor, getAuthor, updateAuthorById } from './controllers/authors.controller';
import { createBook, deleteBookById, getAllBooks, getBookById, updateBookById } from './controllers/books.controller';
import { createLoans, getAllLoans, updateLoanById, getLoanById, deleteLoanById } from './controllers/loans.controller';
import { createUser, getUserProfile, updateUserById, deleteUserById, getUserById } from './controllers/user.controller';
import { logInUser, signInUser } from './controllers/auth.controller';
import { AppDataSource } from './database/db';

const app = express();
const PORT = process.env.PORT || 4000
// middleware
app.use(express.json())

app.get('/healthy', (req, res) => {
    //res.send('Server is healthy')
    res.status(205).json({
        success: true,
        message: "Server is healthy"
    })
})
//Authors
app.get('/api/authors', getAllAuthor)
app.post('/api/authors', createdAuthor)
app.put('/api/authors/:id', updateAuthorById)
app.delete('/api/authors/:id', deleteAuthorById)
app.get('/api/author/:id', getAuthor)


// Books
app.get('/api/books', getAllBooks)
app.post('/api/books', createBook)
app.put('/api/books/:id', updateBookById)
app.delete('/api/books/:id', deleteBookById)
app.get('/api/books/:id', getBookById)

// Loans

app.get('/api/loans', getAllLoans)
app.post('/api/loans', createLoans)
app.put('/api/loans/:id', updateLoanById)
app.delete('/api/loans/:id', deleteLoanById)
app.get('/api/loans/:id', getLoanById)

// Users

app.get('/api/users/profile', getUserProfile)
app.post('/api/users/', createUser)
app.put('/api/users/:id', updateUserById)
app.delete('/api/users/:id', deleteUserById)
app.get('/api/users/:id', getUserById)

// Auth
app.post('/api/auth/register', signInUser)
app.post('/api/auth/login', logInUser)


AppDataSource.initialize()
    .then(() => {
        // Sever listening
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })

        console.log('Database connected');
    })
    .catch(error => {
        console.log(error)
    })