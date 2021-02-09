import { useEffect, useState } from 'react';
import './App.css';
import Nasa from './components/Nasa';
import Navbar from './components/Navbar';
function App() {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 })
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
  return (
    <div className="App">
      <Navbar />
      {location.latitude}
      {location.longitude}
      <Nasa long={location.longitude} lat={location.latitude} />
    </div>
  );
}
export default App;