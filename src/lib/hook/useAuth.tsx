import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const useAuth = () => {
    const {login, getLoggedInUser, loggedInUser} = useContext(AuthContext)

    return {login, loggedInUser, getLoggedInUser}
}