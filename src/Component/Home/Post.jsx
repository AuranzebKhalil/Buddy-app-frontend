import {
  Card,
  CardHeader,
  CardBody,
  h3,
  Avatar,
  IconButton,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SendIcon from "@mui/icons-material/Send";
import Loader from "../../loader"

import {
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import { Box, Tooltip } from "@mui/material";
import PopupComment from "./CommentPopup";
// import { useState } from "react";

const Post = (props) => {

const item = props.postitem
  return (
    <Box sx={{ marginTop: "-20px" }}>
    <Loader/>
     {item?.map((item, index)=>(  <Card
         key={index}
          sx={{ marginTop: "-20px" }}
          shadow={false}
          className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center border"
        >
          <CardHeader
            floated={false}
            sx={{ marginTop: "-20px" }}
            shadow={false}
            color="transparent"
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
          >
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
          </CardHeader>
          <CardBody className="relative py-14 px-6 md:px-12">
            <Box className="flex w-full aligh-center gap-3">
              <Avatar
                sx={{ borderRadius: "100%" }}
                src={item?.userImg}
                alt="avatar"
              />
              <h3
                color="black"
                className=" mt-2 font-medium leading-[1.5] text-gray-400"
              >
                {item?.userName}
              </h3>
            </Box>
            <h3 color="black" className="mb-6 font-medium leading-[1.5]">
              {item?.caption}
            </h3>

            <Avatar
              size="xl"
              variant="circular"
              style={{minWidth:'450px', minHeight:'600px'}}
              alt="tania andrew"
              className="border-2 border-white"
              src={item?.postImg}            />
            <Card sx={{ width: "100%", display: "flex", alignItem: "center" }}>
              <CardBody>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Box sx={{ display: "flex", alignItem: "center"}}>
                    <Button variant="gradient" endIcon={<SendIcon />}>
                      13 Like
                    </Button>
                  </Box>

                  <PopupComment item={item} />

                  <Box sx={{ display: "flex", alignItem: "center" }}>
                    <Button variant="gradient" endIcon={<SendIcon />}>
                      21 Shere
                    </Button>
                  </Box>
                </Box>
                <Box>
                  <div className="absolute top-0 mt-4 right-0">
                    <SpeedDial placement="left">
                      <SpeedDialHandler>
                        <IconButton size="lg" className="rounded-full">
                          <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45" />
                        </IconButton>
                      </SpeedDialHandler>
                      <SpeedDialContent className="flex-row">
                        <SpeedDialAction>
                          <HomeIcon className="h-5 w-5" />
                          </SpeedDialAction>
                        <SpeedDialAction>
                          <CogIcon className="h-5 w-5" />
                        </SpeedDialAction>
                        <SpeedDialAction>
                          <Square3Stack3DIcon className="h-5 w-5" />
                        </SpeedDialAction>
                      </SpeedDialContent>
                    </SpeedDial>
                  </div>
                </Box>
              </CardBody>
            </Card>
          </CardBody>
        </Card>)) }
  </Box>
  );
};

export default Post;
