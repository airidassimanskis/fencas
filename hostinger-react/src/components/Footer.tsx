import { Typography } from "@material-tailwind/react"
import { PhoneIcon } from "@heroicons/react/24/outline"
import { AtSymbolIcon } from "@heroicons/react/24/solid"

export default function Footer() {
    return (
        <footer className="w-full bg-gray-800 p-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-gray-800 text-center md:justify-between">
                <a href="/" className="cursor-pointer">
                    <img
                        src="./fencas.png"
                        alt="logo-ct"
                        className="w-10"
                        draggable="false"
                    />
                </a>
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Typography color="blue-gray" className="font-normal">
                            <span className="flex leading-4">
                                <AtSymbolIcon className="h-5 w-6 text-blue-700" />
                                <a
                                    className="text-white hover:text-blue-700"
                                    href="mailto:info@fencas.lt"
                                >
                                    info@fencas.lt
                                </a>
                            </span>
                        </Typography>
                    </li>
                    <li>
                        <Typography color="blue-gray" className="font-normal">
                            <span className="flex leading-4">
                                <PhoneIcon className="h-5 w-6 text-blue-700" />
                                <a
                                    className="text-white hover:text-blue-700"
                                    href="tel:+37060813610"
                                >
                                    +37060813610
                                </a>
                            </span>
                        </Typography>
                    </li>
                    <li>
                        <Typography color="blue-gray" className="font-normal">
                            <span className="flex leading-4">
                                <PhoneIcon className="h-5 w-6 text-blue-700" />
                                <a
                                    className="text-white hover:text-blue-700"
                                    href="tel:+37063093384"
                                >
                                    +37063093384
                                </a>
                            </span>
                        </Typography>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-blue-gray-50" />
            <a 
            href="/" 
            className="text-center font-normal text-white hover:text-blue-700 cursor-pointer">
                &copy; 2023 fencas.lt
            </a>
        </footer>
    )
}
