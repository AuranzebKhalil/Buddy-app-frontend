import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import SignUp from './SignUp';
import { Box } from "@mui/system";
import { loginServices } from "@/Store/Services";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
// import { setCurrentUser } from "@/Store/UserSlice/currentUser";

const SignIN = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const router = useRouter()

  const handleOpen = () => setOpen((cur) => !cur);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSignIn = async () => {
    console.log(formData)
    try{
      const response = await loginServices(formData)
      .then((response)=>{
        console.log(response)
        localStorage.setItem('User', JSON.stringify(response.data.data) );
        // dispatch(setCurrentUser(response));
        router.push('/')
      }).catch((error)=>{
       console.log(error)
      })}  catch(error) {
          console.log(error)
  }
    
   
     
    // handleOpen();
  };

  return (
    <>
      <Button onClick={handleOpen}>Sign up</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Sign In
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign In.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Username
            </Typography>
            <Input
              type="text"
              size="lg"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input
              type="email"
              size="lg"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography>
            <Input
              type="password"
              size="lg"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleSignIn} fullWidth>
              Sign In
            </Button>
            <Box className="flex">
              <Typography
                variant="small"
                className="mt-4  flex align-center justify-center"
              >
                Don&apos;t have an account?
              </Typography>
              <Box sx={{ marginTop: '6px', height: '0px' }}>
                <SignUp />
              </Box>
            </Box>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default SignIN;
