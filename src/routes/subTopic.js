import express from 'express';
import * as subtopicController from '../controllers/subTopic.controller';
import {validateSubtopic} from '../validators/user.validator';
import {userAuth} from '../middlewares/auth.middleware'


const router = express.Router();

router.post('/:topicid', validateSubtopic, userAuth, subtopicController.createSubtopic);

router.get('/:topicid', userAuth, subtopicController.getAllSubtopics);

router.get('/:subtopicid', userAuth, subtopicController.getSubtopicById);


export default router;
