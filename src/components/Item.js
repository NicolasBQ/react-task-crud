import React from "react";
import { Context } from "./Context";

const Item = ({ task }) => {
    const {
        deleteTask,
        changeEditability,
        newTaskVal
    } = React.useContext(Context);


    let content;
    let editButton;
    if(task.editable) {
        content = <input placeholder={task.name} onChange={(e) => newTaskVal(e, task.id)} className="border-2 border-neutral-300"/>
        editButton = 'Submit';
    } else {
        content = <p>{task.name}</p>
        editButton = 'Edit';
    }


    return (
        <li className="flex justify-between mb-3">
            <div className="flex">
                <p>
                    {task.id + 1}<span>.</span>
                </p>
                {content}
            </div>
            <div className="flex">
                <button 
                    className="bg-yellow-500 mr-2 p-2 rounded-md text-white"
                    onClick={() => changeEditability(task.id)}
                >
                    {editButton} 
                </button>
                <button
                    key={task.id}
                    className="bg-red-600 mr-2 p-2 rounded-md text-white"
                    onClick={() => deleteTask(task.id)}
                >

                    Delete
                </button>
            </div>
        </li>
    )
}

export { Item }