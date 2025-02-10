import { InputHTMLAttributes } from "react"

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const TextField = ({placeholder, onChange, className, style, name} : TextFieldProps) => {
  return (
    <input type="text" name={name} placeholder={placeholder} style={style} onChange={onChange} className={`text-field ${className}`} />
  )
}

export default TextField