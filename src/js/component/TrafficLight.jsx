import React, { useState } from 'react';
import '../../styles/index.css'; 

export const TrafficLight = () => { 
    const [color, setColor] = useState("red");

    const cycleColor = () => {
        const colorMap = {
            red: "green",
            green: "yellow",
            yellow: "red"
        };
        setColor(prevColor => colorMap[prevColor]);
    };

    return (
        <div className="container">
            <div className="trafficTop"></div>
            <div className="trafficLight">
                <div 
                    className={`light red ${color === "red" ? "selected" : ""}`} 
                    onClick={() => setColor("red")}
                ></div>
                <div 
                    className={`light yellow ${color === "yellow" ? "selected" : ""}`} 
                    onClick={() => setColor("yellow")}
                ></div>
                <div 
                    className={`light green ${color === "green" ? "selected" : ""}`} 
                    onClick={() => setColor("green")}
                ></div>
            </div>
            <button onClick={cycleColor}>Click!</button>
        </div>
    );
};