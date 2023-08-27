import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useAddCustomerMutation } from '../slices/customerApiSlice';
import { Customer } from '../types/customer';
import Loader from './Loader';
import Message from './Message';

interface AddCustomerModalProps {
	onDimiss: () => void;
	onAddCustomerSuccess: (newCustomer: Customer) => void;
}
const AddCustomerModal = ({
	onDimiss,
	onAddCustomerSuccess
}: AddCustomerModalProps) => {
	const [name, setName] = useState('');
	const [displayName, setDisplayName] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [address, setAddress] = useState('');
	const [primaryEmail, setPrimaryEmail] = useState('');
	const [pincode, setPincode] = useState('');
	const [gst, setGst] = useState('');
	const [phone, setPhone] = useState('');
	const [addCustomer, { isLoading, error }] =
		useAddCustomerMutation();

	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		const payload = {
			name: name,
			displayName: displayName,
			city: city,
			state: state,
			address: address,
			primaryEmail: primaryEmail,
			pincode: pincode,
			GST: gst,
			phone: phone
		};
		try {
			const data = await addCustomer(payload).unwrap();
			if (!error) {
				onAddCustomerSuccess(data);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<Modal show={true} onHide={onDimiss}>
			<Modal.Header closeButton>
				<Modal.Title>Add Customer</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{error ? (
					<Message variant="danger">{JSON.stringify(error)}</Message>
				) : null}
				{isLoading ? (
					<Loader />
				) : (
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
						<Form.Group controlId="displayName" className="my-2">
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
							<Form.Label className="my-2">Primary Email</Form.Label>
							<Form.Control
								type="text"
								value={primaryEmail}
								onChange={(e) => setPrimaryEmail(e.target.value)}
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
				)}
			</Modal.Body>
		</Modal>
	);
};

export default AddCustomerModal;
