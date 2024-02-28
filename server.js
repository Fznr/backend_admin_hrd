import express from 'express'
import router from './routers/adminHrdRouter.js';
import { startConsumer } from './kafkaConfig/kafkaConsumerConfig.js';
import cors from 'cors'
import bodyParser from 'body-parser';


const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(cors());
app.use(router);

startConsumer();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});