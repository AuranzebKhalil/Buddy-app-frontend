// MessageContent.js
import React, { useEffect, useState } from "react";
import { Box, Paper, TextField, Button, Typography } from "@mui/material";
import { Card, CardBody } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import MesgNavbar from "./MessNavbar";
import SendIcon from "@mui/icons-material/Send";
import MessSender from "./MessageSenderButton";
import { useSelector } from "react-redux";
import { useGetMessageQuery } from "@/Store/Services/messangers";
import Image from "next/image";
import ReactAudioPlayer from "react-audio-player";

const MessageContent = () => {
  const selectedValue = useSelector((state) => state.messanger.value);
  const { data, error, isLoading, refetch } = useGetMessageQuery();
  const storedUser =
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage?.getItem("User"))
      : null;

  const filterMessage = data?.data.filter(
    (item) =>
      (item.messageId === storedUser.id &&
        item.current === selectedValue.currentUserId) ||
      (item.messageId === selectedValue.currentUserId &&
        item.current === selectedValue.requestUserId)
  );

  useEffect(() => {
    console.log(data);
    refetch();
  }, [refetch]);

const onSendMessage =() =>{
console.log("onSendMessage")
refetch()
}

// setInterval(() => {
//   refetch()
// }, 1000);




  return (
    <Box sx={{ width: "100%" }}>
      <MesgNavbar />
      <Box sx={{ height: "68vh", overflow: "scroll", overflowX: "hidden" }}>
        <Card className="mt-6 h-full w-full">
          <CardBody>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              p={4}
            >
              <Paper
                elevation={3}
                style={{ width: "100%", padding: "16px", textAlign: "center" }}
              >
                <Box className="flex align-center justify-center">
                  <Avatar
                    onClick={() => sendMessage()}
                    withBorder={true}
                    src={selectedValue.requestImg}
                    alt="avatar"
                    color="green"
                    className="p-0.5 rounded-full w-20 h-20"
                  />
                </Box>
                <Typography variant="h6" gutterBottom>
                  {selectedValue.userName}
                </Typography>
                <Box maxHeight="100%" overflow="auto" width="100%">
                  {filterMessage?.map((item, index) => (
                    <Box
                      key={index}
                      mb={2}
                      textAlign={
                        item?.userName === storedUser?.username
                          ? "left"
                          : "right"
                      }
                    >
                      <div
                        style={{
                          color:
                            item?.userName === storedUser?.username
                              ? "white"
                              : "black",
                          padding: "8px",

                          borderRadius: "4px",
                          display: "inline-block",
                          borderRadius: "35px",
                          paddingLeft: "10px",
                          paddingRight: "10px",
                        }}
                      >
                        <Box
                          className="flex gap-3"
                          style={{
                            padding:'20px 20px 20px 20px',
                            borderRadius:'8px',
                            backgroundColor:
                              item?.userName === storedUser?.username
                                ? "#E0E0E0"
                                : "#2196F3",
                            display: "flex",
                            alignItems: "center",
                            justifyContent:
                              item?.userName === storedUser?.username
                                ? "start"
                                : "end",
                            height: "40px",
                          }}
                        >
                          <Avatar
                            src={selectedValue.requestImg}
                            alt="avatar"
                            size="xs"
                          />

                          <Typography>{item.messageText}</Typography>
                        </Box>

                        <Box
                          style={{
                            marginTop: "15px",

                            display: "flex",
                            alignItems: "center",

                            justifyContent:
                              item?.userName === storedUser?.username
                                ? "start"
                                : "end",
                          }}
                        >
                          {" "}
                          <Image
                            src={item?.messageImg}
                            style={{ borderRadius: "10px" }}
                            width={200}
                            height={320}
                            alt="Picture of the author"
                          />
                        </Box>

                        <Box style={{ marginTop: "15px" }}>
                          <ReactAudioPlayer
                            src={item?.messageAudio}
                            autoPlay
                            controls
                          />
                        </Box>
                      </div>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Box>
          </CardBody>
        </Card>
      </Box>
      <Box className="flex" sx={{ width: "95%" }}>
      <MessSender onSendMessage={onSendMessage} />
      </Box>
    </Box>
  );
};

export default MessageContent;
