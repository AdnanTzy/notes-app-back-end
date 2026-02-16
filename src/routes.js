import express from 'express';
import {
  createNote,
} from './controller.js';
const router = express.Router();
router.post('/notes', createNote);
router.get('/notes', getNotes);

export default router;
