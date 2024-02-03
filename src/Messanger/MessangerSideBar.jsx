import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Input,
} from "@material-tailwind/react";
import { useGetFriendsQuery } from "../Store/Services/exceptFriend";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedItem } from "../Store/lib/features/messanger";

import { Box, Button } from "@mui/material";
import { Divider } from "@material-ui/core";
import { useEffect } from "react";

const MessageContent = () => {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const storedUser =
    typeof localStorage !== "undefined"
      ? JSON.parse(localStorage?.getItem("User"))
      : null;

  const { data: messangerData, error, isLoading } = useGetFriendsQuery();

  const filterdata = messangerData?.data.filter(
    (item) => item?.currentUserId !== storedUser?.id
  );

  console.log(filterdata, "filterdata");
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  console.log(messangerData, "messangerData");
  const Click = () => {};


  const dispatch = useDispatch();
  const Friend_messanger = (item) => {
    console.log(item);
    dispatch(setSelectedItem(item));
  };

  return (
    <Card className="h-fullw-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="flex items-center gap-4 p-4">
        <Typography onClick={() => Click()} variant="h5" color="blue-gray">
          Messanger
        </Typography>
      </div>
      <div className="relative flex w-full mb-4 bg-gray-900 to-blue-gray-800 rounded md:w-max">
        <Input
          type="search"
          color="white"
          className="outline-none border-none rounded"
          containerProps={{
            className: "min-w-[288px]",
          }}
        />
        <Button
          size="sm"
          sx={{ border: "1px solid black", marginTop: "-3px", color: "white" }}
          className=" mb-2 border-none top-1 pr-4 rounded"
        >
          Search
        </Button>
      </div>

      <Box>
        <Box sx={{ height: "75vh", overflow: "scroll", overflowX:'hidden'}}>
          <Card className="w-[70%] mt-4">
            {filterdata?.map((item, index) => (
              <>
                <List
                  sx={{ height: "40px"  }}
                  onClick={() => Friend_messanger(item)}
                  key={index}
                >
                  <ListItem>
                    <ListItemPrefix>
                      <Avatar
                        src={item?.requestImg}
                        alt="avatar"
                        variant="outline"
                        withBorder={true}
                        color="green"
                        className="p-0.5"
                      />{" "}
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
                        Software Engineer @ Material Tailwind
                      </Typography>
                    </div>
                  </ListItem>
                </List>
                <Divider />
              </>
            ))}
          </Card>
        </Box>
      </Box>
    </Card>
  );
};

export default MessageContent;
