import { height } from '@mui/system'
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {useState} from 'react';

export default function Map(props) {
      console.log(props.lati);
     console.log(props.longi);
     let x=props.lati;
     let y=props.longi;

    const[position,setposition]= useState([x,y])
     


    
    // const position = [26.5123, 80.2329]
    // if(lati!=='' && longi!==''){ position = [lati,longi]}
  // else{position = [26.5123, 80.2329]}
  

  return (
    <MapContainer style={{height:"100%",width: "100%"}} center={position} zoom={5} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          { x } and  {y}
        </Popup>
      </Marker>
    </MapContainer>
  )
}
