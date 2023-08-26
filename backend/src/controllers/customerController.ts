import { RequestHandler } from 'express';
import customer from '../models/customer';

export const getCustomers: RequestHandler = async (
	_req,
	res,
	next
) => {
	try {
		const customers = await customer.find();
		res.status(201).json(customers);
	} catch (error) {
		next(error);
	}
};
interface CustomerBody {
	name: string;
	displayName: string;
	address?: string;
	city?: string;
	state?: string;
	pincode?: string;
	phone?: string;
	primaryEmail?: string;
	GST?: string;
}
export const createCustomer: RequestHandler<
	unknown,
	unknown,
	CustomerBody,
	unknown
> = async (req, res, next) => {
	const name: string = req.body.name;
	const displayName: string = req.body.displayName;
	const address: string = req.body.address || '';
	const city: string = req.body.city || '';
	const state: string = req.body.state || '';
	const pincode: string = req.body.pincode || '';
	const phone: string = req.body.phone || '';
	const primaryEmail: string = req.body.primaryEmail || '';
	const GST: string = req.body.GST || '';
	try {
		const newCustomer = await customer.create({
			name: name,
			displayName: displayName,
			address: address,
			city: city,
			state: state,
			pincode: pincode,
			phone: phone,
			primaryEmail: primaryEmail,
			GST: GST
		});
		res.status(201).json(newCustomer);
	} catch (error) {
		next(error);
	}
};
