import { Link } from "react-router-dom";

export default function Navbar() {
   return (
     <div 
       className="w-[90%] h-72 m-auto bg-[#fbf0e4] bg-no-repeat rounded-lg" 
       style={{ 
         backgroundImage: 'url(/assets/slider-1.png)' ,
          backgroundSize: '20%' , 
          backgroundPosition: 'calc(100% - 150px) 65px' }}
     >

            <div className="p-20 w-[50%] space-y-4">
                  <h1 className=" text-green-900 font-[900] text-4xl  ">
                     Grab Upto 50% Off on Selected HeadPhones
                  </h1>
                  
                  <Link to="/selectproduct/674c47249d6241b5738f3f94">
                  <button className=" rounded-[50px] w-36 h-10 text-white font-bold bg-green-950 duration-300 hover:w-44 hover:bg-green-900 " >Buy Now</button>
                  </Link>
            </div>
      
     </div>
   );
 }
 