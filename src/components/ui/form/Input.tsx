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

export interface ISingleOption {
  label: string, 
  value: string
}

export type SelectComponentPropsType = Readonly<{
  name: string, 
  className?: string, 
  options: Array<ISingleOption>,
  multiple?: boolean
}>
export const SelectComponent = ({name, className='', options}: SelectComponentPropsType) => {
  return (
    <select
      name={name}
      className={`border border-gray-300 bg-gray-50 w-full p-2 rounded-lg shadow-lg ${className}`}
    >
      <option value="">-- Select Any One --</option>
      {
        options && options.map((option:ISingleOption, i: number) => {
          return (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          );
        })
      }
    </select>
  );
}

export const MultipleChoice = ({name, className='', options, multiple=false}: SelectComponentPropsType) => {
  return (
    options && options.map((row: ISingleOption, i: number) => {
      return (
        <label key={i} htmlFor={row.value} className={`flex gap-1 items-center ${className}`}>
          <input className="size-4" type={multiple ? 'checkbox' : "radio"} id={row.value} name={name} value={row.value}/>{" "} {row.label}
        </label>
      );
    })
  );
}