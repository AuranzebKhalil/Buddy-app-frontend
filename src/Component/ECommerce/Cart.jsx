import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { Box } from "@mui/material";
import Payment from './Payment'
 
const Cart = () => {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <Box >
      <h3 onClick={handleOpen} variant="gradient">
        Cart
      </h3>
      <Dialog
      sx={{height:'90vh'}}
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Cart</DialogHeader>
        <DialogBody>
<Box sx={{widht:'90%', maxHeight:'50vh', overflowY:'auto', overflowX:'none'}}>

{[1,1,1,1,1,1,1,1].map((index)=>(
  <Box key={index} className="flex items-center justify-between" sx={{width:'90%', borderRadius:'9px', height:'80px',marginTop:'5px', boxShadow:'0px 0px 10px -4px #8f8e8e' }} >
  <Box className="flex items-center">

<Avatar withBorder={true} src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" className="p-0.5  w-20 h-20" />

<Typography className="ml-2">John wick <br/> Nick </Typography>
</Box>

<Box className="flex gap-4 mr-3">
<select style={{width:'50px'}}>
  <option value="">1</option>
  <option value="">2</option>
  <option value="">3</option>
  <option value="">4</option>
  <option value="">5</option>
  <option value="">6</option>
  <option value="">7</option>
 
</select>

<h3 className="">
  $123
</h3>
</Box>
</Box>
))}


  
</Box>




        </DialogBody>
        <DialogFooter>
          <h4 color="green" className="font-bold">
            Total = $104
          </h4>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        
          <Payment/>
         
        </DialogFooter>
      </Dialog>
    </Box>
  );
}

export default Cart