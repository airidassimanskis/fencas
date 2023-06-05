import AboutUs from "./AboutUs"
import Carousel from "./Carousel"
import HeroSection from "./HeroSection"
import EmailUs from "./EmailUs"


const HomePage = () => {

    return (
        <div className="mt-10">
            <HeroSection />
            <div className="container mx-auto mt-10 mb-10">
                <Carousel/>
            </div>
            <AboutUs />
            <EmailUs/>
        </div>
    )
}

export default HomePage
