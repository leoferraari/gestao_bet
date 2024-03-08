import { ButtonHTMLAttributes } from "react"
import { IconType as Icon } from "react-icons"

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon: Icon
}

export function ButtonIcon({ icon: Icon }: ButtonIconProps) {
    return (
      <span className="flex items-center justify-center mb-2">
        {Icon && <Icon className="w-10 h-10"/>}
      </span>
    )
}