import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import NotFound from "./components/NotFound"
import GalleryPage from "./components/GalleryPage"
import ContactsUpper from "./components/ContactsUpper"
// import AdminPanel from "./components/AdminPanel"

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
                    {/* <Route path="/admin" element={<AdminPanel/>} /> */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/galerija"element={<GalleryPage items={galleryItems}/>}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    )
}

export default App
