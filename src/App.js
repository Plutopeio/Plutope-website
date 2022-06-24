import './App.css';
import Navbar from "./components/Navbar"
import Landing from "./components/Landing/Landing"
import Features from "./components/Features/Features"

import Manage from "./components/Manage/Manage"
import Enabling from "./components/Enabling/Enabling"



function App() {
  return (
    <div className="App">
        <Navbar/>
        <Landing/>
        <Features/>
        <Manage/>
        <Enabling/>
        <marquee>• Exchange. Anytime. Anywhere at a lightning-fast speed because Time is money.</marquee>
    </div>
  );
}

export default App;
