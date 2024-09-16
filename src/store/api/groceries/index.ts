import { Platform } from 'react-native';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGroceryItem } from 'types';

const BASE_URL = Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000';

const tagTypes = ['Groceries'];

type CreateItemPayload = Pick<IGroceryItem, 'name' | 'category' | 'count'>;
type EditItemPayload = Pick<IGroceryItem, 'id' | 'name' | 'category' | 'count'>;
type CompleteItemPayload = Pick<IGroceryItem, 'id' | 'completed'>;
type RemoveItemPayload = Pick<IGroceryItem, 'id'>;

// TODO: Renmae to groceriesApi
export const groceriesApi = createApi({
  tagTypes,
  reducerPath: 'groceriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    list: builder.query<IGroceryItem[], any>({
      query: () => '/list',
      providesTags: tagTypes,
    }),

    createItem: builder.mutation<any, CreateItemPayload>({
      query: (data) => ({
        url: `/list`,
        method: 'POST',
        body: {
          ...data,
          completed: false,
          id: `${Date.now()}`,
          createdAt: Date.now(),
        },
      }),
      invalidatesTags: tagTypes,
    }),

    updateItem: builder.mutation<any, EditItemPayload>({
      query: ({ id, ...data }) => ({
        body: data,
        method: 'PATCH',
        url: `/list/${id}`,
      }),
      invalidatesTags: tagTypes,
    }),

    completeItem: builder.mutation<any, CompleteItemPayload>({
      query: ({ id, completed }) => ({
        method: 'PATCH',
        url: `/list/${id}`,
        body: { completed },
      }),
      invalidatesTags: tagTypes,
    }),

    removeItem: builder.mutation<any, RemoveItemPayload>({
      query: ({ id }) => ({
        method: 'DELETE',
        url: `/list/${id}`,
      }),
      invalidatesTags: tagTypes,
    }),
  }),
});

export const {
  useListQuery,
  useLazyListQuery,
  useCreateItemMutation,
  useRemoveItemMutation,
  useUpdateItemMutation,
  useCompleteItemMutation,
} = groceriesApi;
