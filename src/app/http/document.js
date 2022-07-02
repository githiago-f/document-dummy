import { connection } from '../../infra/database/index.js';
import { storage } from '../../infra/storage/index.js';

export function getDocument(req, res) {
}

export function createDocument(req, res) {
  const { writer, path } = storage.getWriter(req.body.id);
  writer.write(req.body.document);
  const idx = connection.documents.push({
    id: req.body.id,
    path: path
  });
  writer.close();
  res.status(200).json(connection.documents[idx]);
}