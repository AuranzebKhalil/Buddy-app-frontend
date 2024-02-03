import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'http://127.0.0.1:8000/'

// *************************** sending the user Post data to backend ********************* ///

export const userPostData = createApi({
  reducerPath: 'userPostData',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    postData: builder.mutation({
      query: (postData) => ({
        url: 'userpost/postdata/',
        method:'POST',
        body: postData,
      }),
    }),
    getPostData: builder.query({
      query: (postData) => ({
        url: 'userpost/getpostdata/',
        method:'GET',
        body: postData,
      }),
    }),
  
  }),
});

export const { usePostDataMutation , useGetPostDataQuery} = userPostData;
