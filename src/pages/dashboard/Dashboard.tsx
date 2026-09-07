import { NavLink } from "react-router";

export default function UserDashboard(){
    return(
        <>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="rounded-lg p-5 bg-red-200 flex w-full flex-col gap-5">
                <h1 className="text-6xl font-semibold text-red-800">100</h1>
                <p className="text-3xl text-red-950">Users</p>
                <NavLink to="/" className="text-xs italic transition duration-300 hover:underline hover:scale-102">View More ...</NavLink>
            </div>
            <div className="rounded-lg p-5 bg-teal-200 flex w-full flex-col gap-5">
                <h1 className="text-6xl font-semibold text-teal-800">30%</h1>
                <p className="text-3xl text-teal-950">Monthly Growth</p>
                <NavLink to="/" className="text-xs italic transition duration-300 hover:underline hover:scale-102">View More ...</NavLink>
            </div>
            <div className="rounded-lg p-5 bg-yellow-200 flex w-full flex-col gap-5">
                <h1 className="text-6xl font-semibold text-yellow-800">Npr. 100</h1>
                <p className="text-3xl text-yellow-950">Total Collection</p>
                <NavLink to="/" className="text-xs italic transition duration-300 hover:underline hover:scale-102">View More ...</NavLink>
            </div>
            <div className="rounded-lg p-5 bg-indigo-200 flex w-full flex-col gap-5">
                <h1 className="text-6xl font-semibold text-indigo-800">100</h1>
                <p className="text-3xl text-indigo-950">Total Orders</p>
                <NavLink to="/" className="text-xs italic transition duration-300 hover:underline hover:scale-102">View More ...</NavLink>
            </div>

        </div>
        </>
    )
}