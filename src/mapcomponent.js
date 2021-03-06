import React, {useState ,useEffect, useRef} from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle, withLeaflet, CircleMarker } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import * as styles from "./index.css"

import {MapLocations} from "./MapLocations"
import {Link} from 'react-router-dom';






const center=[35.5017, -73.5673]
function MapSearch () {
  const [currentLocation, setCurrentLocation] = React.useState([25.5017, -73.5673]);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => 
                        setCurrentLocation([position.coords.latitude, position.coords.longitude]))
        }
    },[]);

  
 return (
  <div>  

    <div>
    <input
        className="searchBar"
        placeholder={"Search Keyword"}    
    />
    <Link to="/MapSearch"> 
    <button  className="searchButton">Search</button> 
    </Link>


    </div>
   
  

    <MapContainer
    center={currentLocation} 
    zoom={3} 
    scrollWheelZoom={true}
    maxZoom={15} 
     >

      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={currentLocation}/>
     
     <MarkerClusterGroup>




 

		


		





  
  
    </MarkerClusterGroup>;
    </MapContainer>
   
 </div>

    );}
export default MapSearch

