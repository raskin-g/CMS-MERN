import { Icon } from "@iconify/react";
import { FileUploadComponent, InputComponent, MultipleChoice, SelectComponent, TextAreaComponent } from "../ui/form/Input";
import { useForm } from "react-hook-form"
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button/Button";

const RegisterDTO = z.object({
    fullName: z.string().min(2, "Fullname must have atleast 2 charcters").max(50, "Fullname cannot have more than 50 characters"),
    email: z.email("Invalid email format").nonempty("Email is required").nonoptional("Email must be present"), 
    password: z.string().min(8).max(32), //todo: using reges 
    confirmPassword:z.string().min(8).max(32), 
    role: z.string().nonempty("Role is required").nonoptional("Role must be present"), 
    address:z.string().nullable().optional(), 
    gender:z.string().nonempty("Gender is required").nonoptional("Gender field must be present"), 
    image:z.file().nullable().optional()
});

export type RegisterDataType = z.infer<typeof RegisterDTO>


export default function RegisterForm(){
    const {control, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        defaultValues: {fullName: "", email: "", password: "", confirmPassword:"", role:"", address: undefined, gender:"", image: undefined}, resolver: zodResolver(RegisterDTO)
    })
    const registerUser = (data: RegisterDataType) => {
        console.log(data);
    }
    return(
        <form onSubmit={handleSubmit(registerUser)} className="flex flex-col w-full gap-5">
                            <div className="w-full flex flex-col lg:flex-row lg:items-center">
                                <label htmlFor="fullName" className="w-full lg:w-1/3 text-lg font-semibold">Full Name:</label>
                                <div className="w-full lg:w-2/3 flex flex-col">
                                    <InputComponent control={control} type="text" name="fullName" placeholder="Enter your Full Name ..." errMsg={errors?.fullName?.message}/>
                                </div>
                            </div>
            
                            <div className="w-full flex-col flex lg:flex-row lg:items-center">
                                <label htmlFor="email" className="w-full lg:w-1/3 text-lg font-semibold">Email:</label>
                                <div className="w-full lg:w-2/3 flex flex-col">
                                    <InputComponent control={control} type="email" name="email" placeholder="Enter your Email ..." errMsg={errors?.email?.message}/>
                                </div>
                            </div>
            
                            <div className="w-full flex flex-col lg:flex-row lg:items-center">
                                <label htmlFor="password" className="w-full lg:w-1/3 text-lg font-semibold">Password:</label>
                                <div className="w-full lg:w-2/3 flex flex-col">
                                    <InputComponent control={control} type="password" name="password" placeholder="Enter your Password ..." errMsg={errors?.password?.message}/>
                                </div>
                            </div>
            
                            <div className="w-full flex flex-col lg:flex-row lg:items-center">
                                <label htmlFor="confirmPassword" className="w-full lg:w-1/3 text-lg font-semibold">Confirm:</label>
                                <div className="w-full lg:w-2/3 flex flex-col">
                                    <InputComponent control={control} type="password" name="confirmPassword" placeholder="Confirm your Password ..." errMsg={errors?.confirmPassword?.message}/>
                                </div>
                            </div>
        
                            <div className="w-full flex flex-col lg:flex-row lg:items-center">
                                <label htmlFor="role" className="w-full lg:w-1/3 text-lg font-semibold">User Type(Role):</label>
                                <div className="w-full lg:w-2/3 flex flex-col">
                                    <SelectComponent control={control} name="role" options={[
                                        {label:"Buyer", value:"customer"},
                                        {label:"Seller", value:"seller"}
                                    ]} errMsg={errors?.role?.message}/>
                                </div>
                            </div>
        
                            <div className="w-full flex flex-col lg:flex-row lg:items-center">
                                <label htmlFor="gender" className="w-full lg:w-1/3 text-lg font-semibold">Gender:</label>
                                <div className="w-full lg:w-2/3 flex gap-3">
                                    <MultipleChoice control={control} name="gender" options={[
                                        {label:"Male", value:"male"},
                                        {label:"Female", value:"female"},
                                        {label:"Other", value:"other"}
                                    ]} errMsg={errors?.gender?.message}/>
                                </div>
                            </div>
        
                            <div className="w-full flex flex-col lg:flex-row lg:items-center">
                                <label htmlFor="address" className="w-full lg:w-1/3 text-lg font-semibold">Address:</label>
                                <div className="w-full lg:w-2/3 flex flex-col">
                                    <TextAreaComponent name="address" control={control} rows={3} errMsg={errors?.address?.message}/>
                                </div>
                            </div>

                            <div className="w-full flex flex-col lg:flex-row lg:items-center">
                                <label htmlFor="image" className="w-full lg:w-1/3 text-lg font-semibold">Image:</label>
                                <div className="w-full lg:w-2/3 flex flex-col">
                                    <FileUploadComponent name="image" control={control} errMsg={errors?.image?.message}/>
                                </div>
                            </div>
            
                            <div className="w-full flex flex-col gap-3 lg:flex-row lg:items-center">
                                <Button type="reset" disabled={isSubmitting}><Icon icon={"fa7-solid:undo"} width={20} />Reset</Button>
                                <Button type="submit" disabled={isSubmitting}><Icon icon={"fa7-solid:paper-plane"} width={20} />Create</Button>
                            </div>
                            
                        </form>
    )}
