"use client"
import React, { useState } from 'react';
import Papa from 'papaparse'; // Import the papaparse library

// Define the type for the CSV data you are expecting
interface CsvData {
  [key: string]: string;
}

const CsvUploader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [csvData, setCsvData] = useState<CsvData[]>([]); // Store parsed CSV data

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      parseCSV(selectedFile);
    }
  };

  // Parse the selected CSV file using PapaParse
  const parseCSV = (file: File) => {
    Papa.parse(file, {
      complete: (result) => {
        console.log('Parsed CSV result:', result); // Log the parsed CSV data
        setCsvData(result.data as CsvData[]); // Save parsed data to state
      },
      header: true, // Treat the first row as headers
      skipEmptyLines: true, // Skip empty lines
    });
  };

  return (
    <div>
      <h2>Upload CSV File</h2>
      {/* File input */}
      <input type="file" accept=".csv" onChange={handleFileChange} />

      {file && (
        <div>
          <h3>Uploaded File: {file.name}</h3>
          <p>File size: {(file.size / 1024).toFixed(2)} KB</p>
        </div>
      )}

      <h3>Parsed CSV Data</h3>
      <table border="1">
        <thead>
          <tr>
            {csvData.length > 0 && Object.keys(csvData[0]).map((key) => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {csvData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CsvUploader;

