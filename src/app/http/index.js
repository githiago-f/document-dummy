import { Router } from 'express';
import { createDocument, getDocument } from './document.js';

export const documentsRoute = () => {
  const router = Router();
  router.get('/', getDocument);
  router.post('/', createDocument);
  return router;
};

