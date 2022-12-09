import React, { useState, useEffect } from "react";
import "./AppXY.css";

export default function AppXY() {
    const [mousePos, setMousePos] = useState({});

    return (
        <div
            className="container"
            onPointerMove={(e) => {
                setMousePos({ x: e.clientX, y: e.clientY });
            }}
        >
            <div
                className="pointer"
                style={{
                    transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                }}
            />
            <div>
                {mousePos.clientX},{mousePos.clientY}
            </div>
        </div>
    );
}
