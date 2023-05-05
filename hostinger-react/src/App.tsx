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
    const galleryItems = [
        {
            category: "Polisadines",
            imgUrl: "https://dummyimage.com/1920x1080/000/fff",
            title: "polisadines",
        },
        {
            category: "Polisadines",
            imgUrl: "https://dummyimage.com/1920x1080/000/fff",
            title: "polisadines",
        },
        {
            category: "Polisadines",
            imgUrl: "https://dummyimage.com/1920x1080/000/fff",
            title: "polisadines",
        },
        {
            category: "Laser Cut",
            imgUrl: "https://dummyimage.com/1920x1080/000/fff",
            title: "lasercut",
        },
    ]

    return (
        <Router>
            <div className="App font-sans">
                <ContactsUpper />
                <Navbar />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/kontaktai" element={<Contacts />} />
                    <Route
                        path="/galerija"
                        element={<GalleryPage items={galleryItems} />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    )
}

export default App
