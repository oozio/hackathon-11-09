import React from "react";
import "./styles.css";

const ZoomButtons: React.FC = () => {
    return (
        <div className="button-container">
            <div className="button">
                <svg stroke="#FFF" strokeWidth="3" viewBox="0 0 20 20" height="1em" width="1em" >
                    <line x1="10" y1="0" x2="10" y2="20" />
                    <line x1="0" y1="10" x2="20" y2="10" />
                </svg>
            </div>
            <div className="button">
                <svg stroke="#FFF" strokeWidth="3" viewBox="0 0 20 20" height="1em" width="1em" >
                    <line x1="0" y1="10" x2="20" y2="10" />
                </svg>
            </div>
        </div>
    );
};


export default ZoomButtons;