import Carousel from "react-material-ui-carousel"

function CarouselComponent() {
    const items = [
        { url: "./images/polisadines/polisadines7.jpg" },
        { url: "./images/rombas/rombas7.jpg" },
        { url: "./images/polisadines/polisadines4.jpg" },
        { url: "./images/polisadines/polisadines5.jpg" },
    ]

    return (
        <Carousel
            
            animation="slide"
            swipe={false}
            autoPlay={true}
            stopAutoPlayOnHover={true}
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
            className="object-cover object-cover w-full h-72 sm:h-80 md:h-96 lg:h-responsive"
        />
    )
}

export default CarouselComponent
