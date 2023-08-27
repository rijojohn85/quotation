import { RequestHandler } from 'express';
import customer from '../models/customer';
import createHttpError from 'http-errors';

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
		const existCustomer = await customer.findOne({ name: name });
		if (existCustomer) {
			throw createHttpError(409, 'Customer name already exists');
		}
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
interface UpdateCustomerParams {
	id: string;
}
interface UpdateCustomerBody {
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

export const updateCustomer: RequestHandler<
	UpdateCustomerParams,
	unknown,
	UpdateCustomerBody,
	unknown
> = async (req, res, next) => {
	const id: string = req.params.id;
	const {
		name,
		displayName,
		address,
		city,
		state,
		pincode,
		phone,
		primaryEmail,
		GST
	} = req.body;
	try {
		const existingCustomer = await customer.findOne({ _id: id });
		if (!existingCustomer) {
			throw createHttpError(404, 'Customer not found');
		}
		const nameCustomer = await customer.findOne({ name: name });
		if (nameCustomer && nameCustomer._id.toString() !== id) {
			throw createHttpError(409, 'Customer name already exists');
		}
		const updatedCustomer = await customer.findByIdAndUpdate(id, {
			name: name || existingCustomer.name,
			displayName: displayName || existingCustomer.displayName,
			address: address || existingCustomer.address,
			city: city || existingCustomer.city,
			state: state || existingCustomer.state,
			pincode: pincode || existingCustomer.pincode,
			phone: phone || existingCustomer.phone,
			primaryEmail: primaryEmail || existingCustomer.primaryEmail,
			GST: GST || existingCustomer.GST
		});
		res.status(201).json(updatedCustomer);
	} catch (error) {
		next(error);
	}
};

export const getCustomerById: RequestHandler = async (
	req,
	res,
	next
) => {
	const id: string = req.params.id;
	try {
		const customerFound = await customer.findById(id);
		res.status(200).json(customerFound);
	} catch (error) {
		next(error);
	}
};
