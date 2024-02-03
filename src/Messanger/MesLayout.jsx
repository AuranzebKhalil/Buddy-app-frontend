import { Box } from "@mui/material";
import React from "react";
import MessageContent from "./MessangerSideBar";
import MessangerSideBar from "./MessageContent";
import { setloader } from "@/Store/lib/features/loaderSlice";
import { useDispatch } from "react-redux";
const MesLayout = () => {
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch(setloader(false));
  }, 6000);

  return (
    <Box sx={{ width: "100%", height: "87vh", display: "flex" }}>
      <Box sx={{ width: "30%", height: "89vh", overflowX: "hidden" }}>
        <MessageContent />
      </Box>
      <Box sx={{ width: "70%", height: "90vh" }}>
        <MessangerSideBar />
      </Box>
    </Box>
  );
};

export default MesLayout;
