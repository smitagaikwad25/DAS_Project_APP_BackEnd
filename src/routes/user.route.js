import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator,loginValidator } from '../validators/user.validator';


const router = express.Router();

router.post('/', newUserValidator,  userController.userRegistration);

router.post('/admin', newUserValidator, userController.adminRegistration);


router.post('/login', loginValidator, userController.login);

export default router;
