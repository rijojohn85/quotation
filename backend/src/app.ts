import 'dotenv/config';

import express, { NextFunction, Request, Response } from 'express';
import moragn from 'morgan';
import customerRoutes from './routes/customerRoutes';
import createHttpError, { isHttpError } from 'http-errors';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/customer', customerRoutes);

app.use(moragn('dev'));

app.use((_req, _res, next) => {
	next(createHttpError(404, 'End point not found'));
});

app.use(
	(
		error: unknown,
		_req: Request,
		res: Response,
		_next: NextFunction
	) => {
		let errorMessage = 'An unknown error occurred';
		let statusCode = 500;
		if (isHttpError(error)) {
			statusCode = error.statusCode;
			errorMessage = error.message;
		}
		res.status(statusCode).json({ error: errorMessage });
	}
);

export default app;
