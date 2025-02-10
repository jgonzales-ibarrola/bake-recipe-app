import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button = ({children, className, style} : ButtonProps) => {
  return (
    <button className={`custom-button ${className}`} style={style}>
      {children}
    </button>
  )
}

export default Button