import { InputComponent } from "../../components/ui/form/Input";
import { PageTitle2 } from "../../components/ui/typography/Title";
import { useState, type BaseSyntheticEvent } from "react";

export default function CreateAccount(){
    const [isSubmitting, setIsSubmitting] = useState(false)
        const [form, setForm] = useState({
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        })
    
        const handleInputChange = (e: BaseSyntheticEvent) =>{
            const { name, value } = e.target
            setForm({
                ...form,
                [name]: value
            })
        }
    
        const submitHandle = (e: BaseSyntheticEvent) =>{
            e.preventDefault()
            setIsSubmitting(true)
    
            // Simple client-side validation example
            if(form.password !== form.confirmPassword){
                alert("Passwords do not match")
                setIsSubmitting(false)
                return
            }
    
            // TODO: call signup API
            setTimeout(()=>{
                console.log("Signup payload", form)
                setIsSubmitting(false)
            }, 1500)
        }
    return(
            <div className="flex flex-col gap-5 px-5 top-25 relative">
                <PageTitle2 title="Create Account" className="mb-6 text-teal-900" />
    
                <form onSubmit={submitHandle} className="flex flex-col w-full gap-5">
                    <div className="w-full flex items-center">
                        <label htmlFor="username" className="w-1/3 text-lg font-semibold">Username:</label>
                        <div className="w-2/3">
                            <InputComponent type="text" onChange={handleInputChange} name="username" placeholder="Enter your Username ..."/>
                        </div>
                    </div>
    
                    <div className="w-full flex items-center">
                        <label htmlFor="email" className="w-1/3 text-lg font-semibold">Email:</label>
                        <div className="w-2/3">
                            <InputComponent type="email" onChange={handleInputChange} name="email" placeholder="Enter your Email ..."/>
                        </div>
                    </div>
    
                    <div className="w-full flex items-center">
                        <label htmlFor="password" className="w-1/3 text-lg font-semibold">Password:</label>
                        <div className="w-2/3">
                            <InputComponent type="password" onChange={handleInputChange} name="password" placeholder="Enter your Password ..."/>
                        </div>
                    </div>
    
                    <div className="w-full flex items-center">
                        <label htmlFor="confirmPassword" className="w-1/3 text-lg font-semibold">Confirm:</label>
                        <div className="w-2/3">
                            <InputComponent type="password" onChange={handleInputChange} name="confirmPassword" placeholder="Confirm your Password ..."/>
                        </div>
                    </div>
    
                    <div className="w-full flex gap-3 items-center">
                        <button disabled={isSubmitting} className="disabled:cursor-not-allowed disabled:bg-red-900/50 w-full p-2 rounded-lg text-white font-semibold bg-red-800 hover:bg-red-900 hover:cursor-pointer hover:scale-102 transition duration-300" type="reset">Cancel</button>
                        <button disabled={isSubmitting} className="disabled:cursor-not-allowed disabled:bg-teal-900/50 w-full p-2 rounded-lg text-white font-semibold bg-teal-800 hover:bg-teal-900 hover:cursor-pointer hover:scale-102 transition duration-300" type="submit">Create</button>
                    </div>
                </form>

                <p className="text-lg font-semibold text-center">OR</p>

                <div className="w-full">
                            <a href="/" className="w-full flex justify-center items-center p-2 rounded-full border border-teal-800 text-teal-700 hover:bg-teal-150 hover:scale-102 transition duration-300">
                                Login
                            </a>
        
                        </div>
            </div>
        )
}