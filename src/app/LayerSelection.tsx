import React from "react";
import "./styles.css";

const LayerSelection: React.FC = () => {
    return (
        <div className="layer-selection">
            <label>
                <input type="checkbox" />
                Countries
            </label>
            <label>
                <input type="checkbox" />
                GLASOD
            </label>
            <label>
                <input type="checkbox" />
                Grid
            </label>
        </div>
    );
};

export default LayerSelection;