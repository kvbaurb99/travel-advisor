import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import { Grid } from '@mui/material'
import List from '@/components/List'
import Map from '@/components/Map'
import { getData } from '@/api'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});

  useEffect(() => {
    getData()
    .then((data) => {
      console.log(data)
      setPlaces(data)
    })
  }, [])

  return (
    <main className='h-screen'>
      <NavBar />
      <Grid container spacing={3} sx={{ width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </main>
  )
}