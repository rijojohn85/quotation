import { Modal } from 'react-bootstrap';

interface AddCustomerModalProps {
	onDimiss: () => void;
}
const AddCustomerModal = ({ onDimiss }: AddCustomerModalProps) => {
	return (
		<Modal show={true} onHide={onDimiss}>
			<Modal.Header closeButton>
				<Modal.Title>Add Customer</Modal.Title>
			</Modal.Header>
			<Modal.Body>Body</Modal.Body>
		</Modal>
	);
};

export default AddCustomerModal;
