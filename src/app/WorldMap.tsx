"use client";
import React from "react";
import { ComposableMap, Geographies, ZoomableGroup, Marker, Geography, Graticule,Sphere  } from "react-simple-maps";
import GLASODGeography from "./geographies/glasod"
import CountriesGeography from "./geographies/countries";

const geoUrl = "/countries.topojson.json";

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
        <CountriesGeography />
        <GLASODGeography />
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default WorldMap;
