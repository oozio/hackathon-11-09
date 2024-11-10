"use client";
import React from "react";
import { ComposableMap, Geographies, ZoomableGroup, Marker, Geography, Graticule,Sphere  } from "react-simple-maps";
import ReactTooltip from "react-tooltip";
const geoUrl = "/countries.topojson.json";


const CountriesGeography: React.FC = () => {
  return (
      <Geographies 
          geography={geoUrl} 
      >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} fill="transparent" stroke="#000" strokeWidth={0.5}
              />
            ))
          }
        </Geographies>
  );
};

export default CountriesGeography;
