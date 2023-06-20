import React from "react";
import { Form } from "./Form";
import { List } from "./List";

const AppUI = () => {
    return (
        <main className="w-full h-screen flex justify-center items-center">
            <section className="text-center">
                <h1 className="font-sans mb-4 text-xl font-bold">CRUD APP</h1>
                <Form />
                <List />
            </section>
        </main>
    )
}

export { AppUI }