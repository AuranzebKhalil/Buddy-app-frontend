import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://127.0.0.1:8000/';

export const exceptFriend = createApi({
  reducerPath: 'exceptFriend',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    sendFriendExpcption: builder.mutation({
      query: (postData) => ({
        url: 'request/friendexcepted/',
        method: 'POST',
        body: postData,
      }),
    }),

    getFriends: builder.query({
      query: () => 'request/getFriends/',
      providesTags: (result, error, id) => [{ type: 'items', id }],
    }),
  }),
});

export const { useSendFriendExpcptionMutation, useGetFriendsQuery } = exceptFriend;
