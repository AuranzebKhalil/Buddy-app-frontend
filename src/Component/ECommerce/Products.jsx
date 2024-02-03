import { Box } from '@mui/material'
import React from 'react'
import Cards from './ProductCard'

const Products = () =>{
return(
    <>
    <Box sx={{display:'grid' , gridTemplateColumns:'1fr 1fr 1fr'}}>
       
       {[1,1,1,1,1,1,1,1,1,1,1,1].map((item, index)=>(

                <Box key={index} >
                    <Cards/>
                </Box>

        
       ))}

    </Box>
    
    </>
)

}
export default Products