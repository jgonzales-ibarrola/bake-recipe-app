import Button from "./Button"

const GetRecipe = ({onGetRecipe} : {
  onGetRecipe: () => void;
}) => {
  return (
    <div className="get-recipe">
      <div className="get-recipe--desc">
        <h3>Ready for bake?</h3>
        <p>Generate a recipe based on your ingredients provided.</p>
      </div>

      <Button type="button" className="get-recipe-cta" onClick={onGetRecipe}>Get Recipe</Button>
    </div>
  )
}

export default GetRecipe