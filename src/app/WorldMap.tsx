"use client";
import React, {useState} from "react";
import { ComposableMap, Geographies, ZoomableGroup, Marker, Geography, Graticule, Sphere } from "react-simple-maps";
import GLASODGeography from "./geographies/glasod"
import CountriesGeography from "./geographies/countries";
import GridGeography from "./geographies/GridGeography";
import ZoomButtons from "./ZoomButtons";

const geoUrl = "/countries.topojson.json";

interface Position {
  coordinates: [number, number];
  zoom: number;
}

const ZOOM_FACTOR = 1.5;

const WorldMap: React.FC = () => {
  const [zoom, setZoom] = useState(1);
  const [coordinates, setCoordinates] = useState<[number, number]>([0.0, 0.0]);

  function onZoomIn() {
    setZoom(zoom * ZOOM_FACTOR);
  }

  function onZoomOut() {
    setZoom(zoom / ZOOM_FACTOR);
  }

  function onMoveEnd(position: Position) {
    setCoordinates(position.coordinates);
    setZoom(position.zoom);
  }

  return (
    <div>
      <ZoomButtons onZoomIn={onZoomIn} onZoomOut={onZoomOut} />
      <ComposableMap projectionConfig={{ scale: 120 }} height={window.innerHeight * .7}>
        <ZoomableGroup zoom={zoom} center={coordinates} onMoveEnd={onMoveEnd}>
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
