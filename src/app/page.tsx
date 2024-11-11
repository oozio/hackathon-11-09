"use client";
import React, { useState } from "react";
import CsvUploader from "./CsvUploader";
import LayerSelection from "./LayerSelection";
import WorldMap from "./WorldMap";
import "./styles.css";

export enum LayerType {
  Countries = "countries",
  GLASOD = "glasod",
  Grid = "grid",
}

export default function Home() {
  const [visibleLayers, setVisibleLayers] = useState([LayerType.Countries, LayerType.GLASOD]);

  function onLayerChecked(layer: LayerType) {
    const index = visibleLayers.findIndex((value, _index, _obj) => value == layer)
    if (index == -1) {
      setVisibleLayers(visibleLayers.concat([layer]))
    } else {
      setVisibleLayers(visibleLayers.filter((value, _index, _obj) => value != layer))
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <CsvUploader />
        <LayerSelection
          checkedLayers={visibleLayers}
          onLayerChecked={onLayerChecked}/>
      </div>
      <div className="map-container" style={{ flexGrow: "1" }}>
        <WorldMap layers={visibleLayers} />
      </div>
    </div>
  );
}

