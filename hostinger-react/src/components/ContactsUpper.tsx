import { PhoneIcon } from "@heroicons/react/24/outline"
import { AtSymbolIcon } from "@heroicons/react/24/solid"

const ContactsUpper = () => {
    return (
        <div className="m-0 p-0">
            <div className="h-36 flex text-xl list-none flex-col m-auto md:flex-row-reverse items-center justify-center">
                <li className="m-2">
                    <div className="flex leading-4">
                        <AtSymbolIcon className="h-5 w-6 text-blue-700 mr-1" />
                        <a
                            className="hover:text-blue-700"
                            href="mailto:info@fencas.lt"
                        >
                            info@fencas.lt
                        </a>
                    </div>
                </li>
                <li className="m-2">
                    <div className="flex leading-4">
                        <PhoneIcon className="h-5 w-6 text-blue-700 mr-1" />
                        <a
                            className="hover:text-blue-700"
                            href="tel:+37063093384"
                        >
                            +37063093384
                        </a>
                    </div>
                </li>
                <li className="m-2">
                    <div className="flex leading-4">
                        <PhoneIcon className="h-5 w-6 text-blue-700 mr-1" />
                        <a
                            className="hover:text-blue-700"
                            href="tel:+37060813610"
                        >
                            +37060813610
                        </a>
                    </div>
                </li>
                <a href="/" className="cursor-pointer">
                    <img
                        className="hidden md:block h-24 w-auto"
                        src="./fencas_full.png"
                        alt="Fencas"
                        draggable="false"
                    />
                </a>
            </div>
        </div>
    )
}

export default ContactsUpper
