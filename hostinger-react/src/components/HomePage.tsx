import AboutUs from "./AboutUs"
import Carousel from "./Carousel"
import LandingHeader from "./LandingHeader"

const HomePage = () => {
    const carouselImages = [
        "https://dummyimage.com/600x400/000/fff",
        "https://dummyimage.com/1200x400/000/fff",
        "https://dummyimage.com/1920x1080/000/fff",
        "https://dummyimage.com/1200x1080/000/fff",
    ]

    return (
        <div className="mt-10">
            <LandingHeader />
            <div className="container mx-auto mt-10 mb-10">
                <Carousel images={carouselImages} />
            </div>
            <AboutUs />
        </div>
    )
}

export default HomePage
