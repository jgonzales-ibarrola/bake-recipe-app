import { FaPlus } from "react-icons/fa6"
import Button from "./Button"
import TextField from "./TextField"

const AddIngredient = () => {
  return (
    <div className="add-ingredient">
      <TextField placeholder="e.g sugar" style={{
        flexGrow: '2'
      }} />
      <Button style={{
        flexShrink: '1'
      }}><FaPlus />Add</Button>
    </div>
  )
}

export default AddIngredient