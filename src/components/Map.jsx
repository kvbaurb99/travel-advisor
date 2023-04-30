import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@mui/material'

export default function Map() {

    const coordinates = { lat: 37.7749, lng: -122.4194 };

  return (
    <div className='h-screen w-full ml-6'>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBYqJH8Nljnit9Wp0DnzmCnuzFJ-5_lKkU' }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={''}
            onChange={''}
            onChildClick={''}
        >
        </GoogleMapReact>
    </div>
  )
}
