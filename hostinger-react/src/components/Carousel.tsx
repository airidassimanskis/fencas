import React, { useState, useEffect } from "react"

interface CarouselProps {
    images: string[]
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0)


    const handlePrev = () => {
        setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1)
    }

    const handleNext = () => {
        setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext()
        }, 3000)

        return () => clearInterval(interval)
    }, [activeIndex])

    return (
        <div
            id="carouselExampleControls"
            className="relative"
            data-te-carousel-init
            data-te-carousel-slide
        >
            {/* Carousel items */}
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                {/* Carousel items */}
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`relative float-left w-full ${
                            index === activeIndex ? "" : "-mr-[100%] hidden"
                        } w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
                        data-te-carousel-item
                        data-te-carousel-active={index === activeIndex}
                    >
                        <img
                            src={image}
                            className="block w-full h-64 md:h-96 lg:h-responsive xl:h-responsive object-cover object-center"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            {/* Carousel controls - prev item */}
            <button
                className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleControls"
                data-te-slide="prev"
                onClick={handlePrev}
            >
                <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Previous
                </span>
            </button>

            {/* Carousel controls - next item */}
            <button
                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleControls"
                data-te-slide="next"
                onClick={handleNext}
            >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Next
                </span>
                <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 19.5l7.5-7.5-7.5-7.5"
                        />
                    </svg>
                </span>
            </button>
        </div>
    )
}

export default Carousel
