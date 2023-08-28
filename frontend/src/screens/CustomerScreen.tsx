//TODO: add toasts for success and error
//TODO: add loading spinner and error and success toasts
import { useEffect, useState } from 'react';
import { Button, Col, Form, ListGroup, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import {
	useGetCustomerByIdQuery,
	useEditCustomerMutation
} from '../slices/customerApiSlice';
const CustomerScreen = () => {
	const { id } = useParams();
	const {
		data: customer,
		isLoading,
		error
	} = useGetCustomerByIdQuery(id || '');
	const [editCustomer, { isLoading: isEditing, error: editError }] =
		useEditCustomerMutation();
	const [name, setName] = useState(customer?.name || '');
	const [displayName, setDisplayName] = useState(
		customer?.displayName || ''
	);
	const [city, setCity] = useState(customer?.city || '');
	const [state, setState] = useState(customer?.state || '');
	const [address, setAddress] = useState(customer?.address || '');
	const [primaryEmail, setPrimaryEmail] = useState(
		customer?.primaryEmail || ''
	);
	const [pincode, setPincode] = useState(customer?.pincode || '');
	const [gst, setGst] = useState(customer?.GST || '');
	const [phone, setPhone] = useState(customer?.phone || '');
	useEffect(() => {
		setName(customer?.name || '');
		setDisplayName(customer?.displayName || '');
		setCity(customer?.city || '');
		setState(customer?.state || '');
		setAddress(customer?.address || '');
		setPrimaryEmail(customer?.primaryEmail || '');
		setPincode(customer?.pincode || '');
		setGst(customer?.GST || '');
		setPhone(customer?.phone || '');
	}, [customer]);
	const navigate = useNavigate();
	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		try {
			const data = await editCustomer({
				_id: customer?._id || '',
				name,
				displayName,
				city,
				state,
				address,
				primaryEmail,
				pincode,
				GST: gst,
				phone
			}).unwrap();
			navigate('/customers');
		} catch (error) {
			console.log(error);
		}
	};
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
						<h1>{customer.displayName}</h1>

						<Row>
							<Col md={4}>
								<ListGroup variant="flush">
									<ListGroup.Item>
										Address: {customer.address}
									</ListGroup.Item>
									<ListGroup.Item>
										City: {customer.city}
									</ListGroup.Item>
									<ListGroup.Item>
										State: {customer.state}
									</ListGroup.Item>
									<ListGroup.Item>
										PinCode: {customer.pincode}
									</ListGroup.Item>
									<ListGroup.Item>
										Phone: {customer.phone}
									</ListGroup.Item>
									<ListGroup.Item>
										email: {customer.primaryEmail}
									</ListGroup.Item>
									<ListGroup.Item>GST: {customer.GST}</ListGroup.Item>
								</ListGroup>
							</Col>
							<Col md={8}>
								<h2>Edit Customer</h2>

								<Form onSubmit={handleSubmit}>
									<Form.Group controlId="name" className="my-2">
										<Form.Label className="my-2">Name</Form.Label>
										<Form.Control
											type="text"
											required={true}
											value={name}
											onChange={(e) => setName(e.target.value)}
											placeholder="Enter name"
										/>
									</Form.Group>
									<Form.Group
										controlId="displayName"
										className="my-2"
									>
										<Form.Label className="my-2">
											Name to be Displayed
										</Form.Label>
										<Form.Control
											type="text"
											required={true}
											value={displayName}
											onChange={(e) => setDisplayName(e.target.value)}
											placeholder="Enter Display Name"
										/>
									</Form.Group>
									<Form.Group controlId="address" className="my-2">
										<Form.Label className="my-2">Address</Form.Label>
										<Form.Control
											type="text"
											value={address}
											onChange={(e) => setAddress(e.target.value)}
											placeholder="Enter Address"
										/>
									</Form.Group>
									<Form.Group controlId="city" className="my-2">
										<Form.Label className="my-2">City</Form.Label>
										<Form.Control
											type="text"
											value={city}
											onChange={(e) => setCity(e.target.value)}
											placeholder="Enter City"
										/>
									</Form.Group>
									<Form.Group controlId="state" className="my-2">
										<Form.Label className="my-2">State</Form.Label>
										<Form.Control
											type="text"
											value={state}
											onChange={(e) => setState(e.target.value)}
											placeholder="Enter State"
										/>
									</Form.Group>
									<Form.Group controlId="pincode" className="my-2">
										<Form.Label className="my-2">PinCode</Form.Label>
										<Form.Control
											type="text"
											value={pincode}
											onChange={(e) => setPincode(e.target.value)}
											placeholder="Enter Pincode"
										/>
									</Form.Group>
									<Form.Group controlId="phone" className="my-2">
										<Form.Label className="my-2">Phone</Form.Label>
										<Form.Control
											type="text"
											value={phone}
											onChange={(e) => setPhone(e.target.value)}
											placeholder="Enter Phone Number"
										/>
									</Form.Group>
									<Form.Group controlId="email" className="my-2">
										<Form.Label className="my-2">
											Primary Email
										</Form.Label>
										<Form.Control
											type="text"
											value={primaryEmail}
											onChange={(e) =>
												setPrimaryEmail(e.target.value)
											}
											placeholder="Enter Primary Email"
										/>
									</Form.Group>
									<Form.Group controlId="gst" className="my-2">
										<Form.Label className="my-2">
											Enter GST Number
										</Form.Label>
										<Form.Control
											type="text"
											value={gst}
											onChange={(e) => setGst(e.target.value)}
											placeholder="Enter GST Number"
										/>
									</Form.Group>
									<Button type="submit" className="my-2">
										Submit
									</Button>
								</Form>
							</Col>
						</Row>
					</>
				)}
			</>
		</>
	);
};

export default CustomerScreen;
