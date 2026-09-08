import { NavLink } from "react-router";
import { PageTitle2 } from "../../components/ui/typography/Title";
import RegisterForm from "../../components/Auth/RegisterForm";

export default function CreateAccount(){
    return(
            <div className="w-full h-[80vh] flex flex-col gap-5 px-5 top-20 relative">
                <PageTitle2 title="Create Account" className="mb-6 text-teal-900" />
    
                <RegisterForm />

                <p className="text-lg font-semibold text-center">OR</p>

                <div className="w-full">
                            <NavLink to="/" className="w-full flex justify-center items-center p-2 rounded-full border border-teal-800 text-teal-700 hover:bg-teal-150 hover:scale-102 transition duration-300">
                                Login
                            </NavLink>
        
                        </div>
            </div>
        )
}