import React from "react";
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
} from "@material-tailwind/react";
import { useEffect } from "react";

import {
  useSendFriendRequestMutation,
  useGetFriendRequestQuery,
} from "@/Store/Services/friendsResquest";
import { useGetBioDataQuery } from "@/Store/Services/userBioData";

import { Box } from "@mui/material";
import { useState } from "react";
const FriendsSuggection = () => {
  const storedUser =
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage?.getItem("User"))
      : null;

  const [open, setOpen] = React.useState(false);
  const { data, error, isLoading, refetch } = useGetBioDataQuery();
  const {
    data: getdata, error: geterror, isLoading: getloadding, refetch:datarefetch
  } = useGetFriendRequestQuery();

  useEffect(()=>{
    refetch()
    datarefetch()
  },[data, getdata ])
                    
  console.log(getdata?.data, 'getdata')
  const [sendFriendsRequests] = useSendFriendRequestMutation();
  const handleOpen = () => setOpen(!open);
  const [requestSend, setRequestSend] = useState([]);
  const currentUser = data?.data.filter((item)=> item.userid === storedUser?.id)
  const filterdata = requestSend?.map((item) => item);

  let currentUserJSON

  const filterdataitem = () =>{

  for(let i = 0 ; i < currentUser?.length; i++){
     
    currentUserJSON = currentUser[i]

  }
}

  filterdataitem()
  const Sliceing_CurrentUser = data?.data.filter((item) => item.userid !== storedUser?.id);

  console.log(currentUserJSON, 'Sliceing_CurrentUser' )
  const sendFriendsRequest = async (item) => {
   

    try {
      const fromData = {
        requestImg: currentUserJSON?.img,
        requestId: item.id,
        requestName: item.name,
        requestUserId: item.userid,
        currentUserId: storedUser.id,
        userName: storedUser.username,
        location: item.location,
      };

      console.log(fromData, 'fromData')

     
      setRequestSend([]);
      const res = await sendFriendsRequests(fromData);
      console.log(res.data.data);
      refetch()
      datarefetch()
      if (res.data.data) {
        setRequestSend(res.data.data); // Add the sent request to the state
      }
    
    } catch (error) {
      console.log(error, "cannot send the request ");
    }
  };

  return (
    <>
      <Typography onClick={handleOpen}>Add Friend</Typography>

      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="flex justify-between">
          Add a friend whom you know.
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Cancel</span>
          </Button>
        </DialogHeader>
        <DialogBody>
          <Box
            sx={{
              width: "100%",
              height: "70vh",
              overflow: "scroll",
              overflowX: "hidden",
              overflowY: "auto",
            }}
          >
            {Sliceing_CurrentUser?.map((item, index) => (
              <List key={index}>
                <ListItem>
                  <Box
                    sx={{ width: "100%" }}
                    className=" flex items-center justify-between"
                  >
                    <Box className="flex">
                      <ListItemPrefix>
                        <Avatar variant="circular" alt="emma" src={item?.img} />
                      </ListItemPrefix>
                      <div>
                        <Typography variant="h6" color="blue-gray">
                          {item?.name}
                        </Typography>
                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          {item?.location}
                        </Typography>
                      </div>
                    </Box>

                    <Box className="flex">
                    {getdata?.data.some(some => some?.requestId === item?.id && some?.currentUserId ===  storedUser?.id) ? (
  <Button color="green" onClick={() => sendFriendsRequest(item)}>Request sent...</Button>
) : ( 
  <Button onClick={() => sendFriendsRequest(item)}>
    Request
  </Button>
)}

                    </Box>
                  </Box>
                </ListItem>
              </List>
            ))}
          </Box>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default FriendsSuggection;
