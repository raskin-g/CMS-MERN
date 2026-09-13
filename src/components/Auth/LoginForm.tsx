import { InputComponent } from "../ui/form/Input";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { FormLabel } from "../ui/form/Label";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button/Button";
import axiosService from "../../lib/services/api.service";
import { toast } from "sonner";

const LoginDTO = z.object({
    username: z.string().min(4, "Username must have at least 4 characters").max(30, "Username must not exceed 30 characters"),
    password: z.string().min(8, "Password must have at least 8 characters").max(32, "Password must not exceed 32 characters")
});

export type CredentialsType = z.infer<typeof LoginDTO>

export const LoginForm = () =>{
    const {control, handleSubmit, formState: {isSubmitting, errors}} = useForm({
        defaultValues: {username: "", password:""},
        resolver: zodResolver(LoginDTO)
    })
    const navigate = useNavigate();

    const submitHandle = async (data: CredentialsType) => {
        try{
            const response = await axiosService.post("/auth/login",data, {
                withCredentials: true
            });
            toast.success("Login success!", {
                description:`Welcome to user panel, ${response?.firstName}! Access to the service from sidebar.`,
            })
            navigate('/dashboard')
        }catch(exception){
            toast.error("Login failed!!!", {
                description:exception.data.message
            })
            console.log(exception)
        }
    };

    console.log(errors)


    return(
        <form onSubmit={handleSubmit(submitHandle)} className="flex flex-col w-full gap-5">
                            <div className="w-full flex items-center">
                                <FormLabel htmlFor="username">Username: </FormLabel>
                                <div className="w-2/3">
                                    <InputComponent type="text" control={control} name="username" placeholder="Enter your Username ..." errMsg={errors?.username?.message}/>
                                </div>
                            </div>
                            
                            <div className="w-full flex items-center">
                                <FormLabel htmlFor="password">Password: </FormLabel>
                                <div className="w-2/3">
                                    <InputComponent type="password" control={control} name="password" placeholder="Enter your Password ..." errMsg={errors?.password?.message}/>
                                </div>
                            </div>
                            
                            <div className="w-full flex items-center justify-end">
                                <NavLink className="text-sm text-teal-800 italic underline hover:scale-102 transition duration-300" to="/forget-password">Forget Password?</NavLink>
                            </div>
        
                            <div className="w-full flex flex-col gap-3 lg:flex-row lg:items-center">
                                <Button type="reset" disabled={isSubmitting}><Icon icon={"fa7-solid:undo"} width={20} />Cancel</Button>
                                <Button type="submit" disabled={isSubmitting}><Icon icon={"fa7-solid:paper-plane"} width={20} />Submit</Button>
                             </div>
                            
                        </form>
    )
}