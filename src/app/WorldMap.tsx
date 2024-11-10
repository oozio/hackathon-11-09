"use client";
import React from "react";
import { ComposableMap, Geographies, ZoomableGroup, Marker, Geography, Graticule,Sphere  } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const strokeWidth = 0.1;

const WorldMap: React.FC = () => {
  return (
    <ComposableMap 
      // projection="geoOrthographic"
      projectionConfig={{
        // rotate: [-10.0, -53.0, 0],
        // scale: 1200
        scale: 150
      }}
    >
      <ZoomableGroup
        // center={[0, 0]} zoom={10}
      >
        <Graticule stroke="#DDD" clipPath="url(#rsm-sphere)" suppressHydrationWarning/>
        <Sphere stroke="#FF5533" strokeWidth={2} id="rsm-sphere" fill="transparent"/>
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
              <Geography key={geo.rsmKey} geography={geo} fill="transparent" stroke="#000" strokeWidth={0.1}/>
            ))
          }
        </Geographies>
        <Geographies 
          geography={"/grid.json"}
      >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} fill="#0F0" stroke="#000" strokeWidth={0.1}/>
            ))
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default WorldMap;
