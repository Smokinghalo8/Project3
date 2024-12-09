import React, { useEffect, useState } from 'react';

const Book: React.FC = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');




  useEffect(() => {
    
    const fetchRecipes = async () => {
      
      
      
        try {


        const response = await fetch('http://localhost:3001/recipes');
        
        if (!response.ok) throw new Error('Failed to fetch recipes');
        const data = await response.json();
        setRecipes(data);
      
    
    } catch (error) {
        setError('Error fetching recipes. Please find ETHAN');
        console.error('Error fetching recipes:', error);
    
    
    }
    };

    fetchRecipes();
  }, []);

  return (
    <div>

      <h2 className="text-3xl font-bold underline">Saved Recipes</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul>

        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <p>{recipe.recipe}</p>
            <p>Likes: {recipe.likes}</p>
          </li>
        ))}
      
      </ul>
    </div>
  );
};

export default Book;