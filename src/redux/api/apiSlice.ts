import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tech-net-server-lyart.vercel.app',
  }),
  tagTypes: ['comment'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getSingleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comment'],
    }),
    getComment: builder.query({
      query: (id) => `/comment/${id}`,
      providesTags: ['comment'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  usePostCommentMutation,
  useGetCommentQuery,
} = api;
