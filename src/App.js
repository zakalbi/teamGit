import { useEffect, useState } from 'react';
import './App.css';

import Nasa from './components/Nasa';
import Navbar from './components/Navbar';

function App() {
  const [location, setLocation] = useState ({latitude: 0, longitude: 0})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setLocation(
        {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      );
    })
  }, [])
  return(
    <div className="App">
      <Navbar />
      TEAM 'LOST IN SPACE'
      <br/>
      {location.latitude}
      {location.longitude}
      <Nasa long={location.longitude} lat={location.latitude} />
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Navbar from './components/Navbar'
// import NASA from './components/Nasa';

// function App() {
//   const [latitude, setLatitude] = useState()
//   const [longitude, setLongitude] = useState()
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       setLatitude(position.coords.latitude);
//       setLongitude(position.coords.longitude);
//     })
//   }, [])
//   return (
//     <div className="App">
//       <Navbar />
//       <NASA lon={longitude} lat={latitude} />+
//       <h1>Develop</h1>
//       <h1>Tara</h1>
//       <h1>Tara 2</h1>
//       <h1> Thomas</h1>
//       <h1>Zak</h1>
//     </div>
//   )
// }

