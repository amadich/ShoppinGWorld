import { useState } from "react";
import { Link } from "react-router-dom";
import BG_Login from "../../../public/assets/BG_Login_1.jpg";
import axios from "axios";

export default function Login() {

   const SERVER_URL = import.meta.env.VITE_SERVER_URL;

   const [formData, setFormData] = useState({
      email: "",
      password: "",
   });

   const handleLogin = (e: any) => {
      
      e.preventDefault();
      
      axios.post(`${SERVER_URL}/api/login`, formData).then((res) => {
         console.log(res.data);

         if(res.data.token !== undefined) {
            alert("Login Successfull");
            window.localStorage.setItem("token", res.data.token);
            
            setTimeout(() => {
               window.location.href = "/";
            } , 1000);

         } else {
            alert("Login Failed");
         
         }

      }
      ).catch((err) => {
         console.log(err);
      });

   }

  return (
    <>
            <div className=" w-full h-[100vh] skeleton m-auto flex items-center bg-[whitesmoke] ">
                     
                     
                     <div className=" w-1/2 h-full pl-20 text-center m-auto " >
                     
                                 <div className=" mt-56 ">
                                       <h1 className=" font-[900] text-3xl ">Welcome Back</h1>
                                       <p>Enter your Unititled account details. </p>
                                 </div>

                                 <form onSubmit={handleLogin} className=" w-96 text-center m-auto mt-10 space-y-4 ">
                                    <input type="text" 
                                       placeholder="Email or Username"
                                       onChange={(e) => setFormData({...formData, email: e.target.value})}
                                       className="input block border-none w-96 bg-[#fff] rounded-lg outline-none " />

                                    <input type="password" 
                                       placeholder="Email or Username"
                                       onChange={(e) => setFormData({...formData, password: e.target.value})}
                                       className="input block border-none w-96 bg-[#fff] rounded-lg outline-none " />

                                    
                                    <button className=" btn block bg-[#111] text-white w-96 h-12 rounded-lg duration-150 hover:bg-black ">Login</button>
                                       
                                       
                                 </form>

                                 <Link to="/register" className="text-[#111] mt-10 underline ">Don't have an account? Register</Link>


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
