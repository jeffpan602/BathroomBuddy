import axios from 'axios';


export const getPlacesData = async () => {
    // try making an API request to local server
    try{
        const URL = 'http://127.0.0.1:8000/api/location/';
        const { data } = await axios.get(URL);
       return data;
    } catch(error) {

        console.error(error);

        console.warn(" -- TEST DATA // BAD API REQ -- ")
        return [
            {
                name:'place1',
                loc:'123',
            },
            {
                name:'place2',
                loc:'123',
            },
            {
                name:'place3',
                loc:'123',
            },
        ];

    }
}