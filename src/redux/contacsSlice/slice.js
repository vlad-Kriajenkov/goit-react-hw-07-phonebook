import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://647c337cc0bae2880ad075c5.mockapi.io',
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['User'],
    }),
    addContact: builder.mutation({
      query(contact) {
        return {
          url: '/contacts',
          method: 'POST',
          body: {
            name: contact.name,
            phone: contact.phone,
          },
        };
      },
      invalidatesTags: ['User'],
    }),
    deleteContact: builder.mutation({
      query(id) {
        return {
          url: `/contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['User'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;
