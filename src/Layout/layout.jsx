import React from 'react';
import SideBar from '../Component/Home/Sidebar'
import { Box } from '@mui/material';
import Content from '../Component/Home/Content'
import Rightbar from '../Component/Home/Rightbar'

const Layout =({children}) =>{
    return(
        <>
        <div>
            
            <Box sx={{width:"100%"}} className="flex">
                <Box sx={{width:"25%", height:'87vh'}} className="w-[40%]">
                    <SideBar/>
                    </Box>
                    <Box sx={{width:"50%", height:'87vh' }}>
                    <Content/>
                    </Box>
                    <Box sx={{width:"25%", height:'87vh' }}>
                    <Rightbar/>
                    </Box>
                   
            </Box>
          <main>{children}</main>
        
       

        </div>
        </>
    )
}

export default Layout;