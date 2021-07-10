const express = require('express');
const morgan = require('morgan');
const db = require('../db/queries');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/income', async (req, res) => {
  try {
    const incomePromise = await db.any('select * from income order by created_at');
    res.send(incomePromise);
  } catch (e) {
    console.log(e.stack);
    res.sendStatus(404);
  }
});

app.get('/expense', async (req, res) => {
  try {
    const expensePromise = await db.any('select * from expense order by created_at');
    res.send(expensePromise);
  } catch (e) {
    console.log(e.stack);
    res.sendStatus(404);
  }
});

app.post('/income', async (req, res) => {
  try {
    const { title, category, amount } = req.body;
    const incomePromise = await db.any(`insert into income(title, category, amount, created_at)
    values('${title}', '${category}', '${amount}', current_timestamp)`);
    res.send(incomePromise);
  } catch (e) {
    console.log(e.stack);
    res.sendStatus(404);
  }
});

app.post('/expense', async (req, res) => {
  try {
    const { title, category, amount } = req.body;
    const expensePromise = await db.any(`insert into expense(title, category, amount, created_at)
    values('${title}', '${category}', '${amount}', current_timestamp)`);
    res.send(expensePromise);
  } catch (e) {
    console.log(e.stack);
    res.sendStatus(404);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
