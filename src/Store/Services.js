import AxiosInstance from "./Axios"


export const registerServices = async (payload) =>{
    console.log(payload)
  
       return AxiosInstance.post('auth/register/', payload)
          .then((response) => response)
          .catch((error) => error);      

}


export const loginServices = async (payload) =>{
  console.log(payload)

     return AxiosInstance.post('auth/login/', payload)
        .then((response) => response)
        .catch((error) => error);      

}

export const logoutServices = async (payload) =>{
   console.log(payload)
 
      return AxiosInstance.post('auth/logout/', payload)
         .then((response) => response)
         .catch((error) => error);      
 
 }

///*************************/  User Bio   \*******************\\ 

export const userBio = async (payload) => {
   try {
     console.log(payload);
 
     const response = await AxiosInstance.post('userdetail/bio/', payload);
 
     return response.data
 
   } catch (error) {
     console.error('Error in userBio function:', error);
     throw error;
   }
 };

 //*****************************************    getting the Bio data   ********************************** */


 export const get_bio_data = async () => {
   try {

     const response = await AxiosInstance.get('userdetail/getbiodata/');

     return response.data
 
   } catch (error) {
     console.error('Error in userBio function:', error);
     throw error;
   }
 };


// ******************************** user Post data  **************************************


export const userPostData = async (payload) => {
  try {
    console.log(payload);

    return AxiosInstance.post('userdetail/postdata/', payload)
    .then((response) => response)
    .catch((error) => error); 

  } catch (error) {
    console.error('Error in userpost data function:', error);
    throw error;
  }
};

// *****************************  getting the post data ***************

export const get_post_data = async () => {
  try {

    const response = await AxiosInstance.get('userdetail/getpostdata/');

    return response.data

  } catch (error) {
    console.error('Error in userBio function:', error);
    throw error;
  }
};


// const getPosts =(builder)=>{
//    return  builder.query({
//       query: (name) => `pokemon/${name}`,
      
// }