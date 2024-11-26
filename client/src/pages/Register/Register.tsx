import { Link } from "react-router-dom";
import BG_Login from "../../../public/assets/BG_LOgin.jpg";
import { useState } from "react";
import axios from "axios";

export default function Register() {

   const SERVER_URL = import.meta.env.VITE_SERVER_URL;

   const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: "",
   });


   const handleSubmit = (e: any) => {

      e.preventDefault();
      console.log(formData);
      axios.post(`${SERVER_URL}/api/register`, formData).then((res) => {
         console.log(res.data);

         if(res.data.token !== undefined) {
            alert("Account Created Successfully");
            window.localStorage.setItem("token", res.data.token);
            
            setTimeout(() => {
               window.location.href = "/";
            } , 1000);

         } else {
            alert("Account Creation Failed");
         
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
                                       <h1 className=" font-[900] text-3xl ">Create New Account</h1>
                                       <p>Enter your Unititled account details. </p>
                                 </div>

                                 <form action="/" onSubmit={handleSubmit} className=" w-96 text-center m-auto mt-10 space-y-4 ">

                                    <input type="text" 
                                       placeholder="Username"
                                       onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                       className="input block border-none w-96 bg-[#fff] rounded-lg outline-none " />

                                    <input type="text" 
                                       placeholder="Email"
                                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                       className="input block border-none w-96 bg-[#fff] rounded-lg outline-none " />

                                    <input type="password" 
                                       placeholder="Password"
                                       onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                       className="input block border-none w-96 bg-[#fff] rounded-lg outline-none " />

                                    <input type="submit" value="Sign Up" className=" btn block bg-[#111] text-white w-96 h-12 rounded-lg duration-150 hover:bg-black " />
                                    
                                       
                                       
                                 </form>

                                 <Link to="/login" className="text-[#111] mt-10 underline ">Already have an account? Login</Link>


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
