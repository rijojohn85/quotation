import { Card } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';

const NewQuotationScreen = () => {
	return (
		<Card className="my-3 p-3 rounded">
			<Card.Header>
				<Card.Title>New Quotation</Card.Title>
			</Card.Header>
			<Card.Body>
				<SearchBar />
			</Card.Body>
		</Card>
	);
};

export default NewQuotationScreen;
