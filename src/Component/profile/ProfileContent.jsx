import { Avatar, Card, CardHeader, Typography } from "@material-tailwind/react";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Post from "../Home/Post";
import { useGetBioDataQuery } from "@/Store/Services/userBioData";
import Image from "next/image";

import { useGetPostDataQuery } from "@/Store/Services/userPostData";


const ProfileContent = () => {
  const { data, error, isLoading } = useGetBioDataQuery();
  const [bioData, setBioData] = useState();
  const {data:postdata, error:posterror, isLoading:postloadin} = useGetPostDataQuery()

  console.log(postdata)
  const [currentUser, setCurrentUser] = useState({});
  const storedUser =
  typeof localStorage !== "undefined"
    ? JSON.parse(localStorage?.getItem("User"))
    : null;



  const onClick = () => {
    console.log(data);

    const item = data?.data.filter((item) => item.userid === storedUser?.id);
    
    let loopData;

    for (let i = 0; i < item?.length; i++) {
      loopData = item[i];
    }

    if (loopData !== bioData) {
      setBioData(loopData);
    }
  };


  const postitem  = postdata?.data.filter((item) => item.userId === storedUser?.id)

console.log(postdata)
console.log(storedUser)


  onClick();

  return (
    <Box
      className="w-full"
      sx={{ height: "89vh", overflow: "scroll", marginBottom: "2rem" }}
    >
      <Box className="flex w-full justify-center mt-2 items-center flex-col gap-3 mb-8">
        <Box sx={{ borderRadius: "50%" }}>
          <Image
            src={bioData?.img}
            width={100}
            height={60}
            className="rounded-full	"
            alt="Picture of the author"
          />
        </Box>
        <Typography className="">{bioData?.name}</Typography>
        
      </Box>

      <Box sx={{width:"70%", margin:'auto'}}>
        <Post postitem={postitem}/>
      </Box>
    </Box>
  );
};

export default ProfileContent;
