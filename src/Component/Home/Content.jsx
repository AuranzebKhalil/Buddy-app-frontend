import { Box } from "@mui/material";
import React from "../Home/Story";
import Post from "./Post";
import Story from "./Story";
import SherePosts from "./SherePosts";
import { useGetPostDataQuery } from "../../Store/Services/userPostData";

import { useEffect, useState } from "react";


  import { setloader } from "@/Store/lib/features/loaderSlice";
  import { useDispatch } from 'react-redux';

const Content = () => {
  const dispatch = useDispatch()  
  setTimeout(() => {
    dispatch(setloader(false))
  }, 3000);
const {data, error, isLoading} = useGetPostDataQuery();
const postitem = data?.data

  return (
    <>
      <Box sx={{ height: "100%", overflow: "scroll" }}>
        <Story />
        <SherePosts />

        <Post postitem={postitem} />
      </Box>
    </>
  );
};
export default Content;
