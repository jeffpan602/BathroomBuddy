import { useState, useEffect } from 'react'
import { CssBaseline, Grid } from '@material-ui/core';


import { getPlacesData } from './api';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import SettingsMenu from './components/SettingsMenu/SettingsMenu'
import './App.css'

function App() {
  
  const [places, setPlaces] = useState([]);

  // side menu
  const [showSideMenu, setShowSideMenu] = useState(true);
  const toggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  }

  // settings menu
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const toggleSettingsMenu = () => {
    setShowSettingsMenu(!showSettingsMenu);
  }

  useEffect(() => {
    getPlacesData().then((data) => {
      setPlaces(data)
    });
  },[]);

  return (
    <div className="App">
      <CssBaseline />

      <Header 
        toggleSideMenu = {toggleSideMenu} 
        toggleSettingsMenu = {toggleSettingsMenu}
      />

      {/* toggle settings menu */}
      { showSettingsMenu ?
        <SettingsMenu
          toggleSettingsMenu = {toggleSettingsMenu}
        />
        : <></>
      }
      


      <Grid container spacing={3}>

        {/* toggle side menu */}
        { showSideMenu ?
          <Grid item xs={12} md={4}>
            <h1 >Places Data </h1>
            <p> { places.map( (place) => place.name + " " ) } </p>
          </Grid>
          : <></>
        }

        <Grid item xs={showSideMenu?8:12} >
          <Map />
        </Grid>

      </Grid> 


    </div>
  )
}

export default App;
