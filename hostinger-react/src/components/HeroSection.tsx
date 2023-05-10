export default function HeroSection() {
    return (
        <div className="flex bg-white">
            <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                        {" "}
                        <span className="text-indigo-600">
                            Tvoros. Vartai. Privatumas.
                        </span>
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 md:text-base">
                        Aukščiausios kokybės tvoros ir vartai gaminami naudojant
                        pažangias technologijas ir montuojami patikimai bei
                        greitai. Mūsų tikslas - užtikrinti didžiausią klientų
                        saugumą ir patogumą. Pasirinkdami mus, galite būti
                        tikri, kad Jūsų namai ar verslas bus puikiai apsaugoti.
                    </p>
                </div>
            </div>
            <div className="hidden lg:block lg:w-1/2">
                <img
                    src="https://dummyimage.com/1920x1080/000/fff"
                    alt="fencas.lt"
                    className="h-full w-full object-cover rounded-l-lg"
                />
            </div>
        </div>
    )
}
