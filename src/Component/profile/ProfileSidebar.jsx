import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Avatar,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
  import EditProfile from './AddProfileContent'
import { Box } from "@mui/material";
import ProfileInfo from './profileInfo'



     

 const ProfileSidebar = () => {
  // const [biodata, setBiodata] = useState();
  // const currentUser = useSelector((state) => state.currentUser);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response_data = await get_bio_data();
  //       const data = response_data.data;
  //       const storedUser = JSON.parse(localStorage.getItem("User"));

  //       console.log(storedUser, "DATA", data, "items");

  //       const filteredData = data.filter(
  //         (item) => storedUser.id === item.userid
  //       );
  //       console.log(filteredData, "filteredData");
  //       setBiodata(filteredData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, [currentUser]);
    return (
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Profile
          </Typography>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Home
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Friends
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            
        
            <ProfileInfo />
       
            <ListItemSuffix>
          

                <Chip  value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          
             </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            <EditProfile/>
          </ListItem>
        
        </List>

      <Card className="border p-2 bg-gray-300">

<Box sx={{width:'full', height:'auto', display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>

    {
        [1,1,1,1,1,1,1,1,1].map((index)=>(
             <Box key={index}>
       <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        variant="square"
        size="lg"
        color="pink"
        className="p-0.5"
      />

            </Box>
        ))
    }

</Box>

      </Card>
      </Card>
    );
  }

export default ProfileSidebar