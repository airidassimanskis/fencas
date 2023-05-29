import { useState } from "react"

export default function EmailUs() {
    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = () => {
        if (title.length < 5 || message.length < 5) {
            return
        } else {
            const mailLink = `mailto:info@fencas.lt?subject=${title}&body=${message}`
            window.open(mailLink, "_blank")
        }
    }

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-12 lg:px-8" id="emailus">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            ></div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                    {" "}
                    <span className="text-indigo-600">
                        Susisiekite su mumis el. paštu.
                    </span>{" "}
                </h2>
            </div>
            <form className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Žinutės pavadinimas
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="text"
                                id="text"
                                onChange={(e) => setTitle(e.target.value)}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="message"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Jūsų žinutė
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                onChange={(e) => setMessage(e.target.value)}
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={""}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Susisiekti
                    </button>
                </div>
            </form>
        </div>
    )
}
