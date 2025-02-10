import { useState } from "react";
import AddIngredient from "./AddIngredient";
import IngredientsList from "./IngredientsList";

const Main = () => {
	const [ingredients, setIngredients] = useState([
		"oregano",
		"pepper",
		"AP flour",
		"chocolate",
	]);

	const handleAddIngredient = (newIngredient: string) => {
		setIngredients((prevIngredients) => [
			...prevIngredients,
			newIngredient,
		]);
	};

	return (
		<main>
			<AddIngredient onAdd={handleAddIngredient} />
			<IngredientsList ingredients={ingredients} />
		</main>
	);
};

export default Main;
