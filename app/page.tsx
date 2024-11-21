"use client"
//This is needed to run the website :(

import React, { useEffect, useState } from 'react';
//import generator from "./pages/generator";


/*
The idea is to create a website that will have a button that links to another subsite that has
 */

//Media Item keeps track of variables that come in from json files.
/*interface MediaItem {
  id: number;
  title: string;
  author: string;
  publicationYear: number;
}
*/


//unsure what this does....
const Page: React.FC = () => {



  //Grabbing information from outside json file and then slapping that into a response variable and than slapping into another data variable
  useEffect(() => {
    const fetchData = async () => {
    };
    fetchData();
  }, []);

  //Simple function for handleing the clicks, this will find the rest of the information about a certain type of cheese and spit it out!
  //const handleClick = (id: number) => {
  //};

  return (
    <div>
      <h2 className="text-3xl font-bold underline">ALIEN RECIPE DATABASE BABEY</h2>
      <h2>Recipe Book:</h2>
        <button></button>
      <h2>Generate a Recipe!</h2>
        <button></button>
      <h2>New Ingredient</h2>
        <button></button>

    </div>
  );
};
//looks so much better with Tailwind
export default Page;