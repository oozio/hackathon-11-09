"use client";
import React from "react";
import { Geographies, Geography } from "react-simple-maps";

const geoUrl = "/grid.json";

const GridGeography: React.FC = () => {
    return (
        <Geographies geography={geoUrl} >
            {({ geographies }) =>
                geographies.map((geo) => (
                    <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#0F0"
                        stroke="#000"
                        strokeWidth={0.5}
                    />
                ))
            }
        </Geographies>
    );
};

export default GridGeography;