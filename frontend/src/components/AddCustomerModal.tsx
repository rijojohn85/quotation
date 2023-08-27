import { Form, Modal } from 'react-bootstrap';

interface AddCustomerModalProps {
	onDimiss: () => void;
}
const AddCustomerModal = ({ onDimiss }: AddCustomerModalProps) => {
	const handleSubmit = () => {
		console.log('submit');
	};
	return (
		<Modal show={true} onHide={onDimiss}>
			<Modal.Header closeButton>
				<Modal.Title>Add Customer</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={handleSubmit}></Form>
			</Modal.Body>
		</Modal>
	);
};

export default AddCustomerModal;
