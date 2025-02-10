import { useState } from 'react';
import AddIngredient from './AddIngredient'
import IngredientsList from './IngredientsList'

const Main = () => {
  const [ingredients, setIngredients] = useState([
		"oregano",
		"pepper",
		"AP flour",
		"chocolate",
	]);

  return (
    <main>
      <AddIngredient />
      <IngredientsList ingredients={ingredients} />
    </main>
  )
}

export default Main