import { Box } from '@mui/material'
import React, { useState } from 'react'
import Cards from './ProductCard'

const editProduct = () =>{
 
   const EditProdut = true 


 return(
  
    <Box sx={{display:'grid' , gridTemplateColumns:'1fr 1fr 1fr'}}>
       
       {[1,1,1,1].map((item, index)=>(

                <Box key={index} >
                    <Cards EditProdut={EditProdut} />
                </Box>

        
       ))}

    </Box>
    
   
)

}
export default editProduct