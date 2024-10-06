import express from 'express';
const app = express();

app.get('/users', (req, res) => {
  res.send({message: 'Docker is easy 🐳'});
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

