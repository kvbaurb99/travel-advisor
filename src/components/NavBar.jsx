import React, { useState } from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { Search, StyledInputBase, SearchIconWrapper } from '@/styles/materials'
import { AiOutlineSearch } from 'react-icons/ai'
import { Autocomplete } from '@react-google-maps/api'

export default function NavBar({ setCoordinates }) {

    const [searchValue, setSearchValue] = useState(null)

    const onLoad = (autoC) => setSearchValue(autoC)

    const onPlaceChanged = () => {
        const lat = searchValue.getPlace().geometry.location.lat();
        const lng = searchValue.getPlace().geometry.location.lng();

        setCoordinates({ lat, lng });
    }

  return (
    <Box>
        <AppBar position='static'>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <h1 className='text-3xl font-bold'>
                    PlaceFinder.com
                </h1>
                <Box display='flex' alignItems='center'>
                <p className='mr-[1rem] md:block hidden text-lg'>
                    Explore new places
                </p>
                <Search>
                    <SearchIconWrapper>
                        <AiOutlineSearch className='text-xl' />
                    </SearchIconWrapper>
                    <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
                        <StyledInputBase
                        
                            placeholder='Search...'
                        />
                    </Autocomplete>
                </Search>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
  )
}
