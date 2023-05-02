import { Box, Button, Chip, Paper, Rating, Stack } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Empty from '../assets/no_photo.jpg'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'

export default function PlaceDetails( {place} ) {

  const formattedRating = Math.round(place.rating)

  return (
    <Paper elevation={8} sx={{ padding: '25px'}}>
        {
          place.photo ?
          <Image 
            src={place.photo.images.large.url}
            width={500}
            height={350}
            alt='place'
            className='rounded-lg max-h-[300px]'
            />
          :
          <Image 
          src={Empty}
          width={300}
          height={300}
          alt='no-image'
          className='rounded-lg max-h-[250px]'
          />
        }
        <p className='font-bold text-xl mt-4 tracking-wide'>{place.name}</p>
        <Stack direction='row' gap='.5rem' marginTop='1rem'>
          <p>{place?.rating}</p>
          <Rating value={formattedRating} />
          {place.num_reviews ? <p>({place?.num_reviews})</p> : null}
          <p>{place?.price_level}</p>
        </Stack>
        <Stack flexWrap='wrap' direction='row' gap='.5rem' marginTop='1rem'>
        {
          place?.cuisine?.map(item => (
            <Chip key={item.key} label={item.name} variant='outlined' />
          ))
        }
        </Stack>
        <Stack direction='column' gap='1rem' marginTop='1rem'>
          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <MdLocationPin className='text-lg text-gray-500' />
            <p className='text-gray-500 text-sm'>{place?.address}</p>
          </Stack>
          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <FaPhoneAlt className='text-lg text-gray-500' />
            <p className='text-gray-500 text-sm'>{place?.phone}</p>
          </Stack>
        </Stack>
        { place.website ? 
        <Box marginTop='1rem'>
          <Button variant='text' href={place?.website} target='_blank'>
            WEBSITE
          </Button>
        </Box>
        :
        null
        }
    </Paper>
  )
}
