import React from "react";
import { Context } from "./Context";

const Form = () => {
    const {
        newTask
    } = React.useContext(Context);

    return (
        <form onSubmit={newTask}>
            <input 
                type="text"
                className="border-2 border-neutral-300 p-1.5 mr-3"
            />
            <button type="submit">
                SUBMIT
            </button>
        </form>
    )
}

export { Form }