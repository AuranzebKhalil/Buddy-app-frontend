import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'http://127.0.0.1:8000/'

export const userlogout = createApi({
    reducerPath: 'userlogout',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        userlogout: builder.mutation({
        query: (postData) => ({
          url: 'auth/logout/',
          method:'POST',
          body: postData,
        }),
      }),
  
    
    }),
  });
  
  export const { useUserlogoutMutation } = userlogout;
