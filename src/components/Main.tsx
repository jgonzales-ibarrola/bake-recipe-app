import { useState } from "react";
import AddIngredient from "./AddIngredient";
import IngredientsList from "./IngredientsList";

const Main = () => {
	const [ingredients, setIngredients] = useState<string[]>([]);

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
