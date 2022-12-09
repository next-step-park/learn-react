import React, { useEffect, useState } from "react";

const AppMentors = () => {
    const [person, setPerson] = useState({
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
    });

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
            <button
                onClick={() => {
                    const prev = prompt(`誰の名前を変えたいんですか？`);
                    const current = prompt(`名前を何にしますか？`);

                    if (prev)
                        setPerson((person) => ({
                            ...person,
                            mentors: person.mentors.map((mentor) => {
                                if (mentor.name === prev) {
                                    return { ...mentor, name: current };
                                }
                                return mentor;
                            }),
                        }));
                }}
            >
                エルダーの名前を変える
            </button>
        </div>
    );
};

export default AppMentors;
