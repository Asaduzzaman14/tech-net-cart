import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tech-net-server-lyart.vercel.app',
  }),
  tagTypes: ['comment'],
  endpoints: () => ({}),
});
