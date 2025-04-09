type ButtonProps = {
  children: ReactNode
}

export const Button = (props: ButtonProps) => {
  const { children } = props
  return (
    <button type="button" className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-1 px-4 rounded-lg">
      {children}
    </button>
  )
}
