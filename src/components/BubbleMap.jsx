// BubbleMap.jsx
import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const BubbleMap = () => {
  // Updated dummy data for articles per region
  const dummyData = [
    { name: 'Tunis', lat: 36.8065, lng: 10.1815, articleCount: 75 },
    { name: 'Sfax', lat: 34.7385, lng: 10.7415, articleCount: 30 },
    { name: 'Sousse', lat: 35.8256, lng: 10.6360, articleCount: 50 },
    { name: 'Gabes', lat: 33.8815, lng: 10.0982, articleCount: 20 },
    { name: 'Bizerte', lat: 37.2746, lng: 9.8739, articleCount: 15 },
    { name: 'Kairouan', lat: 35.6769, lng: 10.1017, articleCount: 40 },
    { name: 'Tozeur', lat: 33.9197, lng: 8.1335, articleCount: 10 },
    { name: 'Gafsa', lat: 34.4250, lng: 8.7842, articleCount: 25 },
    { name: 'Monastir', lat: 35.7643, lng: 10.8113, articleCount: 35 }
    // Add more regions if needed
  ];

  const getRadius = (articleCount) => {
    return articleCount > 0 ? Math.sqrt(articleCount) * 5 : 5;
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-cyan-800">Articles per Region</h3>
      <MapContainer
        center={[34.0, 9.0]}
        zoom={6}
        style={{ height: '500px', width: '100%', borderRadius: '12px', overflow: 'hidden' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {dummyData.map((region, index) => (
          <CircleMarker
            key={index}
            center={[region.lat, region.lng]}
            radius={getRadius(region.articleCount)}
            fillColor="#007bff"
            color="#007bff"
            fillOpacity={0.6}
            stroke={false}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={1}>
              <span>{`${region.name}: ${region.articleCount} articles`}</span>
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BubbleMap;
