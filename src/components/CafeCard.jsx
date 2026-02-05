import { useNavigate } from "react-router-dom";

const CafeCard = ({ data }) => {
  const navigate = useNavigate();

  // Generamos la URL de la foto una sola vez
  const photoUrl =
    data.photos && data.photos.length > 0
      ? data.photos[0].getURI({ maxWidth: 400, maxHeight: 300 })
      : "https://via.placeholder.com/400x300?text=Sin+Foto";

  const goToDetails = () => {
    // IMPORTANTE: Extraemos solo datos planos para evitar errores de History API
    const cleanData = {
      id: data.id,
      name:
        typeof data.displayName === "object"
          ? data.displayName.text
          : data.displayName,
      rating: data.rating,
      photo: photoUrl,
      // Convertimos las funciones .lat() y .lng() en números simples
      location: {
        lat: data.location.lat(),
        lng: data.location.lng(),
      },
      address: data.shortFormattedAddress || "Dirección no disponible",
    };

    navigate("/detalles", { state: { cafe: cleanData } });
  };

  return (
    <div
      onClick={goToDetails}
      className="cafeCard"
      style={{ cursor: "pointer" }}
    >
      <h4>
        {typeof data.displayName === "object"
          ? data.displayName.text
          : data.displayName}
      </h4>
      <img
        src={photoUrl}
        alt="Café"
        style={{
          width: "100%",
          height: "200px",
          borderRadius: "8px",
          objectFit: "cover",
        }}
      />
      {data.rating && <p>Rating: {data.rating}⭐</p>}
    </div>
  );
};

export default CafeCard;
