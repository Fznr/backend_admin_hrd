import express from 'express'
import router from './routers/adminHrdRouter.js';
import { startConsumer } from './kafkaConfig/kafkaConsumerConfig.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(router);

startConsumer();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});