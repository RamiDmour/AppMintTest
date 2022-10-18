import { createApi } from '@reduxjs/toolkit/query/react';
import { REHYDRATE } from 'redux-persist';
import { Post } from '../../models/Post';
import { graphqlBaseQuery } from '../graphqlBaseQuery';
import { getPostQuery, getPostsQuery } from './postsQueries';
import { GetPostResponse, GetPostsResponse } from './postsResponses';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: graphqlBaseQuery({
    baseUrl: 'https://graphqlzero.almansi.me/api',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE && action.payload) {
      return action.payload[reducerPath];
    }
  },
  endpoints: builder => ({
    getPosts: builder.query<Post[], void>({
      query: () => ({
        body: getPostsQuery,
      }),
      transformResponse: (response: GetPostsResponse) => response.posts.data,
    }),
    getPost: builder.query<Post, number>({
      query: id => ({
        body: getPostQuery,
        variables: { id },
      }),
      transformResponse: (response: GetPostResponse) => response.post,
    }),
  }),
});

export const { useGetPostQuery, useGetPostsQuery } = postsApi;
