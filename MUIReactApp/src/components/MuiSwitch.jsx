import React from 'react'
import { Box, FormControlLabel, Switch } from '@mui/material'
import { useState } from 'react'


function MuiSwitch() {
    const [checked, setChecked] = useState(false)
    const handleChange = (e) => {
        setChecked(e.target.checked)
    }
    console.log(checked);
  return (
    <Box>
        <FormControlLabel
        label='Dark Mode'
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            name='darkMode'
            color='success'
            size='small'
          />
        }
        />
    </Box>
  )
}

export default MuiSwitch