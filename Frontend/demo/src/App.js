import { BrowserRouter, Route, Routes } from "react-router-dom"
import  Home from "./Home"
import  Nav from "./Nav"
import  Reg from "./Reg"
import  Login from "./Login"
import About from './About'
const App = ()=>{
  return(
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/reg" element = {<Reg/>}/>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/about/*" element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}
export default App