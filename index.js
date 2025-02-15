const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get("/books", async (req, res) => {
  try {
    res.status(200).json({ message: "books are returned" });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ message: `unique book is returned with id:${id}` });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.post("/books/:id", async (req, res) => {
  try {
    const {name, description} = req.body;
    res.status(201).json({ message: `${name} is created, info:${description}` });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.status(201).json({ message: `${id} is deleted`});
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.put("/books/:id", async (req, res) => {
  try {
    const {name, description} = req.body;
    res.status(201).json({ message: `${name} was updated, info:${description}` });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// GET /books => return all the books
// GET /books/:id => return all the books
