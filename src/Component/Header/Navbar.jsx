import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
  Avatar,
  Tooltip,
  Badge,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import Notification from "../Home/Notification";
import ProfileContent from "./PorfileContent";

import { useSelector } from "react-redux";
import Loader from "../../loader/loader";

import { Box } from "@mui/material";
import { useEffect, useState } from "react";

// *************** Store import   ******************

// import { setCurrentUser } from "@/Store/UserSlice/currentUser";
import { setloader } from "@/Store/lib/features/loaderSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch(setloader(false));
  }, 5000);

  const isLoading = useSelector((state) => state.Loader);

  const router = useRouter();

  const routers = (item) => {
    dispatch(setloader(true));
    router.push(item);
  };

  return (
    <div className="w-full bg-gray-900 to-blue-gray-800">
      {isLoading.value && <Loader />}
      <Navbar
        variant="gradient"
        color="blue-gray"
        className="w-full  max-w-screen-xl bg-gray-900 to-blue-gray-800 "
      >
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5"
          >
            Share
          </Typography>

          <div className="relative flex w-full ml-20 gap-2 md:w-max">
            <Input
              type="search"
              color="white"
              className="outline-none rounded"
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button
              size="sm"
              className="  mb-2 textblack-300 top-1 rounded"
              onClick={() => Click()}
            >
              Search
            </Button>
          </div>

          <div className="ml-auto flex gap-1 md:mr-4">
            <IconButton
              onClick={() => routers("/")}
              variant="text"
              color="white"
              className="mr-2 hover:text-blue-700 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 hover:h-8 hover:w-8"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
            </IconButton>
            <Badge placement="top-end" content="5">
              <Notification />
            </Badge>
            <Tooltip content={"user?.username"}>
              <Avatar
                size="sm"
                variant="circular"
                alt="tania andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                className="border-2 border-white hover:z-10 h-10 w-10"
              />
            </Tooltip>
            {/* <IconButton className="bg-gray-200 hover:text-blue-700" variant="text" >
              <ProfileContent/>
            </IconButton> */}
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
