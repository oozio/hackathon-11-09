import CsvUploader from "./CsvUploader";
import LayerSelection from "./LayerSelection";
import WorldMap from "./WorldMap";
import "./styles.css";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
      <CsvUploader />
      <LayerSelection />
      </div>
      <div className="map-container" style={{flexGrow: "1"}}>
        <WorldMap />
      </div>
    </div>
  );
}

