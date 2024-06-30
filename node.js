const express = require('express');
const app = express();
const port = 3000;

app.get('/search', (req, res) => {
  let query = req.query.query;
  // Here you can add your search logic
  res.send(`You searched for: ${query}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
