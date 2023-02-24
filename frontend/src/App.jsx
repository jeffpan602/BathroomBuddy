import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'

import { getPlacesData } from './api';

function App() {
  const [places, setPlaces] = useState([]);
  
  useEffect(() => {
    getPlacesData().then((data) => {
      setPlaces(data)
    });
  },[]);

  return (
    <div className="App">
      <CssBaseline />
      <Header />

      <h1>Bathroom Buddy</h1>
      <p>{places.map((place) => place.name + " " )}</p>
      
    </div>
  )
}

export default App
