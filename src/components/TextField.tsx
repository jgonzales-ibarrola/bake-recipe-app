import { InputHTMLAttributes } from "react"

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const TextField = ({placeholder, onChange} : TextFieldProps) => {
  return (
    <input type="text" placeholder={placeholder} onChange={onChange} className="text-field" />
  )
}

export default TextField