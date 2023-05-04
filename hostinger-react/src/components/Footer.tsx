import { Typography } from "@material-tailwind/react"
import { PhoneIcon } from "@heroicons/react/24/outline"
import { AtSymbolIcon } from "@heroicons/react/24/solid"

export default function Footer() {
    return (
        <footer className="w-full bg-white p-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
                <img
                    src="./fencas.png"
                    alt="logo-ct"
                    className="w-10"
                    draggable="false"
                />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Typography color="blue-gray" className="font-normal">
                            <div className="flex leading-4">
                                <AtSymbolIcon className="h-5 w-6 text-black-500" />
                                <a
                                    className="hover:text-blue-700"
                                    href="mailto:info@fencas.lt"
                                >
                                    info@fencas.lt
                                </a>
                            </div>
                        </Typography>
                    </li>
                    <li>
                        <Typography color="blue-gray" className="font-normal">
                            <div className="flex leading-4">
                                <PhoneIcon className="h-5 w-6 text-black-500" />
                                <a
                                    className="hover:text-blue-700"
                                    href="tel:+37060813610"
                                >
                                    +37060813610
                                </a>
                            </div>
                        </Typography>
                    </li>
                    <li>
                        <Typography color="blue-gray" className="font-normal">
                            <div className="flex leading-4">
                                <PhoneIcon className="h-5 w-6 text-black-500" />
                                <a
                                    className="hover:text-blue-700"
                                    href="tel:+37063093384"
                                >
                                    +37063093384
                                </a>
                            </div>
                        </Typography>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-blue-gray-50" />
            <Typography color="blue-gray" className="text-center font-normal">
                &copy; 2023 fencas.lt
            </Typography>
        </footer>
    )
}
