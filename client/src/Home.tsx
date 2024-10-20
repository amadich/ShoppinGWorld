import { Route, Routes } from "react-router-dom"
import Main from "./pages/Main/Main"
import SelectProduct from "./pages/SelectProduct/SelectProduct"


function Home() {
  

  return (
    <>
      <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/selectproduct/:id" element={<SelectProduct />} />
      </Routes>
    </>
  )
}

export default Home
