import { Link } from "react-router-dom";
import image1 from "../../../public/assets/Customizable-f169ffaa.png";

export default function Dashboard() {
  return (
    <>
      <div className=" flex justify-around ">

         <div className=" w-[90%] m-10 space-y-4 ">
         
            <h1 className=" text-5xl  " >Dashboard <span className="text-blue-700 font-bold uppercase">Admin</span> Box!</h1>
            <p className="font-mono text-gray-700">The admin dashboard serves as a command center, helping administrators efficiently handle their responsibilities and make informed decisions. It's designed to be intuitive, organized, and responsive, allowing admins to interact with the application and perform tasks with ease. Remember that the specific features and components of the admin dashboard will depend on the nature of your application and the needs of your administrators.</p>

            <div className="space-x-4">
               <Link to={"/dashboard/showallusers"}><button className="btn btn-outline btn-success ">Show All Users</button></Link>
               <button className="btn">ADD Products</button>
            </div>

         </div>

         <div>
            <img src={image1} alt="Customizable" />
         </div>

      </div>
    </>
  )
}
