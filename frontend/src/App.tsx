import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<>
			<Row>
				<Col md={2}>
					<Sidebar />
				</Col>
				<Col md={10}>
					<main className="py-3">
						<Container>
							<Outlet />
						</Container>
					</main>
				</Col>
			</Row>
			<ToastContainer />
		</>
	);
}

export default App;
