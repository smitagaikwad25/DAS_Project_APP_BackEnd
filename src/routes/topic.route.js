import express from 'express';
import * as topicController from '../controllers/topic.controller';
import {topicValidator} from '../validators/user.validator';
import {userAuth} from '../middlewares/auth.middleware'


const router = express.Router();

router.post('/', topicValidator, userAuth, topicController.createTopic);

router.get('/', userAuth, topicController.getAllTopics);

router.get('/:id', userAuth, topicController.getTopicById);

router.put('/:id', userAuth, topicController.updateTopic);

router.delete('/:id', userAuth, topicController.deleteTopic);

export default router;
