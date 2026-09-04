import { Outlet } from "react-router"
import { PageTitle2 } from "../../components/ui/typography/Title"


export default function AuthLayout(){
    return(
        <section className="w-full h-screen bg-gray-100 flex justify-center items-center">
                <div className="bg-white p-5 border border-gray-200 rounded-lg w-7xl flex">
                    <div className="w-full h-[80vh] relative overflow-hidden bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1784964279455-f0590dfb6694?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D)]">
                        <div className="absolute inset-0 bg-teal-950/60"></div>
                        <div className="absolute inset-0 flex flex-col justify-center p-10 z-10">
                            <div className="bg-white/50 backdrop-blur-sm p-5 rounded-lg text-center justify-center items-center flex flex-col gap-5">
                            <div className="size-25"><img src="https://img.magnific.com/free-vector/cool-old-man-mascot-logo_1051-3351.jpg?semt=ais_hybrid&w=740&q=80"
                            alt="logo" className="size-20 rounded-full"/></div>
                                <PageTitle2 title="Welcome to CMS!"/>
                                <div>
                                    <p>Welcome! Please log in to access your dashboard.</p>
                                    <p>Manage your content quickly and securely with our CMS.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[80vh] flex flex-col gap-5 px-5 top-25 relative">
                        <PageTitle2 title="Sign In" className="text-teal-900"/>
        
                        <Outlet />
                        
                        <p className="text-lg font-semibold text-center">OR</p>
        
                        <div className="w-full">
                            <a href="/register" className="w-full flex justify-center items-center p-2 rounded-full border border-teal-800 text-teal-700 hover:bg-teal-150 hover:scale-102 transition duration-300">
                                Create An Account
                            </a>
        
                        </div>
        
                    </div>
                </div>
            </section>
    )
}