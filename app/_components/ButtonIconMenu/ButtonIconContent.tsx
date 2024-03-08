interface ButtonIconContentProps {
    text: string
}

export function ButtonIconContent({ text }: ButtonIconContentProps) {
    return (
        <span className="text-center text-md font-semibold">{text}</span>
    )
}