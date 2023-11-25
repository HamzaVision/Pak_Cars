import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = ({ onLocationChange }) => {
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState({ lat: 31.5799, lng: 74.3563 });
  // const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition({ lat: latitude, lng: longitude });
          onLocationChange({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [onLocationChange]);

  const onLoad = (map) => {
    setMap(map);
  };

  const handleClick = (event) => {
    const { latLng } = event;
    const latitude = latLng.lat();
    const longitude = latLng.lng();

    setPosition({ lat: latitude, lng: longitude });
    onLocationChange({ lat: latitude, lng: longitude });
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDEhr2LJnyoNt6wO5JUraz27F04PowVhzQ">
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "350px",
          borderRadius: "10px",
        }}
        zoom={15}
        center={position}
        onClick={handleClick}
        onLoad={onLoad}
      >
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
