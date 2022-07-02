import { connection } from '../../infra/database/index.js';

const { documents } = connection;

export function onDoucmentChange(message) {
  const document = JSON.parse(message.content.toString());
  const idx = documents.findIndex(i => i.id === document.id);
  if (idx === -1) {
    // responder "não deu".
  }
  documents[idx] = document;
}