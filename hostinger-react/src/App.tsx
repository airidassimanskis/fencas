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
            category: "Rombas",
            imgUrl: "./images/rombas/rombas3.jpg",
            title: "Rombas",
        },
        {
            category: "Rombas",
            imgUrl: "./images/rombas/rombas1.jpg",
            title: "Rombas",
        },
        {
            category: "Polisadinės",
            imgUrl: "./images/polisadines/polisadines7.jpg",
            title: "Polisadinės",
        },
        {
            category: "Polisadinės",
            imgUrl: "./images/polisadines/polisadines6.jpg",
            title: "Polisadinės",
        },
        {
            category: "Polisadinės",
            imgUrl: "./images/polisadines/polisadines8.jpg",
            title: "Polisadinės",
        },
        {
            category: "Šukos",
            imgUrl: "./images/sukos/sukos4.jpg",
            title: "Šukos",
        },
        {
            category: "Segmentines",
            imgUrl: "./images/segmentines/segmentines3.jpg",
            title: "Segmentines",
        },
        {
            category: "Rombas",
            imgUrl: "./images/rombas/rombas8.jpg",
            title: "Rombas",
        },
        {
            category: "Šukos",
            imgUrl: "./images/sukos/sukos9.jpg",
            title: "Šukos",
        },
        {
            category: "Segmentines",
            imgUrl: "./images/segmentines/segmentines4.jpg",
            title: "Segmentines",
        },
        {
            category: "Šukos",
            imgUrl: "./images/sukos/sukos1.jpg",
            title: "Šukos",
        },
        {
            category: "Polisadinės",
            imgUrl: "./images/polisadines/polisadines5.jpg",
            title: "Polisadinės",
        },
        {
            category: "Segmentines",
            imgUrl: "./images/segmentines/segmentines2.jpg",
            title: "Segmentines",
        },
        {
            category: "Šukos",
            imgUrl: "./images/sukos/sukos7.jpg",
            title: "Šukos",
        },
        {
            category: "Rombas",
            imgUrl: "./images/rombas/rombas5.jpg",
            title: "Rombas",
        },
        {
            category: "Tvoralentes",
            imgUrl: "./images/tvoralentes/tvoralentes2.jpg",
            title: "Tvoralentes",
        },
        {
            category: "Rombas",
            imgUrl: "./images/rombas/rombas4.jpg",
            title: "Rombas",
        },
        {
            category: "Šukos",
            imgUrl: "./images/sukos/sukos10.jpg",
            title: "Šukos",
        },
        {
            category: "Polisadinės",
            imgUrl: "./images/polisadines/polisadines3.jpg",
            title: "Polisadinės",
        },
        {
            category: "Polisadinės",
            imgUrl: "./images/polisadines/polisadines4.jpg",
            title: "Polisadinės",
        },
        {
            category: "Rombas",
            imgUrl: "./images/rombas/rombas2.jpg",
            title: "Rombas",
        },
        {
            category: "Rombas",
            imgUrl: "./images/rombas/rombas9.jpg",
            title: "Rombas",
        },
        {
            category: "Polisadinės",
            imgUrl: "./images/polisadines/polisadines2.jpg",
            title: "Polisadinės",
        },
        {
            category: "Segmentines",
            imgUrl: "./images/segmentines/segmentines1.jpg",
            title: "Segmentines",
        },
        {
            category: "Tvoralentes",
            imgUrl: "./images/tvoralentes/tvoralentes3.jpg",
            title: "Tvoralentes",
        },
        {
            category: "Rombas",
            imgUrl: "./images/rombas/rombas7.jpg",
            title: "Rombas",
        },
        {
            category: "Segmentines",
            imgUrl: "./images/segmentines/segmentines3.jpg",
            title: "Segmentines",
        },
        {
            category: "Tvoralentes",
            imgUrl: "./images/tvoralentes/tvoralentes1.jpg",
            title: "Tvoralentes",
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
