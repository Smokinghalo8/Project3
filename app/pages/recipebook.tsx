import React, { useState } from 'react';
//import { motion } from "motion/react"

const RecipeBook: React.FC = () => {
  const [recipe, setRecipe] = useState('');
  const [error, setError] = useState('');
  const [recipeId, setRecipeId] = useState<number | null>(null);

  const generateRecipe = async () => {
    try {

      const ingredientResponse = await fetch('http://localhost:3001/random-ingredient');
      
      
      if (!ingredientResponse.ok) throw new Error('Failed to fetch ingredient');
      const ingredient = await ingredientResponse.json();

      const methodsResponse = await fetch('http://localhost:3001/random-cooking-methods');
      
      
      
      if (!methodsResponse.ok) throw new Error('Failed to fetch cooking methods');
      const methods = await methodsResponse.json();

      const pseudoRecipe = `Take ${ingredient.name} and ${methods[0].method} it, then ${methods[1].method} it. Enjoy your meal!`;
      setRecipe(pseudoRecipe);
      setError('');
      setRecipeId(null); // Reset recipeId when generating a new recipe
    
    
    } catch (error) {
      setError('Error generating recipe. Please try again.');
      console.error('Error generating recipe:', error);
    
    }


  };

  const saveRecipe = async () => {
    
    
    
    
    try {
      const response = await fetch('http://localhost:3001/save-recipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({ recipe }),
      });




      if (response.ok) {
        const data = await response.json();
        setRecipeId(data.id); //grab that unique ID
        setError('');


      } else {
        setError('Error saving recipe, PLEASE talk to ETHAN');
      }
    } catch (error) {
      setError('Error saving recipe, please talk to ETHAN');
      console.error('Error saving recipe:', error);
    }
  };

  const likeRecipe = async () => {


    if (recipeId === null) {

      setError('Please Save it first');
      return;
    }


    //risky POST requests
    try {
      const response = await fetch('http://localhost:3001/like-recipe', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: recipeId }),
      });



      if (response.ok) {
        setError('');
      } else {
        setError('Error liking recipe, please talk to ETHAN');
      }
    } catch (error) {
      setError('Error liking recipe, please talk to ETHAN');
      console.error('Error liking recipe:', error);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold underline">Recipe Book</h2>
      <button onClick={generateRecipe}>Generate Recipe</button>
      {recipe && <p>{recipe}</p>}
      {recipe && <button onClick={saveRecipe}>Save Recipe</button>}
      {recipeId !== null && <button onClick={likeRecipe}>Like Recipe</button>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default RecipeBook;