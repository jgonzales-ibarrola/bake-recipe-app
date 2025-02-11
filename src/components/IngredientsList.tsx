import { useState, useCallback } from "react";
import AISuggestions from "./AISuggestions";
import GetRecipe from "./GetRecipe";
import { getRecipeFromMistral } from "../ai";

const IngredientsList = ({ ingredients }: { ingredients: string[] }) => {
    const [aiSuggestion, setAISuggestion] = useState("");
    const [loading, setLoading] = useState(false);

    const ingredientList = ingredients.map((ingredient, idx) => (
        <li key={idx}>{ingredient}</li>
    ));

    const throttle = (func: 
			// eslint-disable-next-line
			Function, limit: number) => {
        let inThrottle: boolean;
        return (...args: 
					// eslint-disable-next-line
					any[]) => {
            if (!inThrottle) {
                func(...args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    };

    const handleGetRecipe = useCallback(
        throttle(async () => {
            setLoading(true);
            try {
                const aiSuggests = await getRecipeFromMistral(ingredients);
                setAISuggestion(aiSuggests!);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }, 2000), // Throttle limit set to 2000ms (2 seconds)
        [ingredients]
    );

    return (
        <div className="ingredients-list">
            {ingredients.length > 0 ? (
                <ul>{ingredientList}</ul>
            ) : (
                <h2>Add ingredients...</h2>
            )}

            {ingredients.length > 3 && <GetRecipe onGetRecipe={handleGetRecipe} loading={loading} />}

            {loading && <p>Loading...</p>}

            {aiSuggestion && <AISuggestions suggestions={aiSuggestion} />}
        </div>
    );
};

export default IngredientsList;
