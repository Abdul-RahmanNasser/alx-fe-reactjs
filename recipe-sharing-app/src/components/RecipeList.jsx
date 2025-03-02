import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const { filteredRecipes, searchTerm, recipes } = useRecipeStore(state => ({
    filteredRecipes: state.filteredRecipes,
    searchTerm: state.searchTerm,
    recipes: state.recipes
  }));

  const displayedRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      {displayedRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;