import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useGetCustomerByIdQuery } from '../slices/customerApiSlice';
const CustomerScreen = () => {
	const { id } = useParams();
	const {
		data: customer,
		isLoading,
		error
	} = useGetCustomerByIdQuery(id || '');
	console.log(customer);
	return (
		<>
			{isLoading && <Loader />}
			{error && (
				<Message variant="danger">{JSON.stringify(error)}</Message>
			)}
			{!customer && <Message variant="info">No Customer</Message>}
			<>
				{customer && (
					<>
						<h1>{customer.name}</h1>

						<Row>
							<Col md={4}>
								<Row>
									<Col>
										<strong>Address: </strong>
										{customer.address}
									</Col>
								</Row>
							</Col>
							<Col md={8}>Column 2</Col>
						</Row>
					</>
				)}
			</>
		</>
	);
};

export default CustomerScreen;
