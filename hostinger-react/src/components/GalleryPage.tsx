import React from "react"

interface GalleryProps {
    items: {
        navigation: string
        imgUrl: string
        title: string
    }[]
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        Master Cleanse Reliac Heirloom
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Whatever cardigan tote bag tumblr hexagon brooklyn
                        asymmetrical gentrify, subway tile poke farm-to-table.
                        Franzen you probably haven't heard of them man bun deep
                        jianbing selfies heirloom.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {items.map((item, key) => (
                        <a 
                        className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer transition-all hover:scale-105" 
                        key={key}
                        href={item.navigation}>
                            <div className="flex relative">
                                <img
                                    alt={item.title}
                                    className="inset-0 w-full h-full object-cover object-center h-56"
                                    src={item.imgUrl}
                                />
                                <div className="absolute bg-gray-800 inset-x-0 bottom-0 z-10">
                                    <h1 className="text-lg font-medium text-white">
                                        {item.title}
                                    </h1>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery
