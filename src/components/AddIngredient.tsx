import { FaPlus } from "react-icons/fa6"
import Button from "./Button"
import TextField from "./TextField"

const AddIngredient = ({onAdd} : {
  onAdd: (newIngredient: string) => void
}) => {

  const handleSubmit = (formData: FormData) => {
    const newIngredient = formData.get("new-ingredient") as string;
    
    onAdd(newIngredient)
  }

  return (
    <form action={handleSubmit} className="add-ingredient">
      <TextField placeholder="e.g sugar" style={{
        flexGrow: '2'
      }} name="new-ingredient" />
      <Button type="submit" style={{
        flexShrink: '1'
      }}><FaPlus />Add</Button>
    </form>
  )
}

export default AddIngredient