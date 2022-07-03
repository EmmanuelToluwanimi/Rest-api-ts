import express from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes';

const PORT = config.get<number>('port') || 5000;

const app = express();


app.listen(PORT, async () => {

  logger.info(`Server is running at http://localhost:${PORT}`);

  await connect();
  
  routes(app);
});