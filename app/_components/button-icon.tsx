import { ButtonHTMLAttributes } from "react"
import { IconType as Icon } from "react-icons"

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon: Icon
    text: string
}

export function ButtonIcon({icon: Icon, text, ...rest}: ButtonIconProps) {
    return (
        <button 
            className="flex flex-col items-center justify-center w-32 h-32 p-4 rounded-lg m-2 bg-slate-500 focus:outline-none hover:bg-slate-700  focus:ring-2 focus:ring-blue-500" 
            {...rest}
        >
        <span className="flex items-center justify-center mb-2">
          {Icon && <Icon className="w-10 h-10"/>}
        </span>
        <span className="text-center text-md font-semibold">{text}</span>
      </button>
    )
}