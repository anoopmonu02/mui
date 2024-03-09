import React from 'react'
import { Stack, Autocomplete, TextField } from '@mui/material'
import { useState } from 'react'

const Skill = {
    id: 0,
    label: ''
};

const skills = ['HTML','CSS','JS','PYTHON','JAVA','DJANGO']

const skillsOptions = skills.map((skill, index)=>({
    id: index+1,
    label: skill
}))

function MuiAutoComplete() {

    const [value, setValue] = useState(null)
    const [skill, setSkill] = useState(null)
    console.log(skill);
  return (
    <Stack spacing={2} width='250px'>
        <Autocomplete options={skills} renderInput={(params) => 
        <TextField {...params} label='Skills' variant='outlined' />} 
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue)
        }}
        freeSolo={true}
        />

        <Autocomplete options={skillsOptions} renderInput={(params) => 
        <TextField {...params} label='Skills' variant='outlined' />} 
        value={skill}
        onChange={(event, newValue) => {
            setSkill(newValue)
        }}
        
        />
    </Stack>
  )
}

export default MuiAutoComplete