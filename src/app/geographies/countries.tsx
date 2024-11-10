"use client";
import React from "react";
import { ComposableMap, Geographies, ZoomableGroup, Marker, Geography, Graticule,Sphere  } from "react-simple-maps";

const geoUrl = "/countries.topojson.json";


const CountriesGeography: React.FC = () => {
  return (
      <Geographies 
          geography={geoUrl} 
          
          parseGeographies={(geos) => {
            return geos.map((g) => {
              // Process geographies here...
              console.log(g)
              return g
            })
          }}
      >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} fill="transparent" stroke="#000" strokeWidth={0.1}
              />
            ))
          }
        </Geographies>
  );
};

export default CountriesGeography;
