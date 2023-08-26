import env from './util/validateEnv';
import app from './app';
import mongoose from 'mongoose';

const port = env.PORT;

mongoose
	.connect(env.MONGO_CONNECTION_STRING)
	.then(() => {
		app.listen(port, () => {
			console.log(`Server running on port ${port}`);
		});
	})
	.catch(() => {
		console.log('Error connecting to MongoDB');
	});
