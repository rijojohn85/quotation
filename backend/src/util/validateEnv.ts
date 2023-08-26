import { cleanEnv } from 'envalid';
import 'dotenv/config';
import { port, str } from 'envalid/dist/validators';

export default cleanEnv(process.env, {
	PORT: port(),
	MONGO_CONNECTION_STRING: str()
});
