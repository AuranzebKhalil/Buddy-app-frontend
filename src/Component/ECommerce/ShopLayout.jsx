
import React from 'react'

import ShopSidebar from './EcommerceSidebar'

import { Box } from '@mui/material'

const ShopLayout = ({children}) => {

    return(
        <Box className='w-full h-full' >
            <Box sx={{width:'100%', height:'89vh',  display:'flex'}} className=''>
            <Box sx={{width:'25%'}}>
                <ShopSidebar/>
            </Box>
            <Box sx={{width:'75%', overflow:'scroll'}} className='border'>    
                {children}
            </Box>
            
            </Box>
          


        </Box>
    )
}

export default ShopLayout