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
        <div>
            <LandingHeader/>
            <div className="container mx-auto">
                <Carousel images={carouselImages}/>
            </div>
            1. sufixinti kad footeris butu sticky i bottom 2. prideti icons
            footeryje ir ContactsUpper 3. pagrazinti ContactsUpper 4. image
            carousel 5. about us vidury kazkur home page
        </div>
    )
}

export default HomePage
