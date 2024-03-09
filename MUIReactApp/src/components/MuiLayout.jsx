import React from 'react'
import { Box, Stack, Divider, Grid, Paper } from '@mui/material'

function MuiLayout() {
  return (
    /* direction='column-reverse' */
    //Stack used for 1 dimensional layout
    //Grid used for 2 dimensional layout
    <Paper sx={{padding: '20px', margin: '20px'}} elevation={4}>
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
        {/* //For equally distribution of items no interger value assign to xs, sm, md, lg, xl */}
        <Grid container my={4}>
            <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Item 1</Box></Grid>
            <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Item 2</Box></Grid>
            <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Item 3</Box></Grid>
            <Grid item xs={6}><Box bgcolor='primary.light' p={2}>Item 4</Box></Grid>
            <Grid item xs={3}><Box bgcolor='primary.light' p={2}>Item 5</Box></Grid>
            <Grid item xs={9}><Box bgcolor='primary.light' p={2}>Item 6</Box></Grid>
        </Grid>

    </Paper>
    
    
  )
}

export default MuiLayout