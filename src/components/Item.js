import React from "react";
import { Context } from "./Context";

const Item = ({ task }) => {
    const {
        deleteTask
    } = React.useContext(Context);

    return (
        <li className="flex justify-between">
            <div className="flex">
                <p>
                    {task.id}<span>.</span>
                </p>
                <input value={task.name} readOnly/>
            </div>
            <div className="flex">
                <button className="mr-2">
                    Edit 
                </button>
                <button
                    key={task.id}
                    onClick={() => deleteTask(task.id)}
                >

                    Delete
                </button>
            </div>
        </li>
    )
}

export { Item }