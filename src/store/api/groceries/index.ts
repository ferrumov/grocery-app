import { Platform } from 'react-native';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IGroceryItem } from 'types';

const BASE_URL = Platform.OS === 'android' ? 'http://10.0.2.2:3000/' : 'http://localhost:3000/';

const tagTypes = ['Groceries'];

type CreateItemPayload = Pick<IGroceryItem, 'name' | 'category' | 'count'>;
type EditItemPayload = Pick<IGroceryItem, 'id' | 'name' | 'category' | 'count'>;
type CompleteItemPayload = Pick<IGroceryItem, 'id' | 'completed'>;
type RemoveItemPayload = Pick<IGroceryItem, 'id'>;

export const groceriesApi = createApi({
  tagTypes,
  reducerPath: 'groceriesApi',
  keepUnusedDataFor: 0,
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    fetchFn(input, init) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(fetch(input, init));
        }, 2000);
      });
    },
  }),
  endpoints: (builder) => ({
    list: builder.query<IGroceryItem[], any>({
      query: () => 'list',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Groceries' as const, id })),
              { type: 'Groceries', id: 'LIST' },
            ]
          : [{ type: 'Groceries', id: 'LIST' }],
    }),

    createItem: builder.mutation<any, CreateItemPayload>({
      query: (data) => ({
        url: `list`,
        method: 'POST',
        body: {
          ...data,
          completed: false,
          id: `${Date.now()}`,
          createdAt: Date.now(),
        },
      }),
      async onQueryStarted({ ...patch }, api) {
        const patchResult = api.dispatch(
          groceriesApi.util.updateQueryData('list', undefined, (draft) => {
            draft.push({ ...patch, completed: false, id: `${Date.now()}`, createdAt: Date.now() });
          }),
        );

        try {
          await api.queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: [{ type: 'Groceries', id: 'LIST' }],
    }),

    updateItem: builder.mutation<any, EditItemPayload>({
      query: ({ id, ...data }) => ({
        body: { id, ...data },
        method: 'PATCH',
        url: `list/${id}`,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          groceriesApi.util.updateQueryData('list', undefined, (draft) => {
            const updateItem = draft.find((item) => item.id === id);
            if (updateItem) {
              Object.assign(updateItem, patch);
            }
          }),
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (_, __, { id }) => [{ type: 'Groceries', id }],
    }),

    completeItem: builder.mutation<any, CompleteItemPayload>({
      query: ({ id, completed }) => ({
        method: 'PATCH',
        url: `list/${id}`,
        body: { completed },
      }),
      async onQueryStarted({ id, ...patch }, api) {
        const patchResult = api.dispatch(
          groceriesApi.util.updateQueryData('list', undefined, (draft) => {
            const updateItem = draft.find((item) => item.id === id);
            if (updateItem) {
              Object.assign(updateItem, patch);
            }
          }),
        );

        try {
          await api.queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (_, __, { id }) => [{ type: 'Groceries', id }],
    }),

    removeItem: builder.mutation<any, RemoveItemPayload>({
      query: ({ id }) => ({
        method: 'DELETE',
        url: `list/${id}`,
      }),
      async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          groceriesApi.util.updateQueryData('list', undefined, (draft) => {
            const index = draft.findIndex((item) => item.id === id);
            draft.splice(index, 1);
          }),
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (_, __, { id }) => [{ type: 'Groceries', id }],
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
