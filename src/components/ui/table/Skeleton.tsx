export default function TableRowSkeleton({rows,cols}: Readonly<{rows:number, cols:number}>){
    return(
        //map
        //[...Array(rows)] > [undifiened, undefined, undefined,undifiened, undefined, undefined, undefined]
        <>
        {[...Array(rows)].map((_, i:number) => {
            return (
                <tr key={i}>
                    {
                        [...Array(cols)].map((_, j: number)=>{
                            return(
                                <td key={`cols-${j}`} className="p-4 border border-teal border-teal-700">
                                    <p className="h-2 w-full rounded-full bg-gray-400 animate-pulse"></p>
                                </td>

                            )
                        })
                    
        }
                </tr>
            )
        })}
        </>
    )
}