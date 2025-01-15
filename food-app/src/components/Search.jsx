import React, { useState, useEffect } from 'react';
import styles from './Search.module.css'; // Импортируем стили из CSS модуля

function Search() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('gluten free brownies');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=5&apiKey=602d57b4b4cc4dbab035755460026b16`);
        const data = await response.json();
        setRecipes(data.results);
      } catch (error) {
        setError(error);
      }
    };

    fetchRecipes();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type='text'
        placeholder='Введите запрос'
        className={styles.searchInput}
      />
      {error && <p className={styles.errorMessage}>Ошибка: {error.message}</p>}
      <ul className={styles.recipesList}>
        {recipes.map((recipe) => (
          <li key={recipe.id} className={styles.recipeItem}>
            <h3 className={styles.recipeTitle}>{recipe.title}</h3>
            <img
              src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`}
              alt={recipe.title}
              className={styles.recipeImage}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
