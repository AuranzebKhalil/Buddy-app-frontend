import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Avatar } from "@material-tailwind/react";

import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { app, storage } from "../../Firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useSendUserStoryMutation } from "@/Store/Services/Story";
import { useGetBioDataQuery } from "@/Store/Services/userBioData";
import { useEffect } from "react";
const ResponsiveDialog = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [dispatchStory] = useSendUserStoryMutation();

  const [currentUser, setCurrentUser] = useState({});
  const [bioData, setBioData] = useState();
  const { data, error, isLoading } = useGetBioDataQuery();
  const onClick = () => {
    const item = data?.data.filter((item) => item.userid === currentUser?.id);

    let loopData;

    for (let i = 0; i < item?.length; i++) {
      loopData = item[i];
    }
    if (loopData !== bioData) {
      setBioData(loopData);
    }
  };

  onClick();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = JSON.parse(localStorage?.getItem("User"));
      setCurrentUser(storedUser);
    }
    onClick();
  }, []);

  const [selectedImage, setSelectedImage] = useState(
    "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
  );

  const [img, setimg] = useState();
  const shereStoreImgUrl = async (file) => {
    const storageRef = ref(storage, "postImg/" + file.name);
    await uploadBytes(storageRef, file);
    const imageURL = await getDownloadURL(storageRef);
    setimg(imageURL);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      shereStoreImgUrl(file);
      reader.readAsDataURL(file);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendStory = async () => {
    const senddata = {
      userId: bioData?.id,
      userName: bioData?.name,
      userImg: bioData?.img,
      story: img,
    };

    console.log(bioData);

    try {
      const res = await dispatchStory(senddata);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Button className="bg-blue-600 text-white" onClick={handleClickOpen}>
        Add Story
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Add a Story that your friend "}
        </DialogTitle>
        <DialogContent>
          <div
            className="w-full h-[400px] border"
            style={{ height: "300px", width: "300px" }}
          >
            <div>
              <img
                alt="nature"
                className="h-[300px] w-full rounded-lg object-cover object-center"
                src={selectedImage}
              />
            </div>

            <div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={() => sendStory()} autoFocus>
            Shere
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ResponsiveDialog;
