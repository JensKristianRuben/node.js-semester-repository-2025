import express from "express";

const app = express();

app.use(express.json());

const books = [
  { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
];

let nextId = 4;

app.get("/api/books", (req, res) => {
  res.send({ data: books });
});

app.get("/api/books/:id", (req, res) => {
  const id = req.params.id;
  const book = books.find((book) => book.id == id);

  if (!book) {
    return res.status(404).send({ data: `not found book with id: ${id}` });
  }

  res.send({ data: book });
});

app.post("/api/books", (req, res) => {
  if (!req.body) {
    return res.status(400).send({ errorMessage: "Requires a JSON body" });
  }

  let newBook = req.body;
  newBook.id = nextId++;
  books.push(newBook);

  res.status(201).send({ data: newBook });
});

app.put("/api/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);

  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    return res
      .status(404)
      .send({ errormessage: `Book not found with id ${bookId}` });
  }

  const { title, author } = req.body;
  if (!title || !author) {
    return res
      .status(400)
      .send({ errorMessage: "All feilds are required to update book" });
  }

  books[bookIndex] = { id: bookId, title, author };

  res.send({ data: books[bookIndex] });
});

app.patch("/api/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);

  const bookIndex = books.findIndex((book) => book.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).send({ errormessage: `Book not found with id ${bookId}` });
  }

  books[bookIndex] = {
    ...books[bookIndex],
    ...req.body,
    id: bookId,
  };

  res.send({ data: books[bookIndex] });
});


app.delete("/api/books/:id", (req, res) => {
    const bookId = Number(req.params.id);
    const bookIndex = books.findIndex(book => book.id === bookId);

    if (bookIndex === -1) {
        return res.status(404).send({ errormessage: `Book not found with id ${bookId}` })
    }

    const removedBook = books.splice(bookIndex, 1);

    res.status(200).send({data: removedBook})
});

const PORT = Number(process.env.PORT);
app.listen(PORT, () => {
  console.log("server is running on port: ", PORT);
});
