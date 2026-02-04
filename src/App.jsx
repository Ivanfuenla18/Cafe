import React from "react";
import MapContainer from "./components/MapContainer.jsx";

function App() {
  return (
    <>
      <h3 className="titleRestaurant">Restaurantes cercanas a tu ubicación</h3>

      <MapContainer />
    </>
  );
}

export default App;
