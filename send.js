import { connect } from 'amqplib'

async function main() {
  var queue = 'documents';
  var msg = '{"id":"uuid_unico_nessa_porra","data":"data hehe"}';
  const connection = await connect('amqp://localhost:5672');
  const channel = await connection.createChannel();
  channel.assertQueue(queue, { durable: false });
  channel.sendToQueue(queue, Buffer.from(msg), {
    contentType: 'application/json',
    contentEncoding: 'utf8'
  });
  setTimeout(() => {
    channel.close();
    connection.close();
  }, 500);
}

main();
