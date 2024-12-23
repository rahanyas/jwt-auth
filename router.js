import express from 'express';
const router = express.Router();
import { registerPage, signUpAuth } from './controller.js';

router.get('/', registerPage);

router.post('/register', signUpAuth)

export default router