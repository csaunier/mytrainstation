import {ButtonHTMLAttributes} from "react";

type ButtonProps = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
  const { children, ...restProps } = props
  return (
    <button
      {...restProps}
      className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-1 px-4 rounded-lg"
    >
      {children}
    </button>
  )
}
