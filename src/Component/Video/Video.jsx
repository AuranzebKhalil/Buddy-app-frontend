import { Avatar, Card, Typography } from '@material-tailwind/react'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
const Video = () =>{

    return(
<>
{ [1,1,1,1,1,1].map((index) =>(
    <Box key={index} sx={{width:'80%', margin:'auto', marginTop:'15px',}} className="border p-2 rounded">
<Card>
<Card>
        <Box sx={{height:'100px'}}>
        <Box className="flex items-center justify-between">

        
        <Box className="flex items-center gap-4">
            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
        <Typography>Jhon Wick</Typography>
        </Box>

        <Box className="mr-3"><LinearScaleIcon/></Box>

</Box>
        <Typography className="mt-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laudantium</Typography>

        </Box>
        </Card> 
    <video className="h-full  rounded-lg" controls>
    <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
    </video>
    <Card>

    
        <Box sx={{height:'60px'}} className="flex items-center justify-between">

        <Box className="flex gap-2">
        
        
        <Button variant="outlined" startIcon={<ThumbUpOffAltIcon />}>
Like
</Button>

<Button variant="outlined" startIcon={<ShareIcon />}>
Shere
</Button>
</Box>
        <Typography className='mr-4'>123 view</Typography>

        </Box>

    </Card>
    </Card>
</Box>
)) }
</>
    )
}

export default Video