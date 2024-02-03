import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Input,
    Button,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
import { useState } from "react";
import Cart from './Cart'
import { useRouter } from "next/router";
import AddProduct from './AddProduct'

const EcommerceSidebar = () => {
    const [email, setEmail] = useState("");
    const Router = useRouter();
    const onChange = ({ target }) => setEmail(target.value);
   
    return (
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Shop
          </Typography>
        </div>

        <div className="relative flex w-full mb-5 max-w-[24rem]">
      <Input
        type="text"
        placeholder="Search for product"
        value={email}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color='black'
        disabled={!email}
        className="!absolute right-1 top-1 rounded"
      >
        Search
      </Button>
    </div>
        <List>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Home
          </ListItem>
          <ListItem onClick={()=>Router.push('/Product')}>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            Product
          </ListItem>
          <ListItem >
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
           <AddProduct/>
          </ListItem>

          <ListItem onClick={()=>Router.push('/Edit')}>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
           Edit Product
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
       
        </List>
      </Card>
    );
  }
export default EcommerceSidebar
