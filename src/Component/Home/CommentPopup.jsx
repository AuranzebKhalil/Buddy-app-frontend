import CommentSender from "../../Messanger/MessageSenderButton";
import CommentIcon from "@mui/icons-material/Comment";
import { Box } from "@mui/material";
import { useGetBioDataQuery } from "@/Store/Services/userBioData";
import { usePostCommentMutation , useGetpostCommentQuery} from "@/Store/Services/postComment";
import { useEffect } from "react";

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Typography,
  Card,
  Textarea,
} from "@material-tailwind/react";


const CommentPopup = (props) => {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState("");
  const handleOpen = () => setOpen(!open);
  const { data: bioData } = useGetBioDataQuery();
  const storedUser = JSON.parse(localStorage.getItem("User"));
  const [sendPostComment] = usePostCommentMutation();
  const propsData = props

  const {data, error, isLodding} = useGetpostCommentQuery()
  const [cosmmets , setComments] = useState([])
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  useEffect(()=>{
    
    const filterData = data?.data.filter((item) => item.commentpostId  ===  propsData.item.id )
    setComments(filterData)

  },[data])

  const sendComment = async () => {
 
    const loopdata = bioData?.data?.find((item) => item.userid === storedUser.id);

    if (!loopdata) {
      console.error("User data not found");
      return;
    }

    const formData = {
      userName: loopdata.name,
      userImg: loopdata.img,
      comment: comment,
      userId: loopdata.userid,
      commentpostId:propsData.item.id 
    };
    console.log(formData)
    try {
      const res = await sendPostComment(formData);
      console.log("Comment response:", res);
    } catch (error) {
      console.error("Error sending comment:", error);
    }
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <CommentIcon />
      </IconButton>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="flex justify-between">
          Comment from your friends{" "}
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Cancel</span>
          </Button>
        </DialogHeader>
        <DialogBody>
          <Box
            sx={{
              width: "100%",
              height: "50vh",
              overflow: "scroll",
              overflowX: "hidden",
              overflowY: "auto",
            }}
          >
            {cosmmets?.map((item, index) => (
              <List key={index}>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar
                      variant="circular"
                      alt="emma"
                      src={item?.userImg}
                    />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      {item?.userName}
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      {item?.comment}
                    </Typography>
                  </div>
                </ListItem>
              </List>
            ))}
          </Box>

          <Box>
            <div className="flex w-full flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 bg-gray-900/5 p-2">
              <div className="flex">
                <IconButton variant="text" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </IconButton>
                <IconButton variant="text" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                    />
                  </svg>
                </IconButton>
              </div>
              <Textarea
                rows={1}
                resize={true}
                placeholder="Your Caption"
                className="min-h-full !border-0 focus:border-transparent"
                containerProps={{
                  className: "grid h-full",
                }}
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={comment} // Set the value of the textarea
                onChange={handleCommentChange}
              />
              <div>
                <IconButton
                  variant="text"
                  onClick={() => sendComment()}
                  className="rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </IconButton>
              </div>
            </div>
          </Box>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default CommentPopup;
