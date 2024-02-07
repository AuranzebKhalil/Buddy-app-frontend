import React from "react";
import Sidebar from "./ProfileSidebar";
import Content from "./ProfileContent";
import { Box } from "@mui/material";
import { setloader } from "@/Store/lib/features/loaderSlice";
import { useDispatch } from "react-redux";

const ProfileLayout = () => {
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch(setloader(false));
  }, 3000);

  return (
    <Box sx={{ display: "flex", width: "100%", height: "70vh" }}>
      <Box
        sx={{
          display: "flex",
          border: "1px solid black",
          width: "25%",
          height: "89vh",
        }}
      >
        <Sidebar />
      </Box>
      <Box
        sx={{
          display: "flex",
          border: "1px solid black",
          width: "75%",
          height: "89vh",
        }}
      >
        <Content />
      </Box>
    </Box>
  );
};

export default ProfileLayout;
