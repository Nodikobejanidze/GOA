// script.js
import { fetchRecipes } from './recipeFetcher.js';

document.getElementById('searchButton').addEventListener('click', async () => {
    const ingredient = document.getElementById('ingredientInput').value;
    
    if (ingredient === '') {
        alert('Please enter an ingredient.');
        return;
    }

    try {
        const recipes = await fetchRecipes(ingredient);
        displayRecipes(recipes);
    } catch (error) {
        document.getElementById('recipeResults').innerHTML = 'Error fetching recipes. Please try again later.';
    }
});

const displayRecipes = (recipes) => {
    const resultsContainer = document.getElementById('recipeResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (recipes.length === 0) {
        resultsContainer.innerHTML = 'No recipes found.';
        return;
    }

    recipes.forEach((recipe) => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');

        recipeElement.innerHTML = `
            <h2>${recipe.recipe.label}</h2>
            <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}" width="200">
            <p><strong>Ingredients:</strong></p>
            <ul>
                ${recipe.recipe.ingredients.map(ingredient => `<li>${ingredient.text}</li>`).join('')}
            </ul>
            <p><strong>Instructions:</strong> ${recipe.recipe.url}</p>
        `;

        resultsContainer.appendChild(recipeElement);
    });
};
