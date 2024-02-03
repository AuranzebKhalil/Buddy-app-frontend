import React from "react";
import { useRouter }  from "next/router";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
} from "@material-tailwind/react";
import StorefrontIcon from '@mui/icons-material/Storefront';
import Cart from '../ECommerce/Cart'
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Ecom from '../ECommerce/Selleraccount'
import { Box } from "@mui/material";
import FriendsRequest from "../Friends/FriendsRequest";
import FriendsSuggection from "../Friends/FriendsSuggection";
// import { logoutServices } from "@/Store/Services";
import { useUserlogoutMutation } from "@/Store/Services/logout";
import { setloader } from "@/Store/lib/features/loaderSlice";

import { useDispatch } from "react-redux";

const  Sidebar = () => {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [ userLogout ] = useUserlogoutMutation()
  const dispatch = useDispatch()
  
  const router = useRouter()
  const { setBoolean } = setloader()

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleOpenEcommerce = (value) =>{
    setOpen(open === value ? 0 : value);
  } 

  const loader = (item) => {

    router.push(item)
    dispatch(setloader(true))

  }


  const Logout = async () =>{
    console.log('asas')
    try{
      const {data} = await userLogout()
         console.log(data)
         localStorage.removeItem('User');
         router.push('/Auth')
      }catch(error){
        console.log(error)
      }  
     
  } 
 
  return (
    <Box sx={{height:'100%', overflow:'scroll'}} className="h-full border max-w-[30rem]">
    <Card sx={{}} className="  p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 flex items-center gap-4 p-4">
        {/* <Image src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" /> */}
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <div className="p-2 flex align-center">
        <Input sx={{display:'flex' , alignItem:'center'}} icon={<MagnifyingGlassIcon className="h-5 w-5 mt-[-16px]" />}  />
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <FriendsSuggection/>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <FriendsRequest/>
              </ListItem>
            
        
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                E-Commerce
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              
            <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpenEcommerce(2)} className="border-b-0 p-3">
              <ListItemPrefix>
                <StorefrontIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
              Create Your own Shop
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Ecom/>
              </ListItem>
              <ListItem  onClick={()=> router.push('/Product')}>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                 Shop
              </ListItem>
            </List>
          </AccordionBody>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        <ListItem  onClick={()=> loader('/video')}>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix >
          Video
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Cart/>
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem  onClick={()=> loader('/profile')}>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem  onClick={()=> loader('/mes')}>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix >
          Messanger
        </ListItem>
     
        
        <ListItem  onClick={() => Logout()}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
      <Alert open={openAlert} className="mt-auto" onClose={() => setOpenAlert(false)}>
        <CubeTransparentIcon className="mb-4 h-12 w-12" />
        <Typography variant="h6" className="mb-1">
          Upgrade to PRO
        </Typography>
        <Typography variant="small" className="font-normal opacity-80">
          Upgrade to Material Tailwind PRO and get even more components, plugins, advanced features
          and premium.
        </Typography>
        <div className="mt-4 flex gap-3">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-medium opacity-80"
            onClick={() => setOpenAlert(false)}
          >
            Dismiss
          </Typography>
          <Typography as="a" href="#" variant="small" className="font-medium">
            Upgrade Now
          </Typography>
        </div>
      </Alert>
    </Card>
    </Box>
  );
}

export default Sidebar