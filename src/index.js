import express from 'express';
import config from 'dotenv';
import { HealthRoute } from './routes';
import { HEALTH_URL } from './constants/route';
import { DEFAULT_PORT } from './constants/config';

config.config();

const app = express();

const port = process.env.PORT || DEFAULT_PORT;

app.use(HEALTH_URL, HealthRoute);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
