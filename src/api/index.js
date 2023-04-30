import axios from "axios";


const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    },
    headers: {
      'X-RapidAPI-Key': 'd9d5cfce42msha931f4967c006c9p198b21jsnd212c62f81d9',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

  export const getData = async () => {
    try {
        const response = await axios.get(URL, options);
        return response.data;
    } catch (err) {
        console.log(first)
    }
  }