import "../assets/styles/Header.css";

export default function Header() {
  return (
    <header className=" flex justify-around items-center ">
      
      <div className="flex items-center select-none "> 
            <img src="/public/assets/shopping-bagwithouteyes.png" alt="Logo" width={50} />   
            <p className="font-mono">
               <span className=" text-green-600 font-bold "><span className="text-green-500">S</span>ho<span className="text-green-400">pp</span>inG</span>
               <span className=" text-black font-bold text-xl ">Worl<span className="text-green-800 text-2xl">D</span></span>
            </p>
      </div>
      
      <nav>
        <ul className=" flex items-center gap-4 " id="headermain_ul">
          <li> Categories </li>
          <li> Products </li>
          <li> What's News </li>
          <li>Delivery</li>
        </ul>
      </nav>

      <div>
         <input type="text" placeholder="Search Product" id="searchinput_header" />
      </div>
      
      <div className="flex gap-6">
      <div className="flex items-center space-x-4">
         <img src="/public/assets/icons/user.png" alt="userLogo" width={25} />
         <p> Account </p>
      </div>

      <div className="flex items-center space-x-4">
         <img src="/public/assets/icons/cart.png" alt="userLogo" width={25} />
         <p> Cart </p>
      </div>

      </div>
      
    </header>
  )
}
