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

import { useSendFriendExpcptionMutation, useGetFriendsQuery} from "@/Store/Services/exceptFriend";
import { useGetFriendRequestQuery } from "@/Store/Services/friendsResquest";
import { Box } from "@mui/material";
const FriendsRequest = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const storedUser = typeof localStorage !== 'undefined' ? JSON.parse(localStorage?.getItem("User")) : null
  const [ sendRequestData ] = useSendFriendExpcptionMutation()
  const { data, error, isLoading, refetch } = useGetFriendRequestQuery()

  const {data:exceptData , error:unExceptError, isLoading:dataIsLoading, refetch:isrefetch} = useGetFriendsQuery()
    console.log(exceptData?.data, "exceptData?.data")
  
useEffect(()=>{
  refetch()
  isrefetch()
}, [data, exceptData])

 

  const getting_friends_request = data?.data.filter((item) => item?.requestUserId === storedUser?.id)
  


  console.log(storedUser, 'getting_friends_request')
  const sendreuestdatas = async (item) => {
    console.log(item, 'item')
    try{
      const res = await sendRequestData(item) 
      console.log(res)
      isrefetch()
    } catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    refetch()
  },[])

  return (
    <>
      <Typography onClick={handleOpen}>
        Friend Request 
      </Typography>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="flex justify-between">Friends Request<Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Cancel</span>
          </Button></DialogHeader>
        <DialogBody >

          

         
    <Box sx={{width:'100%', height:'70vh', overflow:'scroll', overflowX:'hidden', overflowY:'auto'}}>
    {getting_friends_request?.map((item, index)=>(
        <List key={index}>       
             <ListItem>
                <Box sx={{width:'100%'}} className=" flex items-center justify-between">

              
                <Box className="flex">
                        
            <ListItemPrefix>
              <Avatar variant="circular" alt="emma" src={item?.requestImg} />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
                {item?.userName}
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Nice Pics 
              </Typography>
            </div>  
          </Box>

          <Box className="flex">
        


          {exceptData?.data.some(some => some?.requestUserId === storedUser?.id && some?.requestUserId === item?.userid) ? (
  <Button onClick={() => sendreuestdatas(item)} color="green">
    Friends
  </Button>
) : ( 
  <Button onClick={() => sendreuestdatas(item)}>
    Except
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
}

export default FriendsRequest