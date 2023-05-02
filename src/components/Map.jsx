import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@mui/material'
import { MdLocationPin } from 'react-icons/md'
import Image from 'next/image';

export default function Map({ handleBounds, handleCoordinates, coordinates, places}) {

  const isMobile = useMediaQuery('(max-width:600px)');

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
                if (e.marginBounds) {
                    handleBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                  }
            }}
            onChildClick={''}
        >
          {places?.map((place, i) => (
            <div
              className='w-[150px] hover:relative hover:z-50 cursor-pointer'
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {
                isMobile ? (
                  <MdLocationPin />
                ) : (
                  <Paper elevation={8} sx={{ padding: '15px'}}>
                    <p className='text-center text-lg'>{place.name}</p>
                    {place.photo ? <Image
                      src={place?.photo?.images?.large?.url}
                      width={125}
                      height={100}
                      className='max-h-[80px] mx-auto'
                    /> : null}
                  </Paper>
                )
              }
            </div>
          ))}
        </GoogleMapReact>
    </div>
  )
}
