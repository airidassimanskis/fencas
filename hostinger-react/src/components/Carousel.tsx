import Carousel from "react-material-ui-carousel"

function CarouselComponent() {
    const items = [
        { url: "https://dummyimage.com/600x400/000/fff" },
        { url: "https://dummyimage.com/1200x400/000/fff" },
        { url: "https://dummyimage.com/1920x1080/000/fff" },
        { url: "https://dummyimage.com/1200x1080/000/fff" },
    ]

    return (
        <Carousel
            height={500}
            animation="slide"
            swipe={false}
            autoPlay={true}
            stopAutoPlayOnHover={false}
            duration={500}
            interval={3000}
            className="ml-4 mr-4"
        >
            {items.map((item, i) => (
                <Item key={i} item={item} />
            ))}
        </Carousel>
    )
}

function Item(props: { item: { url: string } }): JSX.Element {
    return (
        <img
            src={props.item.url}
            className="object-cover object-cover w-full h-full"
        />
    )
}

export default CarouselComponent
