import React, {useState ,useEffect, useRef} from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle, withLeaflet, CircleMarker } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import * as styles from "./index.css"

import {MapLocations} from "./MapLocations"
import {Link} from 'react-router-dom';






const center=[35.5017, -73.5673]
function Map () {
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

    <button  className="searchButton">Search</button> 


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




 <Marker position={[49.8397, 24.0297]} />
  <Marker position={[52.2297, 21.0122]} />
  <Marker position={[51.5074, -0.0901]} />
  <Marker position={[-10.12652,153.48772]} /> 
  <Marker position={[33.07022,100.00903]} />

  <Marker position={[-37.54467, -63.01127]} />
  <Marker position={[ -4.79535, -44.75474]} />
  <Marker position={[2.39856, -73.87170]} />
  <Marker position={[ 32.53907, 14.66005]} /> 
  <Marker position={[6.50173,26.98844]} />
  <Marker position={[-20.26772,-62.09505]} />

  <Marker position={[38.30894, -89.12856]} />
  <Marker position={[ -1.89520,  112.72442]} />
  <Marker position={[-18.51396,  -61.42421]} />
  <Marker position={[  18.31290, 77.28654]} /> 
  <Marker position={[10.84357,16.71715]} />
  <Marker position={[ -7.33588,50.18312]} /> 

	
<Marker position={[7.0605998,8.8469761]}/>	

		


		





  
  
    </MarkerClusterGroup>;
    </MapContainer>
   
 </div>

    );}
export default Map

