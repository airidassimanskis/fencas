import { PhoneIcon } from "@heroicons/react/24/outline"
import { AtSymbolIcon } from "@heroicons/react/24/solid"

const ContactsUpper = () => {
    return (
        <div>
            <li>
                <div className="flex leading-4">
                    <AtSymbolIcon className="h-5 w-6 text-black-500 mr-1" />
                    <a
                        className="hover:text-blue-700"
                        href="mailto:info@fencas.lt"
                    >
                        info@fencas.lt
                    </a>
                </div>
            </li>
            <li>
                <div className="flex leading-4">
                    <PhoneIcon className="h-5 w-6 text-black-500 mr-1" />
                    <a className="hover:text-blue-700" href="tel:+37060813610">
                        +37060813610
                    </a>
                </div>
            </li>
            <li>
                <div className="flex leading-4">
                    <PhoneIcon className="h-5 w-6 text-black-500 mr-1" />
                    <a className="hover:text-blue-700" href="tel:+37063093384">
                        +37063093384
                    </a>
                </div>
            </li>
        </div>
    )
}

export default ContactsUpper
