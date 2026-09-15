import { useState, type ReactNode } from "react"
import { AuthContext, type IUserDetail } from "../AuthContext"
import type { CredentialsType } from "../../../components/Auth/LoginForm"
import axiosService from "../../services/api.service"
import Cookies from "js-cookie"

export const AuthProvider = ({children}: Readonly<{children: ReactNode}>) => {
    const [loggedInUser, setLoggedInUser] = useState<null|IUserDetail>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const login = async (cred: CredentialsType) => {
        // setLoading(true)
        try{
        //     const loginResponse = 
            const loginResponse = await axiosService.post('/auth/login', cred, {
                withCredentials: true
            }) as unknown as {accessToken: string}
            Cookies.set("at", loginResponse.accessToken as string, {expires: 1, secure: true, sameSite: "lax"})
            return await getLoggedInUser();
        }catch (exception){
            throw exception
        } finally {
            setLoading(false)
        }
    }
    const getLoggedInUser = async()  => {
        try{
            const userDetail = await axiosService.get("/auth/me",{
            headers: {
                Authorization: "Bearer "+Cookies.get("at")
            }
        }) as unknown as IUserDetail
        setLoggedInUser(userDetail)
        return userDetail
        }catch(exception){
            console.log({exception})
        }      
    }

    return(
        loading ? "Loading..." : 
        <>
            <AuthContext.Provider value={{
                loggedInUser: loggedInUser,
                login: login,
                getLoggedInUser: getLoggedInUser
                }}
            >
                {children}
            </AuthContext.Provider>
        </>
    )
}