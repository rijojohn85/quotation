import { useGetCustomersQuery } from '../slices/customerApiSlice';

const CustomerListScreen = () => {
	const {
		data: customers,
		error,
		isLoading
	} = useGetCustomersQuery();
	console.log(customers);
	return <div>CustomerListScreen</div>;
};

export default CustomerListScreen;
