import { useState, useEffect } from 'react'
import { CssBaseline, Grid } from '@material-ui/core';

import { getPlacesData } from './api';
import Header from './components/Header/Header';

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
      <Grid container spacing={3} style={{width:'100%'}}>
        <Grid item xs={12} md={4}>
          <h1>Places Data </h1>
          <p> { places.map( (place) => place.name + " " ) } </p>
        </Grid>
        <Grid item xs={8} >
          <Map />
        </Grid>
      </Grid> 

    </div>
  )
}

export default App;
