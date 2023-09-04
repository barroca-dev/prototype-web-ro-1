import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
    projection="geoMercator"
    projectionConfig={{
      center: [-40, -10], // Ajusta el centro para una ubicación al sur de Buenos Aires
      scale: 300 // Ajusta el valor de escala según tus necesidades
    }}
    style={{height: "100%", width: "100%"}}
>

<Geographies
  geography="/path/to/south_america.json" // Reemplaza con el archivo GeoJSON de América del Sur
  fill="#16164a"
  stroke="#FFFFFF"
  strokeWidth={0.5}
>
  {({ geographies }) =>
    geographies.map((geo) => (
      <Geography key={geo.rsmKey} geography={geo} />
    ))
  }
</Geographies>
<Annotation
  subject={[-58.4173, -34.6118]} // Coordenadas para Buenos Aires
  dx={100}
  dy={-50}
  connectorProps={{
    stroke: "#ffffff",
    strokeWidth: 2,
    strokeLinecap: "round"
  }}
>
  <text x="100" textAnchor="end" alignmentBaseline="middle" fill="#ffffff">
    {"Buenos Aires"}
  </text>
</Annotation>

    </ComposableMap>
  );
};

export default MapChart;
