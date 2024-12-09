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



app.get('/random-ingredient', async (req, res) => {
  const [ingredient] = await db('veggies').orderByRaw('RANDOM()').limit(1);//weird syntax, but I found it interesting and wanted to implement it, seems to work fine
  res.json(ingredient);
});



app.get('/random-cooking-methods', async (req, res) => {
  const methods = await db('cooking_methods').orderByRaw('RANDOM()').limit(2);

  res.json(methods);
});



app.post('/add-ingredient', async (req, res) => {
  const { name } = req.body;
  try {
    await db('veggies').insert({ name });
    res.status(201).json({ message: 'Ingredient added successfully!!' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding ingredient, please contact Ethat: ', error });
  }
});



app.post('/save-recipe', async (req, res) => {
  const { recipe } = req.body;
  try {
    await db('recipes').insert({ recipe });
    res.status(201).json({ message: 'Recipe saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving recipe, please contact Ethat: ', error });
  }
});



app.post('/like-recipe', async (req, res) => {
  const { id } = req.body;
  try {
    await db('recipes').where('id', id).increment('likes', 1);
    res.status(200).json({ message: 'Recipe liked successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error liking recipe, please contact Ethat: ', error });
  }
});



app.get('/recipes', async (req, res) => {
  try {
    const recipes = await db('recipes').select('*');
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipes, please contact Ethat: ', error });
  }
});



app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);//aha looks like linux
});