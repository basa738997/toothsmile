import express from 'express';
import { mailsender } from '../utils/sendmail.js';

const router = express.Router();

router.post('/send-mail', mailsender);

export default router;
