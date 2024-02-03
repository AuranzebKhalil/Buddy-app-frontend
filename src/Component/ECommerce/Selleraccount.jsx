import React from "react";
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
 
const Selleraccount = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
 
  return (
    <>
      <Button onClick={handleOpen}>Seller </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
            Create an Seller account
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your creadication for Your account
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Enter your Store Name
            </Typography>
            <Input type="text" size="lg" />
            <Typography className="-mb-2" variant="h6">
              What kind of product that you want to sell
            </Typography>
            <Input label="" size="lg" />
            <Typography className="-mb-2" variant="h6">
              From where you can host your shop
            </Typography>
            <Input label="" size="lg" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Create
            </Button>
      
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}

export default Selleraccount