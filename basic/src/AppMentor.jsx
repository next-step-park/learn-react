import React, { useState } from "react";

export default function AppMentor() {
    const [person, setPerson] = useState({
        name: "siyeon",
        title: "developer",
        mentor: {
            name: "john",
            title: "senior developer",
        },
    });
    return (
        <div>
            <h1>
                {person.name}は {person.title}
            </h1>
            <p>
                {person.name}のエルダーは{person.mentor.name} (
                {person.mentor.title})
            </p>
            <button
                onClick={() => {
                    const name = prompt(`What's your mentor's name?`);
                    setPerson((person) => ({
                        ...person,
                        mentor: { ...person.mentor, name },
                    }));
                }}
            >
                エルダーの名前を変える
            </button>

            <button
                onClick={() => {
                    const title = prompt(`What's your mentor's title?`);
                    setPerson((prev) => ({
                        ...prev,
                        mentor: { ...prev.mentor, title },
                    }));
                }}
            >
                エルダーのタイトルを変える
            </button>
        </div>
    );
}
