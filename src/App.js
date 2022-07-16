import './App.css';
import Home from "./pages/Home/Home"
import About from "./pages/About/About"

import { HashRouter, Route, Routes } from "react-router-dom";




function App() {

  return (
    <div className="App">
        <HashRouter>
          <Routes>
            <Route path = "/about" element = {<About/>}/>             
            <Route path = "/" element = {<Home/>}/>    
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
