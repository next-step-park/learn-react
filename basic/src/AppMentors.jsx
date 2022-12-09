import React, { useEffect, useState } from "react";

const AppMentors = () => {
    const [person, setPerson] = useState(initialPerson);
    const handleAdd = () => {
        const name = prompt(`追加したいエルダーの名前は何でしょうか？`);
        const title = prompt(`追加したエルダーの職種は何でしょうか？`);

        setPerson((person) => ({
            ...person,
            mentors: [...person.mentors, { name, title }],
        }));
    };
    const handledelete = () => {
        const name = prompt(`削除したいエルダーの名前は何でしょうか？`);

        setPerson((person) => ({
            ...person,
            mentors: person.mentors.filter((m) => m.name !== name),
        }));
    };
    const handleUpdate = () => {
        const prev = prompt(`誰の名前を変えたいんですか？`);
        const current = prompt(`名前を何にしますか？`);

        setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
                if (mentor.name === prev) {
                    return { ...mentor, name: current };
                }
                return mentor;
            }),
        }));
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

export default AppMentors;

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
