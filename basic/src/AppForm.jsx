import React from "react";
import { useReducer } from "react";
import formReducer from "./reducer/form-reducer";
import { useImmer } from "use-immer";

export default function AppForm() {
    const [form, updateForm] = useImmer(initialForm);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    // dispatchは既に対象となるObjectと繋がっているので、ここではmethodの中で使いたい値だけを
    // 引数として渡せば良い
    const handleChange = (e) => {
        updateForm((form) => {
            const { name, value } = e.target;

            if (Object.keys(form)[0] === name) {
                form.name = value;
            } else {
                form.email = value;
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* uncontrolled component */}
            <label htmlFor="name">名前 : </label>
            <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
            />
            <label htmlFor="email">email : </label>
            <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    );
}

const initialForm = { name: "", email: "" };
