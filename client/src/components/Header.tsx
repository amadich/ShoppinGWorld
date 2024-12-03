import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles/Header.css";
import { jwtDecode } from 'jwt-decode';

// Define the User interface to match the decoded JWT structure
interface User {
  user: {
    id: string;
    username: string;
    email: string;
    role: string;
  };
}

export default function Header() {
  // State for showing username if user is logged in
  const [showUsername, setShowUsername] = useState<boolean>(false);
  const [decoded, setDecoded] = useState<User | null>(null); // Set initial decoded state to null
  const token = window.localStorage.getItem("token"); // Retrieve token from localStorage

  useEffect(() => {
    if (token) {
      try {
        // Decode the JWT token if it exists and store the decoded data
        const decodedToken = jwtDecode<User>(token); // Decode token and type it as User
        setDecoded(decodedToken); // Save decoded user data in state
        setShowUsername(true); // Display username in header if token exists

        console.log("Decoded token", decodedToken);
        

      } catch (error) {
        console.error("Error decoding token", error); // Handle invalid token error
      }
    }
  }, [token]); // Re-run effect when token changes

  // Create Function Log out User
  const logOut = () => {
    window.localStorage.removeItem("token");
    window.location.href = "/";
  };

  // State for animation effects on cart and user icons
  const [isCartJumping, setIsCartJumping] = useState(true);
  const [isUserJumping, setIsUserJumping] = useState(false);

  const handleCartMouseEnter = () => {
    setIsCartJumping(true);
  };

  const handleUserMouseEnter = () => {
    setIsUserJumping(true);
  };

  const handleAnimationEnd = (type: 'cart' | 'user') => {
    if (type === 'cart') {
      setIsCartJumping(false); // Reset cart animation state
    } else if (type === 'user') {
      setIsUserJumping(false); // Reset user animation state
    }
  };

  const [cartCount, setCartCount] = useState<number>(0);

  // Function to calculate the cart count from localStorage
  const [cartTotal, setCartTotal] = useState<number>(0); // State for total price

const updateCartCount = () => {
  const cartData = localStorage.getItem("cart");
  if (cartData) {
    const parsedCart = JSON.parse(cartData);
    if (Array.isArray(parsedCart)) {
      setCartCount(parsedCart.length); // Update cart count
      const total = parsedCart.reduce((sum, item) => sum + (item.price || 0), 0); // Calculate total price
      setCartTotal(total); // Update total price
    } else {
      setCartCount(1); // Assume there's one item if not an array
      setCartTotal(parsedCart.price || 0); // Set total price
    }
  } else {
    setCartCount(0); // Reset cart count
    setCartTotal(0); // Reset total price
  }
};


  useEffect(() => {
    // Update cart count on mount
    updateCartCount();

    // Add event listener for changes in localStorage across tabs
    const handleStorageChange = () => updateCartCount();
    window.addEventListener("storage", handleStorageChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Monitor local changes (e.g., when products are added in the same tab)
  const observeLocalCartUpdates = () => {
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      if (key === "cart") {
        setTimeout(() => updateCartCount(), 0);
      }
      originalSetItem.apply(this, [key, value]);
    };
  };

  useEffect(() => {
    observeLocalCartUpdates();
  }, []);

  return (
    <header className="flex justify-around items-center">
      <Link to="/">
        <div className="flex items-center select-none">
          <img src="/public/assets/shopping-bagwithouteyes.png" alt="Logo" width={50} />
          <p className="font-mono hidden md:block">
            <span className="text-green-600 font-bold"><span className="text-green-500">S</span>ho<span className="text-green-400">pp</span>inG</span>
            <span className="text-black font-bold text-xl">Worl<span className="text-green-800 text-2xl">D</span></span>
          </p>
        </div>
      </Link>

      <nav className="relative hidden md:block z-[100]">
        <ul className="flex items-center gap-4 menu lg:menu-horizontal lg:min-w-max rounded-box" id="headermain_ul">
          <li>
            <details>
              <summary id="cca">Category</summary>
              <ul className="menu xl:menu-horizontal rounded-box lg:min-w-max bg-white">
                <li><a>Solutions</a>
                  <ul>
                    <li><a>Design</a></li>
                    <li><a>Development</a></li>
                    <li><a>Hosting</a></li>
                    <li><a>Domain register</a></li>
                  </ul>
                </li>
                <li><a>Enterprise</a>
                  <ul>
                    <li><a>CRM software</a></li>
                    <li><a>Marketing management</a></li>
                    <li><a>Security</a></li>
                    <li><a>Consulting</a></li>
                  </ul>
                </li>
                <li><a>Products</a>
                  <ul>
                    <li><a>UI Kit</a></li>
                    <li><a>Wordpress themes</a></li>
                    <li><a>Wordpress plugins</a></li>
                    <li>
                      <a>Open source</a>
                      <ul>
                        <li><a>Auth management system</a></li>
                        <li><a>VScode theme</a></li>
                        <li><a>Color picker app</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a>Company</a>
                  <ul>
                    <li><a>About us</a></li>
                    <li><a>Contact us</a></li>
                    <li><a>Privacy policy</a></li>
                    <li><a>Press kit</a></li>
                  </ul>
                </li>
              </ul>
            </details>
          </li>
          <li> Products </li>
          <li> What's News </li>
          <li>Delivery</li>
        </ul>
      </nav>

      <div>
        <input type="text"
          placeholder="Search Product"
          id="searchinput_header"
          className='w-full'
        />
      </div>

      <div className="flex gap-6">
        
          <div className="flex items-center space-x-4">
          <Link to="/login">
              <img
                src="/public/assets/icons/user.png"
                alt="userLogo"
                width={25}
                className={isUserJumping ? 'jump' : ''}
                onMouseEnter={handleUserMouseEnter}
                onAnimationEnd={() => handleAnimationEnd('user')}
              />
            </Link>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" >
                {showUsername && decoded ? decoded.user.username : 'Account'}
              </div>
              <ul tabIndex={0} 
                  style={ {display: showUsername ? 'block' : 'none'} }
                  className="dropdown-content menu bg-yellow-200 rounded-box z-[1] w-52 p-2 shadow mt-5">
                { decoded?.user.role == "admin" ? <li><Link to="/dashboard">Dashboard</Link></li> : null }
                <li onClick={logOut} ><a>Log out</a></li>
              </ul>
            </div>

          </div>
        

          <div className="flex items-center space-x-4">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <img
              src="/public/assets/icons/cart.png"
              alt="cartLogo"
              width={25}
              onMouseEnter={handleCartMouseEnter}
              className={isCartJumping ? 'jump' : ''}
              onAnimationEnd={() => handleAnimationEnd('cart')}
            />
            <span className="badge badge-sm indicator-item">{cartCount}</span>

            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-[whitesmoke] z-[1] mt-5 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">{cartCount} Items</span>
                <span className="text-info">Subtotal: ${cartTotal.toFixed(2)}</span>
                <div className="card-actions">
                  <Link to={"/mycart"} className=' m-auto '>
                    <button className="btn btn-primary btn-block">View cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="hidden md:block">Cart</p>
    </div>



       


      </div>

    </header>
  );
}
