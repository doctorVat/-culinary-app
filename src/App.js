import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './recipe'

const App = () => {
  const APP_ID = 'dd2d188b';
  const APP_KEY = '21fabd704d0a0981e62f61c2cbb1af75	';
  // const example = "https://api.edamam.com/search?q=chicken&app_id=${dd2d188b}&app_key=${21fabd704d0a0981e62f61c2cbb1af75}";


  const [recipes, setRecipes] = useState([]);
  const[search, setSearch] = useState('');
  const[query, setQuery] = useState('chicken'); //создал дополнительный state, чтобы не делать fetch после каждого onChange

useEffect( ()=>{
  getRecipes();
}, [query]);//добавили query сюда, что render страницу только при нажатии на submit

const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data)
  }

  const updateSearch = event => {
    setSearch(event.target.value)
  } 

  const getSearch = event => {
    event.preventDefault()
    setQuery(search)
    setSearch('')//когда пользователь нажмет submit - обнулим search
  } // когда user закончил ввод, и нажал submit - мы присваиваем state (query) значения от  state (search)
 
  return(
    <div className='App'>
    <form onSubmit= {getSearch} 
          className='search-form'>
      <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
      <button  className='search-button' type='submit'>  SEARCH</button>
      </form>
      <div className='Recipes'>
      {recipes.map(recipe => (
        <Recipe 
                key={recipe.recipe.label}
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories} 
                image={recipe.recipe.image} 
                ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  )
}

export default App;
