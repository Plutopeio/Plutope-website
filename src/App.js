import './App.css';
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer/Footer"

import { HashRouter, Route, Routes } from "react-router-dom";




function App() {

  return (
    <div className="App">
        <Navbar/>
        <HashRouter>
          <Routes>
            <Route path = "/about" element = {<About/>}/>             
            <Route path = "/" element = {<Home/>}/>    
          </Routes>
        </HashRouter>
        <Footer/>
    </div>
  );
}

export default App;
