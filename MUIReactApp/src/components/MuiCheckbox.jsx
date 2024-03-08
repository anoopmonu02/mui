import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from '@mui/material'
import { useState } from'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';    
import BookmarkIcon from '@mui/icons-material/Bookmark';

function MuiCheckbox() {
    const [acceptTnc, setAcceptTnc] = useState(false)
    const [skills, setSkills] = useState([])
    const handleChange = (event) => {
        setAcceptTnc(event.target.checked)        
    }

    const handleChangeSkill = (event) => {
        const index = skills.indexOf(event.target.value)
        if(index===-1){
            setSkills([...skills, event.target.value])
        } else{
            setSkills(skills.filter((skill) => skill!== event.target.value))
        }
    }

    console.log(acceptTnc);
    console.log(skills);
  return (
    <Box>
        <Box>
            <FormControlLabel 
            label='I agree to the terms and conditions' 
            control={<Checkbox checked={acceptTnc} onChange={handleChange}/>} />
        </Box>
        <Box>
            <Checkbox 
            icon={<BookmarkBorderIcon fontSize="small" />} 
            checkedIcon={<BookmarkIcon fontSize="small" />}
            checked={acceptTnc} 
            onChange={handleChange}
            />
        </Box>

        <Box>
            <FormControl>
                <FormLabel>Skills</FormLabel>   
                <FormGroup row>
                    <FormControlLabel 
                    control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleChangeSkill}/>} 
                    label="HTML" />
                    <FormControlLabel 
                    control={<Checkbox value='Java' checked={skills.includes('Java')} onChange={handleChangeSkill}/>} 
                    label="Java" />
                    <FormControlLabel 
                    control={<Checkbox value='Python' checked={skills.includes('Python')} onChange={handleChangeSkill}/>} 
                    label="Python" />
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}

export default MuiCheckbox