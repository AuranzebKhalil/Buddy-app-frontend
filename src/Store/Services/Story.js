import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'http://127.0.0.1:8000/'

// *************************** sending the user Post data to backend ********************* ///

export const Story = createApi({
  reducerPath: 'Story',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    sendUserStory: builder.mutation({
      query: (postData) => ({
        url: 'userStory/addstory/',
        method:'POST',
        body: postData,
      }),
    }),
    getsendUserStory: builder.query({
      query: (postData) => ({
        url: 'userStory/getstory/',
        method:'GET',
        body: postData,
      }),
    }),
  
  }),
});

export const { useSendUserStoryMutation, useGetsendUserStoryQuery} = Story;
