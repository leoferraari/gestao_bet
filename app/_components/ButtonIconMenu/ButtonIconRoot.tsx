import { ReactNode } from "react"
import { twMerge } from 'tailwind-merge'

interface ButtonIconRootProps {
    children: ReactNode
    onClick: () => void
    className?: string
}

export function ButtonIconRoot({ children, onClick, ...rest}: ButtonIconRootProps) {
    return (
        <button 
            onClick={onClick}
            className={twMerge("flex flex-col items-center justify-center w-32 h-32 p-4 rounded-lg m-2 bg-slate-500 focus:outline-none hover:bg-slate-700  focus:ring-2 focus:ring-blue-500", rest.className)} 
        >
        {children}
        </button>
    )
}