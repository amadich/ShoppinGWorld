import { Route, Routes } from "react-router-dom"
import Main from "./pages/Main/Main"
import SelectProduct from "./pages/SelectProduct/SelectProduct"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Dashboard from "./pages/Dashboard/Dashboard"
import ShowAllUsers from "./pages/Dashboard/ShowAllUsers/ShowAllUsers"
import AddProducts from "./pages/Dashboard/AddProducts/AddProducts"


function Home() {
  

  return (
    <>
      <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/selectproduct/:id" element={<SelectProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/showallusers" element={<ShowAllUsers />} />
            <Route path="/dashboard/addproduct" element={<AddProducts />} />
      </Routes>
    </>
  )
}

export default Home
