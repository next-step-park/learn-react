import React, { useState, useEffect } from "react";
import "./AppXY.css";

export default function AppXY() {
    const [mousePos, setMousePos] = useState({});

    useEffect(() => {
        const handleMouseMove = ({ clientX, clientY }) => {
            setMousePos({ clientX, clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="container">
            <div
                className="pointer"
                style={{
                    transform: `translate(${mousePos.clientX}px, ${mousePos.clientY}px)`,
                }}
            />
            <div>
                {mousePos.clientX},{mousePos.clientY}
            </div>
        </div>
    );
}
