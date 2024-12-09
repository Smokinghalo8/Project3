"use client"
//This is needed to run the website :(

import React from 'react';
import { Link } from 'react-router-dom';
//import generator from "./pages/generator";


/*
The idea is to create a website that will have a button that links to another subsite that has
 */



//unsure what this does still but we balling
const Page = () => {

  return (
    <div>
      <h2 className="text-3xl font-bold underline">ALIEN RECIPE DATABASE BABEY</h2>
      <h2>Recipe Book:</h2>
      <button>View Recipes</button>
      <h2>Generate a Recipe!</h2>
      <button>Generate</button>
      <h2>New Ingredient</h2>
      <button>Add Ingredient</button>
      <nav>
        <Link to="/search">Search Recipes</Link>
        <Link to="/add-ingredient">Add New Ingredient</Link>
        <Link to="/recipe-book">Recipe Book</Link>
        <Link to="/book">Saved Recipes</Link>
      </nav>
    </div>
  );
};
//looks so much better with Tailwind
export default Page;