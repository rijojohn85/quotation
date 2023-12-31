import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import './styles/bootstrap.custom.css';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import CustomerListScreen from './screens/CustomerListScreen';
import CustomerScreen from './screens/CustomerScreen';
import NewQuotationScreen from './screens/NewQuotationScreen';
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="/" index={true} element={<HomeScreen />} />
			<Route
				path="/customers"
				index={true}
				element={<CustomerListScreen />}
			/>
			<Route path="/customers/:id" element={<CustomerScreen />} />
			<Route path="/new-quotation" element={<NewQuotationScreen />} />
		</Route>
	)
);
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
