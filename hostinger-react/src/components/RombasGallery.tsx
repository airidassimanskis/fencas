import React from "react"

interface GalleryProps {
    items: {
        category: string
        imgUrl: string
        title: string
    }[]
}

const PolisadinesGallery: React.FC<GalleryProps> = ({ items }) => {
    const filteredItems = items.filter(
        (item) => item.category === "Rombas"
    )
    console.log(filteredItems)

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                        <span className="text-indigo-600">
                            Tvoros "Rombas"
                        </span>
                    </h2>
                </div>
                <div className="flex flex-wrap m-4">
                    {filteredItems.map((item, key) => (
                        <div
                            className="lg:w-1/3 sm:w-1/2 p-4 h-64 overflow-hidden cursor-pointer transition-all hover:scale-105"
                            key={key}
                        >
                            <div className="flex relative">
                                <img
                                    alt={item.title}
                                    className="inset-0 w-full object-cover object-center h-56 rounded-lg"
                                    src={item.imgUrl}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PolisadinesGallery
