import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import './LeafletMap.css';
import { buildMapData } from './util';
import numeral from 'numeral';

function LeafletMap({mapCenter, zoom, casesType, allCountriesData, worldwideData }) {
    const [mapData, setMapData] = useState([]);
    useEffect(() => {
        setMapData(buildMapData( allCountriesData, worldwideData, casesType))
    }, [allCountriesData, worldwideData, casesType])
    let color;
    switch (casesType) {
        case 'cases':
            color = 'rgb(255, 187, 0)'
            break;
        case 'deaths':
            color = 'rgb(255, 0, 0)'
            break;
        case 'recovered':
            color = 'rgb(9, 255, 0)'
            break;
        default:
            break;
    }
    allCountriesData.length && console.log(allCountriesData);
    return (
        <div className="leafletMap">
            <MapContainer center={mapCenter} zoom={zoom}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        mapData.map(item => (
                        <CircleMarker
                            key={item.country}
                            center={[item.lat, item.long]}
                            pathOptions={{ color: color }}
                            radius={item.radius}
                        >
                            <Popup>
                                <img src={item.flag} alt={item.country} />
                                <h2>{item.country}</h2>
                                <p>Cases: <strong>{numeral(item.cases).format('0,0') }</strong></p>
                                <p>Recovered: <strong>{numeral(item.recovered).format('0,0') }</strong> </p>
                                <p>Deaths: <strong>{numeral(item.deaths).format('0,0') }</strong> </p>
                            </Popup>
                        </CircleMarker>
                            )
                        )
                    }
                </MapContainer>
        </div>
    )
}

export default LeafletMap;
