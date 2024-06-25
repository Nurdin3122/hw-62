
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./container/Home/Home";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Contacts from "./components/Contacts/Contacts";

const App = () => {

  return (
    <>
        <header>
            <Header/>
        </header>
        <main>
            <Routes>
                <Route path="/" element={<Home></Home>}/>
                <Route path="/informationAboutMe" element={<AboutMe/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
        </main>
    </>
  )
};

export default App
