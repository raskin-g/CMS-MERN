import { NavLink, Outlet } from "react-router"
import logo from "../../assets/image/logo.jpg"
import user from "../../assets/image/user.jpg"
import { Icon } from "@iconify/react"
import { useAuth } from "../../lib/hook/useAuth"

export default function UserDashboardLayout() {
    const {loggedInUser} = useAuth()
    return(
    <section className="w-full min-h-screen flex bg-gray-100">
        <aside className="justify-between border-b border-b-black/10 bg-white w-16 lg:w-80
        sticky flex-col shrink-0 border-r border-black/10
        px-4 py-8 transition-[width] duration-300">
            <div className="flex flex-col gap-8">
                <div className="flex items-center flex-col gap-3 justify-between">
                    <NavLink to="/dashboard">
                        <img src={logo} className="size-20 rounded-full"/>
                    </NavLink>
                    <NavLink to="/dashboard/profile">
                    <h1>{loggedInUser?.firstName + " "+ loggedInUser?.lastName}</h1>
                    </NavLink>
                </div>
                <nav className="flex flex-col gap-1">
                    <NavLink to="/dashboard" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors text-zinc-600 hover:bg-black/40 hover:text-white bg-zinc-50 shadow">
                        <Icon icon={"ant-design:dashboard-filled"} width={24} />Dashboard
                    </NavLink>
                    <NavLink to="/dashboard/category" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors text-zinc-600 hover:bg-black/40 hover:text-white bg-zinc-50 shadow">
                        <Icon icon={"carbon:category"} width={24} />Category
                    </NavLink>
                    <NavLink to="/logout" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors text-zinc-600 hover:bg-black/40 hover:text-white bg-zinc-50 shadow">
                        <Icon icon={"carbon:logout"} width={24} />Logout
                    </NavLink>
                </nav>
            </div>
        </aside>
        <section className="w-full">
            <header className="w-full bg-gray-800/20 text-gray-950 py-3 px-5 flex justify-end">
                <div className="flex flex-3 justify-end items-center">
                    <NavLink to="/dashboard/profile" className="flex gap-3 items-center">
                        <div className="size-15">
                            <img src={loggedInUser?.image} className="w-full rounded-full aspect-square object-cover" />
                        </div>
                        <div className="flex flex-col w-full h-auto justify-center ">
                            <h2 className="text-normal font-semibold text-shadow-md">{loggedInUser?.firstName + " "+ loggedInUser?.lastName}</h2>
                            <span className="text-xs italic tracking-tight">{loggedInUser?.email}</span>
                        </div>
                    </NavLink>
                </div>
            </header>


            <main className="w-full p-2">
                <section className="bg-white shadow-lg rounded-lg w-full flex flex-col p-5">
                    <Outlet />

                </section>
            </main>
        </section>

    </section>
    )
}