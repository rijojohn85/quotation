import env from  './util/validateEnv';
import app from './app';

const port = env.PORT;

app.listen(port, () => {
console.log(`Server running on port ${port}`);
});

