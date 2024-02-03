import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://127.0.0.1:8000/';

export const friendsResquest = createApi({
      reducerPath: 'friendsResquest',
      baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
      tagTypes: ['friends'], // Add this line to define the 'friends' tag type
      endpoints: (builder) => ({
        sendFriendRequest: builder.mutation({
          query: (postData) => ({
            url: 'request/sendRequest/',
            method: 'POST',
            body: postData,
          }),
          invalidatesTags: ['friends'],
        }),
        getFriendRequest: builder.query({
          query: () => 'request/getRequest/',
          providesTags: ['friends'],
        }),
      }),
});

export const { useSendFriendRequestMutation, useGetFriendRequestQuery } = friendsResquest;
