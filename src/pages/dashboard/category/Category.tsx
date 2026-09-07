import { NavLink } from "react-router";
import TableRowSkeleton from "../../../components/ui/table/Skeleton";
import { PageTitle2 } from "../../../components/ui/typography/Title";
import {Icon} from "@iconify/react" 
export default function CategoryList(){
    return(<>
    <div className="w-full flex justify-between">
        <PageTitle2 title="Categories List"></PageTitle2>
        <div className="flex w-1/2 gap-3">
            <form action="" className="w-2/3 justify-end">
                <input type="search" placeholder="Enter your keyword to search " className="px-5 border rounded-full border-teal-500 w-full p-2"></input>
            </form>
            <NavLink to="/dashboard/category-create" className="w-1/3 p-2 px-10 text-center rounded-full cursor-pointer hover:bg-teal-950 transition duration-300 hover:scale-102 bg-teal-900 text-white">
                Add Category
            </NavLink>
        </div>
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

        <div className="w-full justify-end">
            <ul className="flex gap-3">
                <li className="size-8 bg-gray-100 flex items-center justify-center rounded-full shadow-lg text-sm font-semibold text-gray-800 hover:bg-gray-400">
                    <NavLink to=""><Icon icon={"ant-design:caret-left-filled"}/> </NavLink>
                </li>
                <li className="size-8 bg-teal-800 flex items-center justify-center rounded-full shadow-lg text-sm font-semibold text-white">
                    <NavLink to="">1</NavLink>
                </li>
                <li className="size-8 bg-gray-100 flex items-center justify-center rounded-full shadow-lg text-sm font-semibold text-gray-800 hover:bg-gray-400">
                    <NavLink to="">2</NavLink>
                </li>
                <li className="size-8 bg-gray-100 flex items-center justify-center rounded-full shadow-lg text-sm font-semibold text-gray-800 hover:bg-gray-400">
                    <NavLink to=""><Icon icon={"ant-design:caret-right-filled"}/></NavLink>
                </li>

            </ul>

        </div>
    </div>
    </>
        
    )
}