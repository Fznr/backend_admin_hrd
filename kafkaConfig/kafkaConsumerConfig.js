import { Kafka } from 'kafkajs';

// Konfigurasi Kafka
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
  groupId: 'my-group',
});

const consumer = kafka.consumer({
  groupId: 'my-group'
});

async function startConsumer() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'data_test' });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        console.log(`Received message from topic ${topic}, partition ${partition}, offset ${message.offset}: ${message.value.toString()}`);
    },
  });
}

export { startConsumer };