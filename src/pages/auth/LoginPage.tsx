
import { PageTitle2 } from "../../components/ui/typography/Title";
import { NavLink } from "react-router";
import { LoginForm } from "../../components/Auth/LoginForm";

export default function LoginPage() {
    return(
        <section className="w-full h-[80vh] flex flex-col gap-5 px-5 top-25 relative">
            <PageTitle2 title="Sign In" className="text-teal-900"/>
                <LoginForm />
                        <p className="text-lg font-semibold text-center">OR</p>
        
                        <div className="w-full">
                            <NavLink to="/register" className="w-full flex justify-center items-center p-2 rounded-full border border-teal-800 text-teal-700 hover:bg-teal-150 hover:scale-102 transition duration-300">
                                Create An Account
                            </NavLink>
        
                        </div>
                        
            </section>
    )
}