import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Кастомная иконка (иначе маркер будет пустым)
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
});

const Map = () => {
  // Объявляем координаты прямо в компоненте
  const position = [41.298653, 69.271454]; // Ташкент

  return (

    
    <MapContainer
      center={position}
      zoom={12}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position} icon={customIcon}>
        <Popup>Toshkent, Shahrisabz 5-tor ko'chasi</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;