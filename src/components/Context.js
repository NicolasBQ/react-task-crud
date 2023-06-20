import React from "react";

const Context = React.createContext();


const Provider = ({ children }) => {
    const [tasks, setTasks] = React.useState([]);

    const newTask = (e) => {
        e.preventDefault();
        const newArr = [...tasks];
        const taskName = e.target[0].value;
        newArr.push({id: tasks.length, name: taskName});
        setTasks(newArr);
    }

    const deleteTask = (id) => {
        const newArr = [...tasks];
        newArr.splice(id, 1);
        newArr.forEach((task, i) => task.id = i);
        setTasks(newArr);
    }

    return (
        <Context.Provider
            value={{
                newTask,
                tasks,
                deleteTask
            }}
        >
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }