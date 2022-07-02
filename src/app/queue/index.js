import { connect } from 'amqplib';
import { onDoucmentChange } from './document.js';

export default async function () {
  const queue = process.env.QUEUE_NAME;
  const host = process.env.AMQP_HOST;
  try {
    const connection = await connect(host);
    const channel = await connection.createChannel();
    channel.assertQueue(queue, { durable: false });
    const config = { noAck: true };
    channel.consume(queue, onDoucmentChange, config);
    console.log('Listening to queue ' + queue);
  } catch (e) {
    if (e.code === 'ECONNREFUSED') {
      console.log('Could not connect to RabbitMQ server');
    }
    console.error(e);
  }
}

