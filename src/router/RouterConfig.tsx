import { createBrowserRouter, RouterProvider } from "react-router"
import LoginPage from "../pages/auth/LoginPage"
import CreateAccount from "../pages/auth/RegisterPage"
import ForgetPassword from "../pages/auth/ForgetPassword"
import UserDashboardLayout from "../pages/layout/UserDashboardLayout"
import CategoryList from "../pages/dashboard/category/Category"
import UserDashboard from "../pages/dashboard/Dashboard"
import AuthLayout from "../pages/layout/AuthLayout"
import NotFound from "../pages/errors/NotFound"
import { NotFoundComponent } from "../components/ui/errors/NotFound"
import CategoryCreate from "../pages/dashboard/category/Category-create"
import {Toaster} from "sonner"

const router = createBrowserRouter([
    { path: "/", Component: AuthLayout, children:[
        {index: true, Component:LoginPage},
        {path: "forget-password", Component:ForgetPassword},
        { path: "register", Component:CreateAccount},
        {path: "*", Component: NotFoundComponent}
    ]},
    { path: "/dashboard", Component:UserDashboardLayout, children: [
        {index: true, Component:UserDashboard},
        {path: "category", Component:CategoryList},
        {path:"category-create", Component:CategoryCreate},
        {path: "*", Component: NotFound}
    ]}
])

const RouterConfig = () => {
    return(<>
    <Toaster closeButton richColors />
        <RouterProvider router={router}/></>
    )
}

export default RouterConfig