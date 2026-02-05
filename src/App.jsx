import { Routes, Route } from "react-router-dom";
import CafeInfo from "./pages/CafeInfo.jsx";
import MapContainer from "./components/MapContainer.jsx";
import { useState } from "react";
import CafeCard from "./components/CafeCard.jsx";

function App() {
  const [restaurantes, setRestaurantes] = useState([]);
  return (
    <Routes>
      {/* RUTA PRINCIPAL (Lo que ya tienes) */}
      <Route
        path="/"
        element={
          <>
            <h3 className="titleRestaurant">Cafeterias cercanas</h3>
            <div className="cardsContainer">
              {restaurantes.map((item, index) => (
                <CafeCard key={item.id || index} data={item} />
              ))}
            </div>
            <h3 className="titleRestaurant">Tu ubicacíon actual</h3>
            <MapContainer onPlacesLoaded={setRestaurantes} />
          </>
        }
      />

      {/* RUTA DE DETALLES */}
      <Route path="/detalles" element={<CafeInfo />} />
    </Routes>
  );
}

export default App;
