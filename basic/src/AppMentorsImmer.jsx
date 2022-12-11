import React, { useEffect, useReducer, useState } from "react";
import { useImmer } from "use-immer";

const AppMentorsImmer = () => {
    const [person, updatePerson] = useImmer(initialPerson);

    const handleAdd = () => {
        const name = prompt(`追加したいエルダーの名前は何でしょうか？`);
        const title = prompt(`追加したエルダーの職種は何でしょうか？`);
        updatePerson((person) => {
            person.mentors.push({ name, title });
        });
    };
    const handledelete = () => {
        const name = prompt(`削除したいエルダーの名前は何でしょうか？`);
        updatePerson((person) => {
            const index = person.mentors.findIndex((m) => m.name === name);
            console.log(index, person);
            person.mentors.splice(index, 1);
        });
    };
    const handleUpdate = () => {
        const prev = prompt(`誰の名前を変えたいんですか？`);
        const current = prompt(`名前を何にしますか？`);
        updatePerson((person) => {
            const mentor = person.mentors.find((m) => m.name === prev);
            mentor.name = current;
        });
    };

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
            <button onClick={handleUpdate}>エルダーの名前を変える</button>
            <button onClick={handleAdd}>エルダー追加</button>
            <button onClick={handledelete}>エルダー削除</button>
        </div>
    );
};

export default AppMentorsImmer;

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
