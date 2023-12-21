const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/xkcd/:comicNumber', async (req, res) => {
  const comicNumber = req.params.comicNumber;
  const url = `https://xkcd.com/${comicNumber}/info.0.json`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).send(error.response.statusText);
  }
});

app.use(express.static(__dirname + '/'));

app.listen(3000, () => console.log('Server started on port 3000'));