import { Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
const SearchBar = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId="name" className="my-2">
				<Form.Label className="my-2">
					<FaSearch /> Select Customer
				</Form.Label>
				<Form.Control type="text" placeholder="Enter name" />
			</Form.Group>
		</Form>
	);
};

export default SearchBar;
