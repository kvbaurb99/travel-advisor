import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import { ListControl } from '@/styles/materials'
import PlaceDetails from './PlaceDetails'


export default function List({ places, isLoading }) {

    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState(0)

  return (
    <div className='p-[25px] h-screen overflow-y-scroll scrollbar-hide'>
     <Typography variant="h4" color="initial">
        Restaurants, Hotels & Attractions around you
     </Typography>
     {isLoading ? (
        <div className='w-full flex h-screen justify-center mt-[15%]'>
            <CircularProgress size='5rem' />
        </div>
     ) : (
        <>
     <Box marginTop='1rem'>
     <FormControl variant='standard' sx={{ width: '25%'}}>
        <InputLabel>Type</InputLabel>
        <Select value={type} label='Type' onChange={(e) => setType(e.target.value)}>
            <MenuItem value='restaurants'>Restaurants</MenuItem>
            <MenuItem value='hotels'>Hotels</MenuItem>
            <MenuItem value='attractions'>Attractions</MenuItem>
        </Select>
     </FormControl>
     <ListControl variant='standard' sx={{ width: '25%'}}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} label='Rating' onChange={(e) => setRating(e.target.value)}>
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
     </ListControl>
     <Grid container spacing={3} marginTop='1rem'>
        {places?.map((place, i) => (
            <Grid item key={i} xs={12}>
                <PlaceDetails place={place} />
            </Grid>
        ))}
     </Grid>
     </Box>
     </>
     )}
    </div>
  )
}
