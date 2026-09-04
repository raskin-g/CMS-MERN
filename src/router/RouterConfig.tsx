import { createBrowserRouter, RouterProvider } from "react-router"
import LoginPage from "../pages/auth/LoginPage"
import CreateAccount from "../pages/auth/RegisterPage"
import ForgetPassword from "../pages/auth/ForgetPassword"
import UserDashboardLayout from "../pages/layout/UserDashboardLayout"
import CategoryList from "../pages/dashboard/Category"
import UserDashboard from "../pages/dashboard/Dashboard"
import AuthLayout from "../pages/layout/AuthLayout"


const router = createBrowserRouter([
    { path: "/", Component: AuthLayout, children:[
        {index: true, Component:LoginPage},
        {path: "forget-password", Component:ForgetPassword},
        { path: "/register", Component:CreateAccount}
    ]},
    { path: "/dashboard", Component:UserDashboardLayout, children: [
        {index: true, Component:UserDashboard},
        {path: "category", Component:CategoryList}
    ]}
])

const RouterConfig = () => {
    return(
        <RouterProvider router={router}/>
    )
}

export default RouterConfig