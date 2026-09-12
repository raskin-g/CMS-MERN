import type { HTMLInputTypeAttribute } from "react"
import { Controller, useController, type Control, type FieldValues, type Path } from "react-hook-form"

export type InputComponentPropsType<T extends FieldValues> = Readonly<{
    type?: HTMLInputTypeAttribute, //TODO: Input support only
    name: Path<T>
    placeholder?: string //optional
    control: Control<T>,
    errMsg?: string

}>
export const InputComponent = <T extends FieldValues>({type='text', name, placeholder='Enter your value...',control,errMsg=''}: InputComponentPropsType<T>) =>{
    return(<Controller
        name={name}
        control={control}
        render ={({field})=>{
          return(
            <>
            <input type={type} {...field} placeholder={placeholder} className="border border-gray-300 bg-gray-50 w-full p-2 rounded-lg shadow-lg" />
            <span className="text-red-800 text-sm italic">{errMsg}</span>
               </>
          )
        }} />
    )
}

export interface ISingleOption {
  label: string, 
  value: string
}

export type SelectComponentPropsType<T extends FieldValues> = Readonly<{
  name: Path<T>; 
  className?: string; 
  options: Array<ISingleOption>;
  multiple?: boolean;
  control: Control<T>;
  errMsg?: string;

}>

export type TextAreaComponentPropsType<T extends FieldValues> = Readonly<{
  name: Path<T>
  placeholder?: string;
  className?: string;
  rows?: number;
  errMsg?: string;
  control: Control<T>;
}>

export type FileUploadComponentPropsType<T extends FieldValues> = Readonly<{
  name: Path<T>, 
  multiple?: boolean, 
  errMsg?: string, 
  control: Control<T>
}>


export const SelectComponent = <T extends FieldValues>({name, control, errMsg='', className='', options}: SelectComponentPropsType<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({field})=>{
        return <><select
              {...field}
              className={`border border-gray-300 bg-gray-50 w-full p-2 rounded-lg shadow-lg ${className}`}>
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
    <span className="text-red-800 text-sm italic">{errMsg}</span>
    </>
      }}/>
  );
}

export const MultipleChoice = <T extends FieldValues>({name, control, errMsg='', className='', options, multiple=false}: SelectComponentPropsType<T>) => {
  const {field} = useController({
    name: name,
    control: control
  })
  return (
    <>
    <div className="flex flex-col">
      <div className="flex gap-3">
    {
      options && options.map((row: ISingleOption, i: number) => {
        return (
          <label key={i} htmlFor={row.value} className={`flex gap-1 items-center ${className}`}>
            <input {...field} className="size-4" type={multiple ? 'checkbox' : "radio"} id={row.value} value={row.value}/>{" "} {row.label}
          </label>
        );
      })
    }
    </div>
    <span className="text-red-800 text-sm italic">{errMsg}</span>
    </div>
    </>
  );
}

export const TextAreaComponent = <T extends FieldValues>({name, placeholder='Enter your value', className='', rows=4, errMsg, control}: TextAreaComponentPropsType<T>) => {
  const {field} = useController({
      name: name,
      control: control
  })
  return(
    <>
      <textarea rows={rows} {...field} className={`border border-gray-300 bg-gray-50 w-full p-2 rounded-lg shadow-lg resize-none ${className}`} placeholder={placeholder}></textarea>
      <span className="text-red-800 text-sm italic">{errMsg}</span>
    </>
  )
}

export const FileUploadComponent = <T extends FieldValues>({name, multiple=false, errMsg='', control}: FileUploadComponentPropsType<T>) => {
  const {field} = useController({
    name: name,
    control: control
  })
  return(
    <>
      <input type="file"
        multiple={multiple}
          className="border border-gray-300 bg-gray-50 w-full p-2 rounded-lg shadow-lg resize-none" {...field}
          onChange={(e)=>{
            const files = e.target.files;
            const images = Object.values(files as FileList);
            if(e.target.multiple){
              field.onChange(images)
            } else {
              field.onChange(images[0])
            }
          }} />
          <span className="text-red-800 text-sm italic">{errMsg}</span>
    </>
  )
}