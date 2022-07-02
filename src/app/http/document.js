import { connection } from '../../infra/database/index.js';

const { documents } = connection;

export async function getDocument(req, res) {
  const { id } = req.query;
  const document = documents.filter(i => i.id === id).pop();
  res.status(document ? 200 : 204).json(document);
}

export async function createDocument(req, res) {
  const { id, document } = req.body;
  const idx = documents.push({ id, document });
  res.status(201).json(documents[idx]);
}