import { useState } from "react"

type AccordionItem = { question: string; answer: string }

type Props = { items: AccordionItem[] }

export default function Example({ items }: Props) {
    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (index: number) => {
        if (activeIndex === index) {
            // Clicked on an already active item, do nothing
            return
        }
        setActiveIndex(index)
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
                                        : ""
                                } transition-all duration-300`}
                            >
                                <div
                                    className="p-4 cursor-pointer"
                                    onClick={() => handleClick(index)}
                                >
                                    <h3 className="text-xl font-semibold text-black-500">
                                        {item.question}
                                    </h3>
                                </div>
                                <div
                                    className={`${
                                        activeIndex === index
                                            ? "block"
                                            : "hidden"
                                    } p-4 transition-all duration-300`}
                                >
                                    <p className="text-sm text-gray-500 md:text-base">
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
