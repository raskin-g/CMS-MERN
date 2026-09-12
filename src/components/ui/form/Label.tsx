import type { ReactNode } from "react";

export type FormLabelPropsType = Readonly<{
    htmlFor?: string,
    className?: string,
    children: ReactNode
}>

export const FormLabel = ({htmlFor='', className='', children}: FormLabelPropsType)=>{
    return(
    <label htmlFor={htmlFor} className={`w-1/3 text-lg font-semibold ${className}`}>
        {children}
    </label>);
}