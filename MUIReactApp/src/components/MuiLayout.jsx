import React from 'react'
import { Box } from '@mui/material'

function MuiLayout() {
  return (
    <>
        <Box sx={{
            backgroundColor: 'primary.main',    
            color: 'white',
            height: '100px',
            width: '100px', 
            padding: '10px',
            '&:hover': {
                backgroundColor: 'primary.dark',
            }
        }}>
            MuiLayout
        </Box>

        <Box display='flex' height='100px' width='100px' bgcolor='success.light' p={2}>
            BOX-P stands for p
        </Box>


    </>
    
  )
}

export default MuiLayout