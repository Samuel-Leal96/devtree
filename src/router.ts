import { Router } from 'express';
import { createAccount } from './handlers';

const router = Router();

//* Auth and register routes
router.post('/auth/register', createAccount)



export default router;