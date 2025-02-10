const IngredientsList = ({ingredients} : {ingredients: string[]}) => {
	const ingredientList = ingredients.map((ingredient, idx) => (
		<li key={idx}>{ingredient}</li>
	));

	return (
		<div>
			{ingredients.length > 0 ? (
				<ul>{ingredientList}</ul>
			) : (
				<h2>Add ingredients...</h2>
			)}
		</div>
	);
};

export default IngredientsList;
