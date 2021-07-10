const axios = require('axios');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const PORT = 8080;
const API_URL = 'http://localhost:3000';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '../public')));

app.all('/*', (async (req, res) => {
  console.log(`${req.method} request on ${req.url}`);
  const options = {
    method: req.method,
    url: `${API_URL}${req.url}`,
    data: req.body,
  };

  const results = await axios(options).catch((err) => {
    res.status(500);
    res.send(err.response.data);
  });
  if (results) {
    res.send(results.data);
    console.log(results.data);
  }
}));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
