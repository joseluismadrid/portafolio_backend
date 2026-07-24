import { Router } from 'express';
import { ContactController } from '../controller/contact.controller.js';

const router = Router();

const contactController =
  new ContactController();

router.post('/',contactController.enviar);

export default router;