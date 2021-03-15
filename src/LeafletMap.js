import React from 'react';
import { Map, MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './LeafletMap.css';

function LeafletMap({ mapCenter }) {
    return (
        <div className="leafletMap">
            <MapContainer center={mapCenter} zoom={3}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {/* <Marker position={[51.505, -0.09]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker> */}
                </MapContainer>
        </div>
    )
}

export default LeafletMap;
