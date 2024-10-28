import { Link } from "react-router-dom";
import BG_Login from "../../../public/assets/BG_Login_1.jpg";

export default function Login() {
  return (
    <>
            <div className=" w-full h-[100vh] skeleton m-auto flex items-center bg-[whitesmoke] ">
                     
                     
                     <div className=" w-1/2 h-full pl-20 text-center m-auto " >
                     
                                 <div className=" mt-56 ">
                                       <h1 className=" font-[900] text-3xl ">Welcome Back</h1>
                                       <p>Enter your Unititled account details. </p>
                                 </div>

                                 <div className=" w-96 text-center m-auto mt-10 space-y-4 ">
                                    <input type="text" 
                                       placeholder="Email or Username"
                                       className="input block border-none w-96 bg-[#fff] rounded-lg outline-none " />

                                    <input type="password" 
                                       placeholder="Email or Username"
                                       className="input block border-none w-96 bg-[#fff] rounded-lg outline-none " />

                                    
                                    <button className=" btn block bg-[#111] text-white w-96 h-12 rounded-lg duration-150 hover:bg-black ">Login</button>
                                       
                                       <Link to="/register" className="text-[#111] pt-10 underline ">Don't have an account? Register</Link>
                                 </div>


                     </div>
                     
                     
                     
                     {/* THis For Image  */}
                     <div className=" skeleton w-1/2 h-full " 
                        style={{ 
                           background: `url(${BG_Login})`,
                           backgroundSize: "cover",
                           backgroundRepeat: "no-repeat",
                           backgroundPosition: "center center",
                        }}></div>
            </div>
    </>
  )
}
