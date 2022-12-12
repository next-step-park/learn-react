import React from "react";

export default function AppWrap() {
    return (
        <div>
            <Navbar>
                <Avatar
                    image="https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    name="profile"
                    size="200"
                />
            </Navbar>
            <Navbar>
                <p>hello</p>
            </Navbar>
        </div>
    );
}

function Navbar({ children }) {
    return <header style={{ backgroundColor: "yellow" }}>{children}</header>;
}

function Avatar({ image, name, size }) {
    return (
        <div>
            <img
                src={image}
                alt={`${name}`}
                width={size}
                height={size}
                style={{ borderRadius: "50%" }}
            />
        </div>
    );
}
