import React, { useEffect, useState } from 'react';

//allow for tags and names for the database were linking to

const Generator: React.FC = () => {
  const [veggies, setVeggies] = useState<{ id: number; name: string }[]>([]);
  const [methods, setMethods] = useState<{ id: number; method: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => { //Im so glad this finally works :!
      const veggiesResponse = await fetch('http://localhost:3001/veggies');
      const veggiesData = await veggiesResponse.json();
      setVeggies(veggiesData);

      const methodsResponse = await fetch('http://localhost:3001/cooking-methods');
      const methodsData = await methodsResponse.json();
      setMethods(methodsData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Veggies</h2>
      <ul>
        {veggies.map((veggie) => (
          <li key={veggie.id}>{veggie.name}</li>
        ))}
      </ul>
      <h2>Cooking Methods</h2>
      <ul>
        {methods.map((method) => (
          <li key={method.id}>{method.method}</li>
        ))}
      </ul>
    </div>
  );
};

export default Generator;