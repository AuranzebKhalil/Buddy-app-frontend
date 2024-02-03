import React, { useState, useEffect } from "react";
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
import SignIn from './SignIn';
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
// import { setCurrentUser } from "@/Store/UserSlice/currentUser";

import { registerServices } from '../Store/Services';

const SignIN = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  // const dispatch = useDispatch()
  const router = useRouter()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password1:''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    localStorage.removeItem('User');
  };

  const handleSignUp = async () => {
    try {
      const response = await registerServices(formData);
      const responseData = response.data.data;
      // dispatch(setCurrentUser(responseData));
      console.log(response, ';');
      localStorage.setItem('User', JSON.stringify(responseData));
    } catch (error) {
      console.log(error);
      router.push('/Auth');
    }
  };

  return (
    <>
      <button onClick={handleOpen}><SignIn sx={{ marginBottom: "-5px" }} /></button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Sign Up
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
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              size="lg"
            />

           

            <Typography className="-mb-2" variant="h6">
              Email
            </Typography>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              size="lg"
            />

            <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              size="lg"
            />

           <Typography className="-mb-2" variant="h6">
            Re-type your password
            </Typography>
            <Input
              type="password"
              name="password1"
              value={formData.lastName}
              onChange={handleInputChange}
              size="lg"
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleSignUp} fullWidth>
              Sign Up
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              I have Account
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                <SignIn />
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}

export default SignIN;
