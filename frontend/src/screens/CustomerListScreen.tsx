//TODO create store data to save customers
import { useState } from 'react';
import { Table, Row, Col, Button } from 'react-bootstrap';
import { FaUserPlus } from 'react-icons/fa';
import Loader from '../components/Loader';
import AddCustomerModal from '../components/AddCustomerModal';
import Message from '../components/Message';
import { useGetCustomersQuery } from '../slices/customerApiSlice';
import { Customer } from '../types/customer';
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const CustomerListScreen = () => {
	const onDimiss = () => {
		setShowAddCustomerModal(false);
	};
	const navigate = useNavigate();
	const showModal = () => {
		setShowAddCustomerModal(true);
	};
	const [showAddCustomerModal, setShowAddCustomerModal] =
		useState(false);
	const onAddCustomerSuccess = (newCustomer: Customer) => {
		setShowAddCustomerModal(false);
		navigate(`/customers/${newCustomer._id}`);
	};

	const {
		data: customers,
		isLoading,
		error
	} = useGetCustomersQuery();
	return (
		<>
			<Row>
				<Col md={11}>
					<h1>Customers</h1>
				</Col>
				<Col md={1}>
					<Button
						variant="primary"
						className="mp-3"
						onClick={() => {
							showModal();
						}}
					>
						<FaUserPlus />
					</Button>
				</Col>
			</Row>
			{isLoading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{JSON.stringify(error)}</Message>
			) : !customers ? (
				<Message variant="info">No Customers</Message>
			) : (
				<Table striped bordered hover responsive className="table-sm">
					<thead>
						<tr>
							<td>Name</td>
							<td>City</td>
							<td>GSTN</td>
						</tr>
					</thead>
					<tbody>
						{customers.map((customer) => (
							<LinkContainer
								key={customer._id}
								to={`/customers/${customer._id}`}
							>
								<tr>
									<td>{customer.name}</td>
									<td>{customer.city}</td>
									<td>{customer.GST}</td>
								</tr>
							</LinkContainer>
						))}
					</tbody>
				</Table>
			)}
			{showAddCustomerModal && (
				<AddCustomerModal
					onDimiss={onDimiss}
					onAddCustomerSuccess={onAddCustomerSuccess}
				/>
			)}
		</>
	);
};

export default CustomerListScreen;
