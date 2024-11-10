import CsvUploader from "./CsvUploader";
import WorldMap from "./WorldMap";
import "./styles.css";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <CsvUploader />
      <div className="map-container" style={{flexGrow: "1"}}>
        <WorldMap />
      </div>
    </div>
  );
}
