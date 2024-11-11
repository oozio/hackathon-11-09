import React from "react";
import { LayerType } from "./page";
import "./styles.css";

interface Props {
    checkedLayers: LayerType[],
    onLayerChecked: (layer: LayerType) => void,
}

const LayerSelection: React.FC<Props> = ({checkedLayers, onLayerChecked}) => {
    return (
        <div className="layer-selection">
            <label>
                <input type="checkbox"
                checked={checkedLayers.includes(LayerType.Countries)}
                onChange={() => onLayerChecked(LayerType.Countries)}/>
                Countries
            </label>
            <label>
                <input type="checkbox"
                checked={checkedLayers.includes(LayerType.GLASOD)}
                onChange={() => onLayerChecked(LayerType.GLASOD)}/>
                GLASOD
            </label>
            <label>
                <input type="checkbox"
                checked={checkedLayers.includes(LayerType.Grid)}
                onChange={() => onLayerChecked(LayerType.Grid)}/>
                Grid
            </label>
        </div>
    );
};

export default LayerSelection;