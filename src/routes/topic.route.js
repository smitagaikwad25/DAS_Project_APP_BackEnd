import express from 'express';
import * as topicController from '../controllers/topic.controller';
import {topicValidator} from '../validators/user.validator';
import {userAuth} from '../middlewares/auth.middleware'


const router = express.Router();

router.post('/', topicValidator, userAuth, topicController.createTopic);

router.get('/', userAuth, topicController.getAllTopics);



export default router;
