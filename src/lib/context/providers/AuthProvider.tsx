import { use, useEffect, useState, type ReactNode } from "react"
import { type IUserDetail, type CredentialsType} from "../../types/AuthContract"
import axiosService from "../../services/api.service"
import Cookies from "js-cookie"
import { AuthContext } from "../AuthContext"

export const AuthProvider = ({children}: Readonly<{children: ReactNode}>) => {
    const [loggedInUser, setLoggedInUser] = useState<null|IUserDetail>(null)
    const [loading, setLoading] = useState<boolean>(true)

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
        }  finally {
            setLoading(false)
        }    
    }

    useEffect(()=>{
        return ()=>{
            setLoading(true)
            const token = Cookies.get('at')
            if(token){
                getLoggedInUser()
            } else {
                setLoading(false)
            }
        }
    },[])

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