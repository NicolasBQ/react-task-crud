import React from "react";
import { Context } from "./Context";

const List = () => {
    const { 
        tasks
    } = React.useContext(Context);
    return (
        <ul>
            {tasks.map(task =>
                <li key={task.id} className="flex justify-between">
                    <div className="flex">
                        <p>
                            {task.id + 1}<span>.</span>
                        </p>
                        <p>
                            {task.name}
                        </p>
                    </div>
                    <div className="flex">
                        <button className="mr-2">
                            Edit 
                        </button>
                        <button>
                            Delete
                        </button>
                    </div>
                </li>
            )}
        </ul>
    )
}

export { List }