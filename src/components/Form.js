import React from "react";
import { Context } from "./Context";

const Form = () => {
    const {
        newTask
    } = React.useContext(Context);

    return (
        <form onSubmit={newTask} className="mb-4">
            <input 
                type="text"
                className="border-2 border-neutral-300 p-1.5 mr-3"
            />
            <button type="submit" className="bg-cyan-700 p-3 rounded-md text-white font-bold">
                SUBMIT
            </button>
        </form>
    )
}

export { Form }