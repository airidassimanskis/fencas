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
            question: "Ar yra galimybė pasitikrinti tvorų ir vartų gaminius iš anksto, prieš jų pirkimą?",
            answer: "Taip, paaiskinti kaip jie gali patikrinti ar ten kazka.",
        },
        {
            question: "Ar dirbate tik Kaune?",
            answer: "Mūsų paslaugos yra pasiekiamos visoje Kauno apskrityje.",
        },
        {
            question: "qqqqqqqqqqqqqqqqqqq?",
            answer: "aaaaaaaaaaaaaaaaaaaaaaa.",
        },
        {
            question: "qqqqqqqqqqqqqqqqqqq?",
            answer: "aaaaaaaaaaaaaaaaaa.",
        },
        {
            question: "qqqqqq?",
            answer: "aaaaaaaaaaaa.",
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
