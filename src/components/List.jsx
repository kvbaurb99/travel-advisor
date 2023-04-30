import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { ListControl } from '@/styles/materials'


export default function List() {

    const [type, setType] = useState('restaurants')
    const [rating, setRating] = useState(0)

  return (
    <div className='p-4'>
     <Typography variant="h4" color="initial">
        Restaurants, Hotels & Attractions around you
     </Typography>
     <Box marginTop='1rem'>
     <FormControl variant='standard' sx={{ width: '20%'}}>
        <InputLabel>Type</InputLabel>
        <Select value={type} label='Type' onChange={(e) => setType(e.target.value)}>
            <MenuItem value='restaurants'>Restaurants</MenuItem>
            <MenuItem value='hotels'>Hotels</MenuItem>
            <MenuItem value='attractions'>Attractions</MenuItem>
        </Select>
     </FormControl>
     <ListControl variant='standard' sx={{ width: '20%'}}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} label='Rating' onChange={(e) => setRating(e.target.value)}>
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
     </ListControl>
     </Box>
    </div>
  )
}
