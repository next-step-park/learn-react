import React from "react";

export default function AppCard() {
    return (
        <div>
            <Card>
                <h1>Card1</h1>
                <p>Hello</p>
            </Card>
            <Card>
                <h2>Card2</h2>
                <p>World</p>
            </Card>
        </div>
    );
}

function Card({ children }) {
    return (
        <div
            style={{
                backgroundColor: "black",
                borderRadius: "20px",
                color: "white",
                minHeight: "200px",
                maxWidth: "200px",
                margin: "1rem",
                padding: "1rem",
                textAlign: "center",
            }}
        >
            {children}
        </div>
    );
}
