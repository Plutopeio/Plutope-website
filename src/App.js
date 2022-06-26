import './App.css';
import './Bootstrap.css';
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer/Footer"

import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {

  return (
    <div className="App">
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path = "/about" element = {<About/>}/>             
            <Route path = "/" element = {<Home/>}/>    
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
