import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import NotFound from "./components/NotFound"
import GalleryPage from "./components/GalleryPage"
import ContactsUpper from "./components/ContactsUpper"
import SukosGallery from "./components/SukosGallery"
import PolisadinesGallery from "./components/PolisadinesGallery"
import RombasGallery from "./components/RombasGallery"
import TvoralentesGallery from "./components/TvoralentesGallery"
import SegmentinesGallery from "./components/SegmentinesGallery"

function App() {
    const galleryItems = [
        {
            category: "Rombas",
            imgUrl: "/images/rombas/rombas3.jpg",
            title: "Rombas",
        },
        {
            category: "Rombas",
            imgUrl: "/images/rombas/rombas1.jpg",
            title: "Rombas",
        },
        {
            category: "Polisadinės",
            imgUrl: "/images/polisadines/polisadines7.jpg",
            title: "Polisadinės",
        },
        {
            category: "Polisadinės",
            imgUrl: "/images/polisadines/polisadines6.jpg",
            title: "Polisadinės",
        },
        {
            category: "Polisadinės",
            imgUrl: "/images/polisadines/polisadines8.jpg",
            title: "Polisadinės",
        },
        {
            category: "Šukos",
            imgUrl: "/images/sukos/sukos4.jpg",
            title: "Šukos",
        },
        {
            category: "Segmentines",
            imgUrl: "/images/segmentines/segmentines3.jpg",
            title: "Segmentines",
        },
        {
            category: "Rombas",
            imgUrl: "/images/rombas/rombas8.jpg",
            title: "Rombas",
        },
        {
            category: "Šukos",
            imgUrl: "/images/sukos/sukos9.jpg",
            title: "Šukos",
        },
        {
            category: "Segmentines",
            imgUrl: "/images/segmentines/segmentines4.jpg",
            title: "Segmentines",
        },
        {
            category: "Šukos",
            imgUrl: "/images/sukos/sukos1.jpg",
            title: "Šukos",
        },
        {
            category: "Polisadinės",
            imgUrl: "/images/polisadines/polisadines5.jpg",
            title: "Polisadinės",
        },
        {
            category: "Segmentines",
            imgUrl: "/images/segmentines/segmentines2.jpg",
            title: "Segmentines",
        },
        {
            category: "Šukos",
            imgUrl: "/images/sukos/sukos7.jpg",
            title: "Šukos",
        },
        {
            category: "Rombas",
            imgUrl: "/images/rombas/rombas5.jpg",
            title: "Rombas",
        },
        {
            category: "Tvoralentės",
            imgUrl: "/images/tvoralentes/tvoralentes2.jpg",
            title: "Tvoralentės",
        },
        {
            category: "Rombas",
            imgUrl: "/images/rombas/rombas4.jpg",
            title: "Rombas",
        },
        {
            category: "Šukos",
            imgUrl: "/images/sukos/sukos10.jpg",
            title: "Šukos",
        },
        {
            category: "Polisadinės",
            imgUrl: "/images/polisadines/polisadines3.jpg",
            title: "Polisadinės",
        },
        {
            category: "Polisadinės",
            imgUrl: "/images/polisadines/polisadines4.jpg",
            title: "Polisadinės",
        },
        {
            category: "Rombas",
            imgUrl: "/images/rombas/rombas2.jpg",
            title: "Rombas",
        },
        {
            category: "Rombas",
            imgUrl: "/images/rombas/rombas9.jpg",
            title: "Rombas",
        },
        {
            category: "Polisadinės",
            imgUrl: "/images/polisadines/polisadines2.jpg",
            title: "Polisadinės",
        },
        {
            category: "Segmentines",
            imgUrl: "/images/segmentines/segmentines1.jpg",
            title: "Segmentines",
        },
        {
            category: "Tvoralentės",
            imgUrl: "/images/tvoralentes/tvoralentes3.jpg",
            title: "Tvoralentės",
        },
        {
            category: "Rombas",
            imgUrl: "/images/rombas/rombas7.jpg",
            title: "Rombas",
        },
        {
            category: "Segmentines",
            imgUrl: "/images/segmentines/segmentines3.jpg",
            title: "Segmentines",
        },
        {
            category: "Tvoralentės",
            imgUrl: "/images/tvoralentes/tvoralentes1.jpg",
            title: "Tvoralentės",
        },
    ]

    return (
        <Router>
            <div className="App font-sans bg-white">
                <ContactsUpper />
                <Navbar />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/galerija" element={<GalleryPage />} />
                    <Route path="/sukos" element={<SukosGallery items={galleryItems} />}/>
                    <Route path="/polisadines" element={<PolisadinesGallery items={galleryItems} />}/>
                    <Route path="/rombas" element={<RombasGallery items={galleryItems} />}/>
                    <Route path="/tvoralentes" element={<TvoralentesGallery items={galleryItems} />}/>
                    <Route path="/segmentines" element={<SegmentinesGallery items={galleryItems} />}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    )
}

export default App
