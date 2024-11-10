"use client";
import React from "react";
import { ComposableMap, Geographies, ZoomableGroup, Marker, Geography, Graticule, Sphere } from "react-simple-maps";
import GLASODGeography from "./geographies/glasod"
import CountriesGeography from "./geographies/countries";
import GridGeography from "./geographies/GridGeography";
import ZoomButtons from "./ZoomButtons";

const geoUrl = "/countries.topojson.json";

const WorldMap: React.FC = () => {
  return (
    <div>
      <ZoomButtons />
      <ComposableMap projectionConfig={{ scale: 100 }} height={window.innerHeight * .7}>
        <ZoomableGroup>
          <Graticule stroke="#DDD" clipPath="url(#rsm-sphere)" suppressHydrationWarning />
          <Sphere stroke="#FF5533" strokeWidth={2} id="rsm-sphere" fill="transparent" />
          <CountriesGeography />
          <GLASODGeography />
          <GridGeography />
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
