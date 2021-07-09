const express = require('express');
const morgan = require('morgan');
const path = require('path');
// const db = require();
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
