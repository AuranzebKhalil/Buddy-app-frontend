


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://127.0.0.1:8000/';

export const userBioData = createApi({
  reducerPath: 'userBioData',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    bioData: builder.mutation({
      query: (postData) => ({
        url: 'userdetail/bio/',
        method: 'POST',
        body: postData,
      }),
    }),

    getBioData: builder.query({
      query: () => 'userdetail/getbiodata/',
      providesTags: (result, error, id) => [{ type: 'bio', id }],
    }),
  }),
});

export const { useBioDataMutation, useGetBioDataQuery } = userBioData;


