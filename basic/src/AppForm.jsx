import React from "react";
import { useReducer } from "react";
import { Reducer } from "react";
import formReducer from "./reducer/form-reducer";

export default function AppForm() {
    const [form, dispatch] = useReducer(formReducer, initialForm);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    // dispatchは既に対象となるObjectと繋がっているので、ここではmethodの中で使いたい値だけを
    // 引数として渡せば良い
    const handleChange = (e) => {
        dispatch({ type: "updated", e });
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
