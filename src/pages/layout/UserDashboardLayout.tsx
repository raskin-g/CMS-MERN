import { Navigate, NavLink, Outlet } from "react-router";
import logo from "../../assets/image/logo.jpg"
import { Icon } from "@iconify/react";
import { useAuth } from "../../lib/hook/useAuth";

export default function UserDashboardLayout() {
  const {loggedInUser} = useAuth()
  
  if(loggedInUser) {
    return (
      <>
        <section className="w-full min-h-screen flex bg-gray-50">
          <aside className="justify-between border-b border-b-black/10 bg-gray-100 sticky w-16 lg:w-80 flex-col shrink-0 border-r border-black/10 px-4 py-8 transition-[width] duration-300">
            <div className="flex flex-col gap-8">
              <div className="flex items-center flex-col gap-3 justify-between">
                <NavLink to="/dashboard">
                  <img src={logo} className="size-40 rounded-full" />
                </NavLink>

                <NavLink to="/dashboard/profile">
                  <h1>
                    {loggedInUser?.firstName + " " + loggedInUser?.lastName}
                  </h1>
                </NavLink>
              </div>

              <nav className="flex flex-col gap-1">
                <NavLink
                  to="/dashboard"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors text-zinc-600 hover:bg-black/40 hover:text-white bg-zinc-50 shadow"
                >
                  <Icon icon={"fa7-solid:tachometer-alt-average"} width={24} />
                  Dashboard
                </NavLink>
                <a
                  href="/dashboard/category"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors text-zinc-600 hover:bg-black/40 hover:text-white bg-zinc-50 shadow"
                >
                  <Icon icon={"fa7-solid:sitemap"} width={24} />
                  Category
                </a>
                <a
                  href="/dashboard/category"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors text-zinc-600 hover:bg-black/40 hover:text-white bg-zinc-50 shadow"
                >
                  <Icon icon={"fa7-solid:power-off"} width={24} />
                  Logout
                </a>
              </nav>
            </div>
          </aside>
          <section className="w-full">
            <header className="w-full bg-gray-800/20 text-gray-950 py-2 px-5 flex justify-end">
              {/* <a href="">Collapse Menu</a> */}

              <div className="flex flex-3 justify-end items-center">
                <a href="" className="flex gap-3 items-center">
                  <div className="size-15 flex items-center">
                    <img
                      src={loggedInUser?.image}
                      className="w-full rounded-full aspect-square object-cover"
                    />
                  </div>
                  <div className="flex flex-col w-full h-auto justify-center py-3">
                    <h2 className="text-normal font-semibold text-shadow-lg">
                      {loggedInUser?.firstName + " " + loggedInUser?.lastName}
                    </h2>
                    <span className="text-xs italic tracking-tight">
                      {loggedInUser?.email}
                    </span>
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
      </>
    );
  } else {
    // redirect to login page
    return <Navigate to="/" />
  }
}