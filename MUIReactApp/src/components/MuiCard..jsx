import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material";

function MuiCard() {
  return (
    <Box width='300px' margin='20px' padding='20px'>    
        <Card elevation={4}>
            <CardMedia 
                component='img' height='140' 
                image='https://source.unsplash.com/random'
                alt='Unsplash: React'
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    React
                </Typography>
                <Typography gutterBottom variant="body2" color='text.secondary'>
                We've collected these awesome, useful and advanced free React templates for your next React admin dashboard projects.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' color='primary'>Share</Button>
                <Button size='small' color='primary'>Download</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default MuiCard;