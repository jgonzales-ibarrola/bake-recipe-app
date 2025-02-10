import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button = ({children, className, style, type} : ButtonProps) => {
  return (
    <button type={type} className={`custom-button ${className}`} style={style}>
      {children}
    </button>
  )
}

export default Button