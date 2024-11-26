import { Route, Routes } from "react-router-dom"
import Main from "./pages/Main/Main"
import SelectProduct from "./pages/SelectProduct/SelectProduct"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"


function Home() {
  

  return (
    <>
      <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/selectproduct/:id" element={<SelectProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default Home
