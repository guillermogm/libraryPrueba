import express from 'express';

const app = express();
const PORT = process.env.PORT || 4000
// middleware
app.use(express.json())

app.get('/healthy', (req,res)=>{
    res.send('Server is healthy')
})
//Authors
app.get('/authors', (req,res)=>{
    res.send('Get all authors')
})

app.post('/authors',(req, res) =>{
    console.log(req.body)
    console.log(req.body.name)
    res.send('Author created')
})

app.put('/authors/:id',(req, res) =>{
    res.send(`Author updated con id: ${req.params.id}`)
})

app.delete('/authors/:id',(req, res) =>{
    res.send(`Author deleted con id: ${req.params.id}`)
})

// Books
app.get('/books', (req,res)=>{
    res.send('Get all books')
})

app.post('/books',(req, res) =>{
    res.send('Book created')
})

app.put('/books',(req, res) =>{
    res.send('Book updated')
})

app.delete('/books',(req, res) =>{
    res.send('Book deleted')
})

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})