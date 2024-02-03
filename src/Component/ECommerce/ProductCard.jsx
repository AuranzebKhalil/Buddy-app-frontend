import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
  } from "@material-tailwind/react";
import Image from "next/image";
import EditProduct from './ProductEdit'
import Images from  '../../assets/StoryReelPictures/story3.jpg'
const ProductCard =  ({EditProdut}) => {
  
  return (
      <Card sx={{height:'300px'}} className=" max-w-[26rem] shadow-lg">
        <CardHeader sx={{height:'200px'}} floated={false} color="blue-gray">
          <Image
            src={Images}
            alt="ui/ux review check"
            
          />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
         
        
        </CardHeader>
        <CardBody>
          <div className="mb-1 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              Florida
            </Typography>
            {EditProdut && 
          
          <EditProduct/>
        
        }
          </div>
          <Typography color="gray">
            Enter a freshly updated 
          </Typography>
        
        </CardBody>
        <CardFooter>
          <Button size="lg" sx={{mb:"10px"}}  fullWidth={true}>
            Add to Cart
          </Button>

       
        </CardFooter>
      </Card>
    );
  }
export default ProductCard