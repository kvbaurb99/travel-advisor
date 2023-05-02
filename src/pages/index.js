import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import { Grid } from '@mui/material'
import List from '@/components/List'
import Map from '@/components/Map'
import { getData } from '@/api'
import { useEffect, useState, useCallback } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState();
  const [isLoading, setIsLoading] = useState(false)
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')

  const handleBounds = useCallback((newBounds) => {
    setBounds(newBounds);
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    })
  }, [])

  useEffect(() => {
    const filteredPlaces = places.filter(place => place.rating > rating)
    setFilteredPlaces(filteredPlaces)
  }, [rating])

  useEffect(() => {
    if (bounds) {
      setIsLoading(true)
      getData(type, bounds.sw, bounds.ne)
        .then((data) => {
          console.log(places)
          setPlaces(data)
          setFilteredPlaces([])
          setIsLoading(false)
        })
    }
  }, [type, coordinates, bounds])

  console.log(places)


  return (
    <main className='h-screen'>
      <NavBar setCoordinates={setCoordinates} />
      <Grid container spacing={3} sx={{ width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            handleCoordinates={setCoordinates}
            handleBounds={handleBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
          />
        </Grid>
      </Grid>
    </main>
  )
}
