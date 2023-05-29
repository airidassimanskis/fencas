const Gallery = () => {
    const filters = [
        { filterName: "Šukos", filterRoute: "sukos", imgUrl: "./images/sukos/sukos1.jpg" },
        { filterName: "Polisadinės", filterRoute: "polisadines", imgUrl: "./images/polisadines/polisadines2.jpg"},
        { filterName: "Rombas", filterRoute: "rombas", imgUrl: "./images/rombas/rombas1.jpg" },
        { filterName: "Tvoralentes", filterRoute: "tvoralentes", imgUrl: "./images/tvoralentes/tvoralentes1.jpg" },
        { filterName: "Segmentines", filterRoute: "segmentines", imgUrl: "./images/segmentines/segmentines1.jpg" },
    ]

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                        <span className="text-indigo-600">
                            Pasirinkite kategorija
                        </span>
                    </h2>
                </div>
                <div className="flex flex-wrap m-4">
                    {filters.map((item, key) => (
                        <div
                            className="lg:w-1/3 sm:w-1/2 p-4 h-64 overflow-hidden cursor-pointer transition-all hover:scale-105"
                            key={key}
                            onClick={() =>
                                (window.location.href = `/${item.filterRoute}`)
                            }
                        >
                            <div className="flex relative">
                            <img
                                    alt={item.filterName}
                                    className="inset-0 w-full object-cover object-center h-56 rounded-lg"
                                    src={item.imgUrl}
                                />
                                <div className="absolute bg-gray-800 inset-x-0 bottom-0 z-10 rounded-b-lg">
                                    <h1 className="text-lg font-medium text-white">
                                        {item.filterName}
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
