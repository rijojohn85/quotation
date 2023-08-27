import { CUSTOMER_URL } from '../constants';
import type { Customer } from '../types/customer';
import { apiSlice } from './apiSlice';

export const customerApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getCustomers: builder.query<Customer[], void>({
			query: () => ({
				url: CUSTOMER_URL
			}),
			keepUnusedDataFor: 5
		})
	})
});

export const { useGetCustomersQuery } = customerApiSlice;
