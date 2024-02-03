import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'http://127.0.0.1:8000/';


export const messangers = createApi({
  reducerPath: 'messangers',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (postData) => ({
        url: 'messager/message/',
        method: 'POST',
        body: postData,
      }),
    }),
    getMessage: builder.query({
      query: () => 'messager/getmessage/',
      
    }),
  }),
});

export const { useSendMessageMutation, useGetMessageQuery } = messangers;
