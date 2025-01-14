import express from 'express';
import * as subtopicController from '../controllers/subTopic.controller';
import {validateSubtopic} from '../validators/user.validator';
import {userAuth} from '../middlewares/auth.middleware'


const router = express.Router();

router.post('/topic/:topicid', validateSubtopic, userAuth, subtopicController.createSubtopic);

router.get('/topic/:topicid', userAuth, subtopicController.getAllSubtopics);

router.get('/:subtopicid', userAuth, subtopicController.getSubtopicById);

router.put('/:subtopicid', subtopicController.updateSubtopic);

router.put('/:subtopicid/isactive', subtopicController.isActiceSubtopic);

router.delete('/:subtopicid', subtopicController.deleteSubtopic);


export default router;
