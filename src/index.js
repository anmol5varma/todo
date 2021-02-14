import express from 'express';
import config from 'dotenv';
import bodyParser from 'body-parser';
import { HealthRoute, TodoRoute } from './routes';
import { HEALTH_URL, TODO_URL } from './constants/route';
import { DEFAULT_PORT } from './constants/config';

config.config();

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || DEFAULT_PORT;

app.use(HEALTH_URL, HealthRoute);
app.use(TODO_URL, TodoRoute);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
