import { useState } from "react";
import AISuggestions from "./AISuggestions";
import GetRecipe from "./GetRecipe";
import { getRecipeFromMistral } from "../ai";

const IngredientsList = ({ ingredients }: { ingredients: string[] }) => {
	const [aiSuggestion, setAISuggestion] = useState("");
	const ingredientList = ingredients.map((ingredient, idx) => (
		<li key={idx}>{ingredient}</li>
	));

	async function handleGetRecipe() {
		try {
			const aiSuggests = await getRecipeFromMistral(ingredients)
			setAISuggestion(aiSuggests!)
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="ingredients-list">
			{ingredients.length > 0 ? (
				<ul>{ingredientList}</ul>
			) : (
				<h2>Add ingredients...</h2>
			)}

			{ingredients.length > 3 && <GetRecipe onGetRecipe={handleGetRecipe} />}

			{aiSuggestion && <AISuggestions suggestions={aiSuggestion} />}
		</div>
	);
};

export default IngredientsList;
