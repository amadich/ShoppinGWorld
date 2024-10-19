import { Route, Routes } from "react-router-dom"
import Main from "./pages/Main/Main"


function Home() {
  

  return (
    <>
      <Routes>
            <Route path="/" element={<Main />} />
      </Routes>
    </>
  )
}

export default Home
