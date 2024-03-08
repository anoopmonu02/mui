import React from 'react'
import {Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText} from '@mui/material'
import { useState } from 'react'

function MuiRadioBtn() {
    const [value, setValue] = useState('')
    console.log(value);
  return (
    <Box spacing={2}>
        <FormControl error={true}>
            <FormLabel name='job-exp-grp-lbl'>Years of Expperience</FormLabel>
            <RadioGroup name='job-exp-grp' row aria-label='job-exp-grp' 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            >
                <FormControlLabel control={<Radio size='small' color='success'/>} label='0-2' value='0-2' />
                <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
                <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
            </RadioGroup>
            <FormHelperText>Please select years of experience</FormHelperText>
        </FormControl>
    </Box>
  )
}

export default MuiRadioBtn