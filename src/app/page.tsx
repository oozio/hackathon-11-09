import CsvUploader from "./CsvUploader";
import WorldMap from "./WorldMap";

export default function Home() {
  return (
      <div>
        <div>
          <CsvUploader />
        </div>
        <div style={{maxWidth: "85%", marginLeft: "auto", marginRight: "auto"}}>
          <WorldMap />
      </div>
    </div>
  );
}
