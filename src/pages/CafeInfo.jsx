import { useLocation, useNavigate } from "react-router-dom";

const CafeInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cafe } = location.state || {};

  if (!cafe) {
    return (
      <div style={{ color: "white", textAlign: "center", padding: "50px" }}>
        <p>No se encontraron detalles.</p>
        <button className="btn-back" onClick={() => navigate("/")}>
          Volver al inicio
        </button>
      </div>
    );
  }

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${cafe.location.lat},${cafe.location.lng}&query_place_id=${cafe.id}`;

  return (
    <div className="cafeInfoPage">
      <button className="btn-back" onClick={() => navigate("/")}>
        ⬅ Volver
      </button>

      <div className="info-container">
        <img src={cafe.photo} alt={cafe.name} className="info-image" />

        <div className="info-content">
          <h1>{cafe.name}</h1>
          <div className="rating-badge">⭐ {cafe.rating || "N/A"}</div>
          <p className="address-text">📍 {cafe.address}</p>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-route"
          >
            ¿CÓMO LLEGAR?
          </a>
        </div>
      </div>
    </div>
  );
};

export default CafeInfo;
