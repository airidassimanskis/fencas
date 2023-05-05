import { useState } from "react"

type AccordionItem = { question: string; answer: string }

type Props = { items: AccordionItem[] }

export default function DUK({ items }: Props) {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (index: number) => {
        if (activeIndex === index) {
            // Clicked on an already active item, collapse it
            setActiveIndex(-1)
        } else {
            // Expand the clicked item and collapse the previously active one
            setActiveIndex(index)
        }
    }

    return (
        <div id="DUK">
            <div className="flex w-full items-center text-center lg:text-left px-8 md:px-12">
                <div className="w-full">
                    <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                        {" "}
                        <span className="text-indigo-600">DUK</span>{" "}
                    </h2>
                    <div className="mt-2">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`bg-gray-200 mb-2 rounded-lg w-full ${
                                    activeIndex === index
                                        ? "bg-gray-300 cursor-auto"
                                        : "cursor-pointer"
                                } transition-all duration-300`}
                            >
                                <div
                                    className="p-4"
                                    onClick={() =>
                                        activeIndex !== index &&
                                        handleClick(index)
                                    }
                                >
                                    <h3 className="text-xl font-semibold text-black-500">
                                        {item.question}
                                    </h3>
                                </div>
                                <div
                                    className={`${
                                        activeIndex === index
                                            ? "max-h-screen transition-all duration-300"
                                            : "max-h-0 overflow-hidden transition-all duration-300"
                                    }`}
                                >
                                    <p className="p-4 text-sm text-gray-500 md:text-base">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
