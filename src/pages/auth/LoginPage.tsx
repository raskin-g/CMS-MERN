import { InputComponent } from "../../components/ui/form/Input"
import { useState, type BaseSyntheticEvent } from "react";
import { PageTitle2 } from "../../components/ui/typography/Title";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router";

export default function LoginPage() {
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
        <section className="w-full h-[80vh] flex flex-col gap-5 px-5 top-25 relative">
            <PageTitle2 title="Sign In" className="text-teal-900"/>
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
                        <p className="text-lg font-semibold text-center">OR</p>
        
                        <div className="w-full">
                            <NavLink to="/register" className="w-full flex justify-center items-center p-2 rounded-full border border-teal-800 text-teal-700 hover:bg-teal-150 hover:scale-102 transition duration-300">
                                Create An Account
                            </NavLink>
        
                        </div>
                        
            </section>
    )
}