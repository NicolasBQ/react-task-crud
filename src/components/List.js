import React from "react";
import { Context } from "./Context";
import { Item } from "./Item";


const List = () => {
    const { 
        tasks
    } = React.useContext(Context);

    const items = tasks.map(task => <Item task={task} key={task.id}/>)
    return (
        <ul>
            {items}
        </ul>
    )
}

export { List }