import { Route, Routes } from "react-router-dom"
import Main from "./pages/Main/Main"
import SelectProduct from "./pages/SelectProduct/SelectProduct"
import Login from "./pages/Login/Login"


function Home() {
  

  return (
    <>
      <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/selectproduct/:id" element={<SelectProduct />} />
            <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default Home
