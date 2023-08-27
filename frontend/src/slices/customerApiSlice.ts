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
		}),
		addCustomer: builder.mutation<Customer, Customer>({
			query: (customer) => ({
				url: CUSTOMER_URL,
				method: 'POST',
				body: customer
			})
		}),
		editCustomer: builder.mutation<Customer, Customer>({
			query: (customer) => ({
				url: CUSTOMER_URL,
				method: 'PUT',
				body: customer
			})
		}),
		getCustomerById: builder.query<Customer, string>({
			query: (id) => ({
				url: `${CUSTOMER_URL}/${id}`
			}),
			keepUnusedDataFor: 0
		})
	})
});

export const {
	useGetCustomerByIdQuery,
	useGetCustomersQuery,
	useAddCustomerMutation,
	useEditCustomerMutation
} = customerApiSlice;
