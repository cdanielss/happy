import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import mapMarker from '../images/map-marker.svg';
import '../styles/pages/orphanagesMap.css';
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;    
}

function OrphanagesMap () {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect( () => {
        api.get('/orphanages').then(response => {
            setOrphanages(response.data);
        });
    }, []);
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

                {orphanages.map(orphanage => {
                    return (
                        <Marker
                            icon={mapIcon}
                            position={[orphanage.latitude, orphanage.longitude]}
                            key={orphanage.id}
                        >
                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                            {orphanage.name}
                            <Link to={`/orphanages/${orphanage.id}`}>
                                <FiArrowRight size={20} color="#FFF"/>
                            </Link>
                        </Popup>
                </Marker>
                    )
                })}
            </Map>


            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF"  />
            </Link>
        </div>
    );
}

export default OrphanagesMap;