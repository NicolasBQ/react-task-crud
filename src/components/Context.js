import React from "react";

const Context = React.createContext();


const Provider = ({ children }) => {
    const [tasks, setTasks] = React.useState([]);

    const newTask = (e) => {
        e.preventDefault();
        const newArr = [...tasks];
        const taskName = e.target[0].value;
        newArr.push({id: tasks.length, name: taskName, editable: false});
        setTasks(newArr);
    }

    const deleteTask = (id) => {
        const newArr = [...tasks];
        newArr.splice(id, 1);
        newArr.forEach((task, i) => task.id = i);
        setTasks(newArr);
    }

    const changeEditability = (id) => {
        let newArr = [...tasks].map(task => {
            if(task.id === id) {
                task.editable = !task.editable;
                return task;
            }

            return task
        });
        setTasks(newArr);
    }

    const newTaskVal = (e, id) => {
        let newArr = [...tasks].map(task => {
            if(task.id === id) {
                task.name = e.target.value;
                return task;
            }

            return task;
        })
        setTasks(newArr);
    }

    return (
        <Context.Provider
            value={{
                newTask,
                tasks,
                deleteTask,
                changeEditability,
                newTaskVal
            }}
        >
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }