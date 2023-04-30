import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@mui/material'

export default function Map({ handleBounds, handleCoordinates, coordinates}) {


  return (
    <div className='h-screen w-full ml-6'>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBYqJH8Nljnit9Wp0DnzmCnuzFJ-5_lKkU' }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={''}
            onChange={(e) => {
                handleCoordinates({ lat: e.center.lat, lng: e.center.lng })
                handleBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
            }}
            onChildClick={''}
        >
        </GoogleMapReact>
    </div>
  )
}
