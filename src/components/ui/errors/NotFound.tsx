import { Icon } from "@iconify/react"
import { NavLink, useNavigate } from "react-router"

export const NotFoundComponent = () =>{
    const navigate = useNavigate()
    return(
        <div className="border bg-red-50 border-red-50 p-10 w-5xl flex flex-col gap-10 shadow-xl items-center justify-center">
            <h1 className="text-center text-4xl text-red-800 font-semibold"> OOPS! Not found!!!!!</h1>
            <p className="text-lg text-red-900 font-semibold">404 Not Found!</p>
            <p>
                The page you are looking for does not exists anymore or has been moved.
            </p>
            <NavLink 
            to="/dashboard"
            onClick={(e) => {
                e.preventDefault()
                navigate(-1)
            }}
            className={`w-full border flex items-center justify-center gap-2 font-semibold text-lg border-red-800 rounded-full text-center p-2 bg-red-900 text-white hover:scale-103 transition duration-300`}>
            <Icon icon={"fa7-solid:undo"}/>Please continue Back</NavLink>
        </div>
    )
}