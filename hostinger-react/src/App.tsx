import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import Contacts from "./components/Contacts"
import NotFound from "./components/NotFound"
import GalleryPage from "./components/GalleryPage"
import ContactsUpper from "./components/ContactsUpper"

function App() {
    return (
        <Router>
        <div className="App font-sans">
            <ContactsUpper/>
            <Navbar/>

            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/kontaktai" element={<Contacts/>} />
                <Route path="/galerija" element={<GalleryPage/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>

            <Footer/>
        </div>
    </Router>

    )
}

export default App
