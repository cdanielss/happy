import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import mapMarker from '../images/map-marker.svg';
import '../styles/pages/orphanagesMap.css';
import Leaflet from 'leaflet';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarker,
    iconSize: [48, 68],
    iconAnchor: [24, 68],
    popupAnchor: [170, 2]
})

function OrphanagesMap () {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="Logo" />
                    <h2>Escolha um orfanato no Mapa</h2>
                    <p>Muitas crianças estão esperando sua visita</p>
                </header>
                <footer>
                    <strong>Rio do Sul</strong>
                    <span>Santa Catarina</span>
                </footer>
            </aside>
            
            <Map 
                center={[-27.2092052,-49.6401092]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Marker
                    icon={mapIcon}
                    position={[-27.2092052,-49.6401092]}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar das meninas
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                    </Popup>
                </Marker>
            </Map>


            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF"  />
            </Link>
        </div>
    );
}

export default OrphanagesMap;