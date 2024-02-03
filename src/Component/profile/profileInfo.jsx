// useClient
import React, { useState, useEffect } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";

import { useGetBioDataQuery } from "@/Store/Services/userBioData";

const ProfileInfo = () => {
  const [openPopover, setOpenPopover] = useState(false);
  const DataResult = useSelector((state) => state.userBioData);
  const [bioData, setBioData] = useState();
  const { data, error, isLoading } = useGetBioDataQuery();
  const [currentUser, setCurrentUser] = useState({});
  

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = JSON.parse(localStorage?.getItem("User"));
      setCurrentUser(storedUser);
    }
  }, []);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  }


  const onClick = () => {
    console.log(data);
 
      const item = data?.data.filter((item) => item.userid === currentUser?.id);
  
      let loopData;
  
      for (let i = 0; i < item?.length; i++) {
        loopData = item[i];
      }
  
      if (loopData !== bioData) {
        setBioData(loopData);
      }
    
  };

  onClick()
 

  return (
    <Popover open={openPopover} handler={setOpenPopover}>
      <PopoverHandler {...triggers}>
        <Typography>Profile Info</Typography>
      </PopoverHandler>
      <PopoverContent {...triggers} className="z-50 max-w-[24rem]">
        <div className="mb-2 flex items-center justify-between gap-4">
          {bioData?.img && <Avatar
            size="md"
            variant="circular"
            alt="tania andrew"
            src={bioData?.img}
          />}
          <Button
          
            size="sm"
            className="font-medium capitalize"
          >
            Add friend
          </Button>
        </div>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 flex items-center gap-2 font-medium"
        >
          <span>{}</span> •{" "}
          <a href="#" className="text-md font-medium text-gray-900">
            {bioData?.name}
          </a>
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="font-normal text-blue-gray-500"
        >
          {bioData?.bio}
        </Typography>
        <div className="mt-6 flex items-center gap-8 border-t border-blue-gray-50 pt-4">
          <Typography
            variant="small"
            color="gray"
            className="flex items-center gap-2 text-sm font-normal text-blue-gray-500"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* ... SVG path for location icon */}
            </svg>
            {bioData?.location}
          </Typography>
          <Typography
            as="a"
            href="#"
            variant="small"
            color="gray"
            className="flex items-center gap-2 text-sm font-normal text-blue-gray-500"
          >
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* ... SVG path for link icon */}
            </svg>
            Material Tailwind
          </Typography>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProfileInfo;
