import { Router } from 'express';
import { body } from 'express-validator';
import { submitContact } from '../controllers/contactController.js';

const router = Router();

router.post('/',
  body('name').isString().notEmpty(),
  body('email').isEmail(),
  body('message').isString().notEmpty(),
  submitContact
);

export default router;
