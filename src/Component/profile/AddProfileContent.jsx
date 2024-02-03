
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
import Form from './EditForm'
const AddProfileContent = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
 
  return (
    <>
      <h3 onClick={handleOpen} variant="gradient">
        Edit profile
      </h3>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Add your Profile content</DialogHeader>
        <DialogBody>
         
          <Box className="w-full flex items-center justify-center">
              
          {/* <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" className="w-40 h-40" sx={{borderRadius:'100px'}}  /> */}

            <Form/>
          </Box>

        </DialogBody>
     
      </Dialog>
    </>
  );
}

export default AddProfileContent