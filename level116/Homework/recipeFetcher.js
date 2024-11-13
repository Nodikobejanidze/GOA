// recipeFetcher.js
import axios from 'axios';

const APP_ID = 'YOUR_APP_ID';  // Replace with your App ID
const APP_KEY = 'YOUR_APP_KEY';  // Replace with your App Key

export const fetchRecipes = async (ingredient) => {
    try {
        const response = await axios.get(`https://api.edamam.com/api/recipes/v2`, {
            params: {
                type: 'public',
                q: ingredient,
                app_id: APP_ID,
                app_key: APP_KEY
            }
        });
        
        return response.data.hits;  // Return the recipe results
    } catch (error) {
        console.error("Error fetching recipes:", error);
        throw error;
    }
};
