"use client";
import React from "react";
import { Geographies, Geography, Annotation } from "react-simple-maps";

const geoUrl = "/grid.json";

const GridGeography: React.FC = () => {
    return (
        <Geographies geography={geoUrl} >
            {({ geographies }) =>
                geographies.map((geo) => (
                    <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        // fill="#0F0"
                        fill = "transparent"
                        stroke="#000"
                        strokeWidth={0.05}
                    />
                ))
            }
        </Geographies>
    );
};

export default GridGeography;