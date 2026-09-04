import type { BaseSyntheticEvent } from "react"

export type InputComponentPropsType = Readonly<{
    type: string, //TODO: Input support only
    name: string,
    placeholder?: string //optional
    onChange: (e: BaseSyntheticEvent)=>void

}>
export const InputComponent = ({type, name, placeholder,onChange}: InputComponentPropsType) =>{
    return(<input
        type={type}
        name={name}
        onChange={onChange}
        className="border border-gray-300 bg-gray-50 w-full p-2 rounded-lg"
        placeholder={placeholder}/>
    )
}