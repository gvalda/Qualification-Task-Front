import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { POSTS_DOMAIN } from '../../config';

const baseQuery = fetchBaseQuery({ baseUrl: POSTS_DOMAIN });

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 });

export const postApi = createApi({
  reducerPath: 'posts',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Post'],
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => ({ url: 'posts' }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Posts', id })),
              { type: 'Posts', id: 'LIST' },
            ]
          : [{ type: 'Posts', id: 'LIST' }],
    }),
    getPost: build.query({
      query: ({ id }) => ({ url: `posts/${id}` }),
      providesTags: ({ id } = {}) => [{ type: 'Post', id: id }],
    }),
    createPost: build.mutation({
      query: (body) => ({
        url: 'posts',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery, useCreatePostMutation } =
  postApi;
