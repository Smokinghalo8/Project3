import React, { useState } from 'react';

const AddIngredientPage: React.FC = () => {
  const [ingredient, setIngredient] = useState('');
  const [message, setMessage] = useState('');

  const handleAddIngredient = async () => {
    try {
      const response = await fetch('http://localhost:3001/add-ingredient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: ingredient }),
      });




      if (response.ok) {
        setMessage('Ingredient added successfully');
        setIngredient('');
      } else {
        setMessage('Error adding ingredient, please contact ya boy Ethan');
      }
    } catch (error) {
      setMessage('Error adding ingredient, please contact ya boy Ethan');
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold underline">Add New Ingredient</h2>
      <input
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="New ingredient..."
      />
      <button onClick={handleAddIngredient}>Add Ingredient</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddIngredientPage;