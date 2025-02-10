import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button = ({children, className, style, type, onClick} : ButtonProps) => {
  return (
    <button type={type} className={`custom-button ${className}`} style={style} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button