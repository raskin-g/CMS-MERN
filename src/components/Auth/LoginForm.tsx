import { InputComponent } from "../ui/form/Input";
import { useState, type BaseSyntheticEvent } from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router";

export const LoginForm = () =>{
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });
    const handleInputChange = (e: BaseSyntheticEvent)=>{
                                const {name, value}=e.target
                                setCredentials({
                                    ...credentials,
                                    [name]: value
                                })
                            }

    const submitHandle = (e: BaseSyntheticEvent) => {
        e.preventDefault()
        setIsSubmitting(true);
        //API CALL
            // response setIsSubmitting(false)
        setTimeout(()=>{
            console.log("API CALLLED");
            setIsSubmitting(false)
        },2000);

        console.log(credentials)
    }


    return(
        <form onSubmit={submitHandle} className="flex flex-col w-full gap-5">
                            <div className="w-full flex items-center">
                                <label htmlFor="username" className="w-1/3 text-lg font-semibold">
                                    Username:
                                </label>
                                <div className="w-2/3">
                                    <InputComponent type="text" onChange={handleInputChange} name="username" placeholder="Enter your Username ..."/>
                                </div>
                            </div>
                            
                            <div className="w-full flex items-center">
                                <label htmlFor="username" className="w-1/3 text-lg font-semibold">
                                    Password:
                                </label>
                                <div className="w-2/3">
                                    <InputComponent type="text" onChange={handleInputChange} name="password" placeholder="Enter your Password ..."/>
                                </div>
                            </div>
                            
                            <div className="w-full flex items-center justify-end">
                                <NavLink className="text-sm text-teal-800 italic underline hover:scale-102 transition duration-300" to="/forget-password">Forget Password?</NavLink>
                            </div>
        
                            <div className="w-full flex gap-3 items-center">
                                <button disabled={isSubmitting} className="disabled:cursor-not-allowed disabled:bg-red-900/50 w-full p-2 rounded-lg text-white font-semibold bg-red-800 hover:bg-red-900 hover:cursor-pointer hover:scale-102 transition duration-300 flex gap-2 items-center justify-center" type="reset"><Icon icon={"ant-design:redo-outlined"}/>Cancel</button>
                                <button disabled={isSubmitting} className="disabled:cursor-not-allowed disabled:bg-teal-900/50 w-full p-2 rounded-lg text-white font-semibold bg-teal-800 hover:bg-teal-900 hover:cursor-pointer hover:scale-102 transition duration-300 flex gap-2 items-center justify-center" type="submit"><Icon icon={"boxicons:send"}/>Submit</button>
        
                            </div>
                            
                        </form>
    )
}