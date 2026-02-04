import { useJsApiLoader } from "@react-google-maps/api";

const lib = ["places"];

const useMapApiLoader = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: lib,
  });

  return isLoaded;
};

export default useMapApiLoader;
