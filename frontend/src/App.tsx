import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<>
			<Header />
			<main className="py-3">
				<Container>
					<Outlet />
				</Container>
			</main>
			<ToastContainer />
		</>
	);
}

export default App;
