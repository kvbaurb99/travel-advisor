import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { Search, StyledInputBase, SearchIconWrapper } from '@/styles/materials'
import { AiOutlineSearch } from 'react-icons/ai'

export default function NavBar() {


  return (
    <Box>
        <AppBar>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant="h4" color="white">
                    PlaceFinder
                </Typography>
                <Box display='flex' alignItems='center'>
                <Typography sx={{ marginRight: '1rem'}}>
                    Explore new places
                </Typography>
                <Search>
                    <SearchIconWrapper>
                        <AiOutlineSearch className='text-xl' />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder='Search...'
                    />
                </Search>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
  )
}
