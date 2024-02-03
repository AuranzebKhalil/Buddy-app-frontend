import { Box } from '@mui/system'
import React from 'react'
import Sidebar from './videoPageSidebar'
import Video from './Video'

    import { setloader } from "@/Store/lib/features/loaderSlice";
    import { useDispatch } from 'react-redux';
const videoLayout = () =>{


    const dispatch = useDispatch()  
    setTimeout(() => {
      dispatch(setloader(false))
    }, 3000);

    return(

<Box sx={{width:'100%', display:'flex'}}>
    <Box sx={{width:'30%', height:'89vh', border:'1px solid black'}}>
<Sidebar/>
    </Box>

    <Box sx={{width:'70%',overflow:'scroll', height:'89vh', border:'1px solid black'}}>

<Video/>
</Box>

    
</Box>
    
    )
}

export default videoLayout