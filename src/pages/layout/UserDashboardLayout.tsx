import { Outlet } from "react-router"
import logo from "../../assets/image/logo.jpg"
import user from "../../assets/image/user.jpg"
import { Icon } from "@iconify/react"

export default function UserDashboardLayout() {
    return(
    <section className="w-full min-h-screen flex bg-gray-100">
        <aside className="justify-between border-b border-b-black/10 bg-white w-16 lg:w-80
        sticky flex-col shrink-0 border-r border-black/10
        px-4 py-8 transition-[width] duration-300">
            <div className="flex flex-col gap-8">
                <div className="flex items-center flex-col gap-3 justify-between">
                    <a href="/dashboard">
                        <img src={logo} className="size-20 rounded-full"/>
                    </a>
                    <a href="/dashboard/profile">
                    <h1>Raskin Ghimire</h1>
                    </a>
                </div>
                <nav className="flex flex-col gap-1">
                    <a href="/dashboard" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors text-zinc-600 hover:bg-black/40 hover:text-white bg-zinc-50"><Icon icon={"ant-design:dashboard-filled"}/>Dashboard</a>
                    <a href="/dashboard/category" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors text-zinc-600 hover:bg-black/40 hover:text-white bg-zinc-50"><Icon icon={"carbon:category"}/>Category</a>
                    <a href="/logout" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors text-zinc-600 hover:bg-black/40 hover:text-white bg-zinc-50"><Icon icon={"carbon:logout"}/>Logout</a>
                </nav>
            </div>
        </aside>
        <section className="w-full">
            <header className="w-full bg-gray-800/20 text-gray-950 py-3 px-5 flex justify-end">
                <div className="flex flex-3 justify-end items-center">
                    <a href="/dashboard/profile" className="flex gap-3 items-center">
                        <div className="size-15">
                            <img src={user} className="w-full rounded-full aspect-square object-cover" />
                        </div>
                        <div className="flex flex-col w-full h-auto justify-center ">
                            <h2 className="text-normal font-semibold text-shadow-md">Raskin Ghimire</h2>
                            <span className="text-xs italic tracking-tight">mern.raskin@gmail.com</span>
                        </div>
                    </a>
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