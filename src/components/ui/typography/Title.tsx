//we send the data to component, props
//props are readonly data type
    //{props.title} or {props.className}
export type PageTitle2Props = Readonly<{
    title: string,
    className?: string
}>
export const PageTitle2 = ({title,className}: PageTitle2Props) =>{
    //data create here by the component
    //state
    return(
        <h2 className={`text-2xl font-semibold text-shadow-lg ${className}`}>
            {title}
        </h2>
    )
}