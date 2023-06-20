import React from "react";
import { Context } from "./Context";
import { Item } from "./Item";


const List = () => {
    const { 
        tasks
    } = React.useContext(Context);
    return (
        <ul>
            {tasks.map(task =>
                <Item task={task} key={task.id}/>
            )}
        </ul>
    )
}

export { List }