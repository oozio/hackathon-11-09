"use client";
import React, { useEffect, useState, createRef } from "react";
import { ComposableMap, Geographies } from "react-simple-maps";
import { State, StateLink } from "./USAMap.style";


const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

enum KeyCode {
  ARROW_RIGHT = 39,
  ARROW_LEFT = 37
}

const findAnchorById = (anchorElementId: string) =>
  document.querySelector<HTMLAnchorElement>(anchorElementId);

const USAMap: React.FC = () => {
  const [stateIndex, setStateIndex] = useState(-1);
  const [listenToKeyboard, setListenToKeyboard] = useState(false);


  return (
    <div
      tabIndex={0}
      onFocus={() => setListenToKeyboard(true)}

    >
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl} key="states">
          {({ geographies }) =>
            geographies.map((geo) => (
              <State
                id={`state-hidden-${geo.id}`}
                key={geo.rsmKey}
                tabIndex={-1}
                geography={geo}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default USAMap;
