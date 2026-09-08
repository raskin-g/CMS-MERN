import { Icon } from "@iconify/react";
import { InputComponent, MultipleChoice, SelectComponent } from "../ui/form/Input";
import { useState, type BaseSyntheticEvent } from "react";

export default function RegisterForm(){
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
                }, 1500)}
    return(
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
        
                            <div className="w-full flex items-center">
                                <label htmlFor="role" className="w-1/3 text-lg font-semibold">User Type(Role):</label>
                                <div className="w-2/3">
                                    <SelectComponent name="role" options={[
                                        {label:"Buyer", value:"customer"},
                                        {label:"Seller", value:"seller"}
                                    ]}/>
                                </div>
                            </div>
        
                            <div className="w-full flex items-center">
                                <label htmlFor="gender" className="w-1/3 text-lg font-semibold">Gender:</label>
                                <div className="w-2/3 flex gap-3">
                                    <MultipleChoice name="gender" options={[
                                        {label:"Male", value:"male"},
                                        {label:"Female", value:"female"},
                                        {label:"Other", value:"other"}
                                    ]} />
                                </div>
                            </div>
        
                            <div className="w-full flex items-center">
                                <label htmlFor="address" className="w-1/3 text-lg font-semibold">Address:</label>
                                <div className="w-2/3">
                                    <textarea className="border border-gray-300 bg-gray-50 w-full p-2 rounded-lg shadow-lg resize-none" name="address" placeholder="Enter your address"></textarea>
                                </div>
                            </div>
            
                            <div className="w-full flex gap-3 items-center">
                                <button disabled={isSubmitting} className="disabled:cursor-not-allowed disabled:bg-red-900/50 w-full p-2 rounded-lg text-white font-semibold bg-red-800 hover:bg-red-900 hover:cursor-pointer hover:scale-102 transition duration-300 flex gap-2 items-center justify-center" type="reset" ><Icon icon={"fa7-solid:undo"} width={20} />Cancel</button>
                                <button disabled={isSubmitting} className="disabled:cursor-not-allowed disabled:bg-teal-900/50 w-full p-2 rounded-lg text-white font-semibold bg-teal-800 hover:bg-teal-900 hover:cursor-pointer hover:scale-102 transition duration-300 flex gap-2 items-center justify-center" type="submit"><Icon icon={"fa7-solid:paper-plane"} width={20} />Create</button>
                            </div>
                            
                        </form>
    )}
