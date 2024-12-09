import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Route, Routes } from "react-router-dom"; // Import Navigate for redirection
import Main from "./pages/Main/Main";
import SelectProduct from "./pages/SelectProduct/SelectProduct";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import ShowAllUsers from "./pages/Dashboard/ShowAllUsers/ShowAllUsers";
import AddProducts from "./pages/Dashboard/AddProducts/AddProducts";
import MyCart from "./pages/MyCart/MyCart";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import PrivacyPolicy from "./pages/About/PrivacyPolicy";
import PressKit from "./pages/About/PressKit";
import HostingPage from "./pages/About/HostingPage";
import DesignPage from "./pages/About/DesignPage";
import DevPage from "./pages/About/DevPage";

interface User {
  user: {
    id: string;
    username: string;
    email: string;
    role: string;
  };
}

function Home() {
  const [decoded, setDecoded] = useState<User | null>(null); // Set initial decoded state to null
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode<User>(token); // Decode token and type it as User
        setDecoded(decodedToken); // Save decoded user data in state
        console.log("Decoded token", decodedToken);
      } catch (error) {
        console.error("Error decoding token", error); // Handle invalid token error
      }
    }
  }, [token]); // Re-run effect when token changes

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/selectproduct/:id" element={<SelectProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/PressKit" element={<PressKit />} />
        <Route path="/hostingpage" element={<HostingPage />} />
        <Route path="/designpage" element={<DesignPage />} />
        <Route path="/devPage" element={<DevPage />} />

        {/* Admin routes */}
        {
          decoded?.user.role === 'admin' ? (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/showallusers" element={<ShowAllUsers />} />
              <Route path="/dashboard/addproduct" element={<AddProducts />} />
            </>
          ) : (
            null
          )
        }
      </Routes>
    </>
  );
}

export default Home;
