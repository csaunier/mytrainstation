type ButtonProps = {
    children: ReactNode
}

export const Button = (props: ButtonProps) => {
    const { children } = props
    return (
        <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            {children}
        </button>
    )
}