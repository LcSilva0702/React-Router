import GreenPage from "./pages/GreenPage"
import BluePage from "./pages/BluePage"
import RedPage from "./pages/RedPage"
import OrangePage from "./pages/OrangePage"
import { Routes, Route, Navigate } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage"

function App() {
  const auth = true

  return (
    <Routes>
      <Route path="/" element={<GreenPage/>} exact/>
      <Route path="/blue" element={<BluePage/>} exact/>
      <Route path="/red" element={<RedPage/>} exact/>
      <Route path="/orange" element={auth ? <OrangePage /> : <Navigate to="/" replace/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  )
}

export default App
