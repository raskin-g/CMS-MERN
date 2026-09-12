import type { ReactNode } from "react"

type ButtonPropsType = Readonly<
{
    disabled?: boolean,
    type?: "button" | "reset" | "submit",
    className?: string,
    children: ReactNode
}>

export const Button = ({disabled=false, type="button", className='', children}: ButtonPropsType) =>{
    return(
        <>
        <button disabled={disabled} className={`disabled:cursor-not-allowed w-full p-2 rounded-lg text-white font-semibold hover:cursor-pointer hover:scale-102 transition duration-300 flex gap-2 items-center justify-center
             ${type === 'reset' ? ' disabled:bg-red-900/50 bg-red-800 hover:bg-red-900 ' : (
                type === "submit" ? ' disabled:bg-teal-900/50 bg-teal-800 hover:bg-teal-900 ':
                                    ' disabled:bg-gray-900/50 bg-gray-800 hover:bg-gray-900 '
             )} ${className}
             `} type={type}>{children}
        </button>
        </>
    )
}