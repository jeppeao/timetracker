import express from 'express';
import router from './routes'
import {corsSetup} from './middleware';

const PORT = process.env.SERVER_PORT;

const app = express();
app.use(corsSetup);
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

