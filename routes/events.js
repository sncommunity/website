import { Router } from 'express';
import { body } from 'express-validator';
import { listEvents, getEvent, createEvent, updateEvent, deleteEvent } from '../controllers/eventsController.js';

const router = Router();

router.get('/', listEvents);
router.get('/:id', getEvent);
router.post('/',
  body('title').isString().notEmpty(),
  body('date').isISO8601(),
  createEvent
);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;
