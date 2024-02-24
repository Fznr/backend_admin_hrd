import { Kafka } from 'kafkajs';

// Konfigurasi Kafka
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
  groupId: 'my-group',
});

// Buat instance consumer
const consumer = kafka.consumer({
  groupId: 'my-group'
});

// Subscribe dan mulai mengonsumsi pesan
async function startConsumer() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'data_test' });
  console.log('halohalo');
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        console.log(`Received message from topic ${topic}, partition ${partition}, offset ${message.offset}: ${message.value.toString()}`);
    },
  });
}

export { startConsumer };