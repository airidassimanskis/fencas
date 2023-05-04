function HeroSection() {
    return (
        <div className="flex bg-white" style={{ height: "600px" }}>
            <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                <div>
                    
                    <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                        {" "}
                        <span className="text-indigo-600">
                            Tvoros. Vartai. Privatumas.
                        </span>
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 md:text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam sed justo quis leo malesuada condimentum. Sed
                        faucibus, elit eu interdum euismod, libero purus mollis
                        massa, nec malesuada justo lectus non mauris. Duis porta
                        lobortis ligula, ut feugiat quam porttitor et.
                    </p>
                </div>
            </div>
            <div className="hidden lg:block lg:w-1/2">
                <img
                    src="https://dummyimage.com/1920x1080/000/fff"
                    alt="fencas.lt"
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    )
}

export default HeroSection
