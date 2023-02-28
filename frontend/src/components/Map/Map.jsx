import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';

import useClasses from './styles';

const Map = () => { 
    const classes = useClasses();

    const isDesktop = useMediaQuery('(min-width:600px)');
    const options = {
        mapTypeId: "satellite",
        tilt:0,
    }

    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key:import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY }}
                defaultCenter={{lat:41.5103132,lng:-81.6040477}}
                center = {{lat:41.5103132,lng:-81.6040477}}
                defaultZoom={16}
                options={options}
            >
            
            </GoogleMapReact>
        </div>
    );
}

export default Map;
