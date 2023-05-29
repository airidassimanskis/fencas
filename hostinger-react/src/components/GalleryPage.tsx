import React, { useState, useEffect } from "react"

interface GalleryProps {
    items: {
        category: string
        imgUrl: string
        title: string
    }[]
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
    const [activeFilter, setActiveFilter] = useState("")

    const filteredItems =
        activeFilter === "Visi"
            ? items
            : items.filter((item) => item.category === activeFilter)

    const filters = [
        "Visi",
        "Šukos",
        "Polisadinės",
        "Rombas",
        "Tvoralentes",
        "Segmentines",
    ]

    useEffect(() => {
        setActiveFilter("Visi")
    }, [])

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                        <span className="text-indigo-600">
                            Mūsų atlikti darbai
                        </span>
                    </h2>
                </div>

                {/* mobile flter */}
                <div className="flex justify-center mb-6 md:hidden">
                  <select className="p-2 rounded-lg">
                    {filters.map((filter) => (
                        <option
                            key={filter}
                            className=""
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </option>
                    ))}
                  </select>
                </div>

                {/* tablet/desktop filter */}
                <div className="flex justify-center mb-6 max-md:hidden">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`${
                                activeFilter === filter
                                    ? "bg-indigo-600 text-white"
                                    : ""
                            } mx-2 px-4 py-2 rounded-lg border border-indigo-600`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
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
                                <div className="absolute bg-gray-800 inset-x-0 bottom-0 z-10 rounded-b-lg">
                                    <h1 className="text-lg font-medium text-white">
                                        {item.title}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery
