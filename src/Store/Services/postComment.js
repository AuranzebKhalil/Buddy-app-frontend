import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = 'http://127.0.0.1:8000/'

// *************************** sending the user Post data to backend ********************* ///

export const postComment = createApi({
  reducerPath: 'postComment',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    postComment: builder.mutation({
      query: (postData) => ({
        url: 'userpost/postcomment/',
        method:'POST',
        body: postData,
      }),
    }),
    getpostComment: builder.query({
      query: (postData) => ({
        url: 'userpost/getpostcomment/',
        method:'GET',
        body: postData,
      }),
    }),
  
  }),
});

export const { usePostCommentMutation, useGetpostCommentQuery} = postComment;
