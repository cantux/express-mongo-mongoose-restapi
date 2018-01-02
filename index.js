// Author cant
const express = require('express');
const app = express();

// cors
let cors = require('cors');
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

// 404
app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});

// 500
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
