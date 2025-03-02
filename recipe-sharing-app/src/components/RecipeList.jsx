import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const { filteredRecipes, searchTerm, recipes, favorites, addFavorite, removeFavorite } = useRecipeStore(state => ({
    filteredRecipes: state.filteredRecipes,
    searchTerm: state.searchTerm,
    recipes: state.recipes,
    favorites: state.favorites,
    addFavorite: state.addFavorite,
    removeFavorite: state.removeFavorite
  }));

  const displayedRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      {displayedRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          {favorites.includes(recipe.id) ? (
            <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
          ) : (
            <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;