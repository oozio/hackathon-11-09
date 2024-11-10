"use client";
import { promises as fs } from 'fs';
import * as path from "path";
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse'; // Import the papaparse library
import { ComposableMap, Geographies, ZoomableGroup, Marker, Geography, Graticule,Sphere  } from "react-simple-maps";
import ReactTooltip from "react-tooltip";

import { parse } from 'csv-parse';


const geoUrl = "/am24_subnat_em.topojson.json";

const csvFile = "/am24_spid.csv";

type SPIDRow = {
  code: string,
  rep_year: number,
  year: number,
  survname: string,
  data: string,
  data_group: string,
  lvlvar: string,
  byvar: string,
  vintage: string,
  sample: string,
  link: string,
  geo_code: string,
  survey_coverage: string,
  welfaretype: string,
  comparability: string,
  ref_year: number,
  mean2017: string,
  poor215: string,
  poor365: string,
  poor685: string,
  prosgap2017: string,
  gini: string,
  theil: string,
  geo_code2_new: string,
}

let csvData={}; 

function floatToColor(val: number): string {
  if (val < 0.1)
    {return "green"}
  else if (val < 0.2)
    {return "blue"}
  else if (val < 0.3)  
    {return "yellow"}
  else if (val < 0.4)
  {return "orange"}
  else if (val < 0.5)
  {return "pink"}
  else if (val < 0.6)
  { return "red"}
  else if (val < 1)
  { return "maroon"}
  return "transparent"
}

const AM24Geography: React.FC = () => {
  const headers = ['code', 'rep_year', 'year', 'survname', 'data', 'data_group', 'lvlvar', 'byvar', 'vintage', 'sample', 'link', 'geo_code', 'survey_coverage', 'welfaretype', 'comparability', 'ref_year', 'mean2017', 'poor215', 'poor365', 'poor685', 'prosgap2017', 'gini', 'theil', 'geo_code2_new'];


  const [csvData, setCsvData] = useState([]);
  
  // Fetch the CSV file from the public directory
  fetch('/am24_spid.csv')
  .then(response => response.text()) // Read the file as text
  .then(csvText => {
  // Parse the CSV content using PapaParse
  Papa.parse(csvText, {
  complete: (result) => {
  console.log('Parsed CSV result:', result);
  setCsvData(result.data); // Update the state with parsed data
  },
  header: true, // Optional: If the first row contains headers
  skipEmptyLines: true, // Optional: Skip empty lines
  });
  })
  .catch((error) => {
  console.error('Error fetching the CSV file:', error);
  });

  // Papa.parse(csvFile, {
  //   complete: (result: Papa.ParseResult<SPIDRow>) => {
  //     csvData[result.geocode] = result.mean2017;
  //   },
  //   header: true, // Treat the first row as headers
  //   skipEmptyLines: true, // Skip empty lines
  // });

  console.log(csvData);
  return (
      <Geographies 
          geography={geoUrl} 
      >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} fill="transparent" stroke="#000" strokeWidth={0.5}
              style={{
                default: { fill: floatToColor(csvData[geo.geo_code]) },
                hover: { fill: "blue"  },
                pressed: { fill: "#02A" },
              }}
              />
            ))
          }
        </Geographies>
  );
};

export default AM24Geography;
