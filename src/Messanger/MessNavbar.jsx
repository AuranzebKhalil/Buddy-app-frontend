import { Box } from "@mui/material";
import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import { Avatar } from "@material-tailwind/react";
import { useSelector } from "react-redux";

const MessNavbar = () => {
  const selectedValue = useSelector((state) => state.messanger.value);

  return (
    <Box>
      <Navbar
        variant="gradient"
        className="mx-auto max-w-screen-xl flex justify-between from-blue-gray-900 to-blue-gray-800 px-4 py-3"
      >
        <Typography
          as="a"
          href="#"
          variant="h6"
          color="black"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Name
        </Typography>
        <Box sx={{}}>
          <IconButton size="md">
            <CallIcon />
          </IconButton>

          <IconButton className="ml-2" size="md">
            <VideoCallIcon />
          </IconButton>

          <Avatar
            className="h-10 w-10 ml-3"
            src={selectedValue.requestImg}
            alt="avatar"
          />
        </Box>
      </Navbar>
    </Box>
  );
};

export default MessNavbar;
