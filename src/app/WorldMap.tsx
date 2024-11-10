"use client";
import React from "react";
import { ComposableMap, Geographies, ZoomableGroup, Marker, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const WorldMap: React.FC = () => {
  return (
    <ComposableMap 
          projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -53.0, 0],
        // scale: 1200
      }}
      >
      <ZoomableGroup
        // center={[0, 0]} zoom={10}
        >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Marker coordinates={[0, 0]}>
            <circle r={3} fill="#FF5533" />
          </Marker>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default WorldMap;
