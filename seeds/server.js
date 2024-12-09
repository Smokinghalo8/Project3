const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 3001;




app.use(bodyParser.json());

app.get('/veggies', async (req, res) => {
  const veggies = await db('veggies').select('*');
  res.json(veggies);
});


app.get('/cooking-methods', async (req, res) => {
  const methods = await db('cooking_methods').select('*');
  res.json(methods);
});

app.post('/add-ingredient', async (req, res) => {
  const { name } = req.body;
  try {


    await db('veggies').insert({ name });
    res.status(201).json({ message: 'Ingredient added successfully' });


} catch (error) {

    res.status(500).json({ message: 'Error adding ingredient', error });


}
});




app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});