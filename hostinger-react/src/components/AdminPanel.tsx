import React, { useState } from "react"

const AdminPanel = () => {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")

    console.log("title", title)
    console.log("category", category)

    const handleSubmit = () => {
        if (category === "none") {
            alert("PASIRINK KATEGORIJA")
        }
    }

    return (
        <div>
            <p className="text-3xl mt-12">Admin Dashboard</p>

            <p className="text-lg mt-12">prideti nuotrauku i galerija</p>
            <div className="flex flex-col m-auto">
                <input
                    className="w-56 bg-gray-900 text-white"
                    placeholder="pavadinimas"
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                ></input>

                <select
                    className="w-56 bg-gray-900 text-white mt-6 mb-6"
                    onChange={(e) => {
                        setCategory(e.target.value)
                    }}
                >
                    <option value="none">Kategorija</option>
                    <option value="Polisadines">Polisadines</option>
                    <option value="Laser Cut">Laser Cut</option>
                </select>

                <button
                    className="w-56 bg-gray-900 text-white"
                    data-ripple-light="true"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default AdminPanel
