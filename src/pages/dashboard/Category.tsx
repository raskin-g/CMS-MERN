import TableRowSkeleton from "../../components/ui/table/Skeleton";
import { PageTitle2 } from "../../components/ui/typography/Title";
import {Icon} from "@iconify/react" 
export default function CategoryList(){
    return(<>
    <div className="w-full flex justify-between">
        <PageTitle2 title="Categories List"></PageTitle2>
        <a href="" className="p-2 px-10 text-center rounded-full cursor-pointer hover:bg-teal-950 transition duration-300 hover:scale-102 bg-teal-900 text-white">
            Add Category
        </a>
    </div>
    <div className="w-full flex flex-col gap-5 my-5">
        <table>
            <thead className="bg-gray-950 text-white">
                <tr>
                    <th className="p-4 boder-r border-r-gray-700">Name</th>
                    <th className="p-4 boder-r border-r-gray-700">Url</th>
                    <th className="p-4 boder-r border-r-gray-700">Icon/Image</th>
                    <th className="p-4 boder-r border-r-gray-700">Status</th>
                    <th className="p-4 boder-r border-r-gray-700">Action</th>
                </tr>
            </thead>
            <tbody>
                <TableRowSkeleton rows={5} cols={5}/>
            </tbody>
        </table>

        <div className="justify-end">
            <ul className="flex gap-3">
                <li className="size-8 bg-gray-100 flex items-center justify-center rounded-full shadow-lg text-sm font-semibold text-gray-800 hover:bg-gray-400">
                    <a href=""><Icon icon={"ant-design:caret-left-filled"}/> </a>
                </li>
                <li className="size-8 bg-gray-100 flex items-center justify-center rounded-full shadow-lg text-sm font-semibold text-gray-800">
                    <a href="">1</a>
                </li>
                <li className="size-8 bg-gray-100 flex items-center justify-center rounded-full shadow-lg text-sm font-semibold text-gray-800">
                    <a href="">2</a>
                </li>
                <li className="size-8 bg-gray-100 flex items-center justify-center rounded-full shadow-lg text-sm font-semibold text-gray-800">
                    <a href=""><Icon icon={"ant-design:caret-right-filled"}/></a>
                </li>

            </ul>

        </div>
    </div>
    </>
        
    )
}