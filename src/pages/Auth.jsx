import React from 'react';
import Authentication from '../Authentication/layout';
import { Box } from '@mui/material';



const Auth = () => {
  return (
    <Box sx={{ width:'100%', height:'100vh', display:'flex', alighItem:'center', justifyContent:'center' }}>
   <Box sx={{height:'100vh', width:'30%', display:'flex', alighItem:'center', justifyContent:'center'}}>
        <Authentication />
   </Box>
  
    </Box>
  );
}

export default Auth;

