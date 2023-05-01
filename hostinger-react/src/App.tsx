import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import Contacts from "./components/Contacts"
import NotFound from "./components/NotFound"

function App() {
    return (
        <Router>
        <div className="App">
            <Navbar/>

            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/kontaktai" element={<Contacts/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>

            <Footer/>
        </div>
    </Router>

    )
}

export default App
