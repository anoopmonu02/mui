import React from 'react'
import { Box, Stack, Divider } from '@mui/material'

function MuiLayout() {
  return (
    /* direction='column-reverse' */
    <Stack 
        spacing={2} 
        sx={{border: '1px solid'}} 
        direction='row'
        divider={<Divider orientation='vertical' flexItem />}
    >
        <Box sx={{
            backgroundColor: 'primary.main',    
            color: 'white',
            height: '100px',
            width: '100px', 
            padding: '16px',
            '&:hover': {
                backgroundColor: 'primary.dark',
            }
        }}>
            MuiLayout
        </Box>

        <Box display='flex' height='100px' width='100px' bgcolor='success.light' p={2}>
            BOX-P stands for p
        </Box>


    </Stack>
    
  )
}

export default MuiLayout