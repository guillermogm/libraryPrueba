import express from 'express';
import { createdAuthor, deleteAuthorById, getAllAuthor, updateAuthorById } from './controllers/author.controller';
import { createBook, deleteBookById, getAllBooks, updateBookById } from './controllers/books.controller';

const app = express();
const PORT = process.env.PORT || 4000
// middleware
app.use(express.json())

app.get('/healthy', (req,res)=>{
    res.send('Server is healthy')
})
//Authors
app.get('/authors', getAllAuthor)

app.post('/authors', createdAuthor)

app.put('/authors/:id',updateAuthorById)

app.delete('/authors/:id',deleteAuthorById)

// Books
app.get('/books', getAllBooks)

app.post('/books',createBook)

app.put('/books/:id',updateBookById)

app.delete('/books/:id',deleteBookById)

// Sever listening
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})