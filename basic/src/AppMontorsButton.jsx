import React, { memo, useEffect, useReducer, useState } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import personReducer from "./reducer/person-reducer";

const AppMentorsButton = () => {
    const [person, dispatch] = useReducer(personReducer, initialPerson);

    const handleAdd = useCallback(() => {
        const name = prompt(`追加したいエルダーの名前は何でしょうか？`);
        const title = prompt(`追加したエルダーの職種は何でしょうか？`);
        dispatch({ type: "added", name, title });
    }, []);
    const handledelete = useCallback(() => {
        const name = prompt(`削除したいエルダーの名前は何でしょうか？`);
        dispatch({ type: "deleted", name });
    }, []);
    const handleUpdate = useCallback(() => {
        const prev = prompt(`誰の名前を変えたいんですか？`);
        const current = prompt(`名前を何にしますか？`);
        dispatch({ type: "updated", prev, current });
    }, []);

    return (
        <div>
            <h1>
                {person.name}は {person.title}
            </h1>
            <p>{person.name}のエルダーは:</p>
            <ul>
                {person.mentors.map((mentor, index) => (
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <Button
                text="エルダーの名前を変える"
                onClick={handleUpdate}
            ></Button>
            <Button text="エルダー追加" onClick={handleAdd}></Button>
            <Button text="エルダー削除" onClick={handledelete}></Button>
        </div>
    );
};

const Button = memo(({ text, onClick }) => {
    console.log("Button", text, "re-rendering - !");
    const result = useMemo(() => calculateSomething(), []);

    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "20px",
                margin: "0.4rem",
            }}
        >
            {`${text} ${result}`}
        </button>
    );
});

function calculateSomething() {
    for (let i = 0; i < 10000; i++) {
        console.log("good");
    }
    return 10;
}

export default AppMentorsButton;

const initialPerson = {
    name: "siyeon",
    title: "developer",
    mentors: [
        {
            name: "john",
            title: "senior developer",
        },
        {
            name: "bob",
            title: "senior developer",
        },
    ],
};
