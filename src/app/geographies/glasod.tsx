"use client";
import React from "react";
import { ComposableMap, Geographies, ZoomableGroup, Marker, Geography, Graticule,Sphere  } from "react-simple-maps";

const geoUrl = "/GLASOD.topojson.json";

const strokeWidth = 0.1;
const sevColors = {
  0: "green",
  1: "yellow",
  2: "orange",
  3: "red",
  4: "maroon"
}

const GLASODGeography: React.FC = () => {
  return (
        <Geographies geography={geoUrl} >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} fill="transparent" stroke="#000" strokeWidth={0.1}   
              style={{
                default: { fill: sevColors[geo.properties.SEVERITY] },
                hover: { fill: "blue"  },
                pressed: { fill: "#02A" },
              }}
              />
            ))
          }
        </Geographies>
  );
};

export default GLASODGeography;
