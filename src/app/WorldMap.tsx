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
              <Geography key={geo.rsmKey} geography={geo} fill="transparent" stroke="#000" strokeWidth={0.1}   style={{
                default: { fill: sevColors[geo.properties.SEVERITY] },
                hover: { fill: "blue"  },
                pressed: { fill: "#02A" },
              }}/>
            ))
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default WorldMap;
