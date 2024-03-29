import React, { useEffect , useState } from 'react';
import './App.css';

const App = () => {
  const APP_ID = process.env.REACT_APP_APP_ID;
  const API_KEY = process.env.REACT_APP_API_KEY;

useEffect( () =>{
  getRecipes();
},[])

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${API_KEY}`)
  const data = await response.json();
  console.log(data);
}

  return(
    <div className="App">
      <form className="search-form" type="text">
        <input className="search-bar" type="text" />
        <button 
          className="search-button" 
          type="submit">
          Search
        </button>
      </form>
    </div>
  );
};


export default App;
