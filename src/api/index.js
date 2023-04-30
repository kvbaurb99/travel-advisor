import axios from "axios";


const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


  export const getData = async (sw, ne) => {
    try {
        const response = await axios.get(URL, {
                params: {
                  bl_latitude: sw.lat,
                  tr_latitude: ne.lat,
                  bl_longitude: sw.lng,
                  tr_longitude: ne.lng,
                },
                headers: {
                  'X-RapidAPI-Key': 'd9d5cfce42msha931f4967c006c9p198b21jsnd212c62f81d9',
                  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
        });
        return response.data;
    } catch (err) {
        console.log(err)
    }
  }