import AboutUs from "./AboutUs"
import Carousel from "./Carousel"
import HeroSection from "./HeroSection"
import DUK from "./DUK"
import EmailUs from "./EmailUs"


const HomePage = () => {
    const carouselImages = [
        "https://dummyimage.com/600x400/000/fff",
        "https://dummyimage.com/1200x400/000/fff",
        "https://dummyimage.com/1920x1080/000/fff",
        "https://dummyimage.com/1200x1080/000/fff",
    ]

    const DUKitems = [
        {
            question: "Koks jusu darbo laikas?",
            answer: "nuo 3-0.",
        },
        {
            question: "Ar dirbate tik Kaune?",
            answer: "Ne, mes dirbame ten ir ten.",
        },
        {
            question: "Ar dazote tvoras?",
            answer: "Ne, mes nedazome tvoru.",
        },
        {
            question: "Kaip susisiekti su jumis?",
            answer: "Galite parasyti mums email arba paskambinti numeriais +370kazkaskazkas.",
        },
        {
            question: "Kiek laiko uztrunka kazka padaryti?",
            answer: "Ta ir ta uztrunka tiek ir tiek.",
        },
    ]

    return (
        <div className="mt-10">
            <HeroSection />
            <div className="container mx-auto mt-10 mb-10">
                <Carousel images={carouselImages} />
            </div>
            <AboutUs />
            <div className="mt-10 mb-10">
                <DUK items={DUKitems} />
            </div>
            <EmailUs/>
        </div>
    )
}

export default HomePage
