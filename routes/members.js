import { Router } from 'express';
import { body } from 'express-validator';
import { listMembers, createMember, updateMember, deleteMember } from '../controllers/membersController.js';

const router = Router();

router.get('/', listMembers);
router.post('/',
  body('name').isString().notEmpty(),
  body('role').isString().notEmpty(),
  createMember
);
router.put('/:id', updateMember);
router.delete('/:id', deleteMember);

export default router;
