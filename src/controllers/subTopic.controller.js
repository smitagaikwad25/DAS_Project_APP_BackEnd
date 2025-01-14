import HttpStatus from 'http-status-codes';
import * as subTopicService from '../services/subTopic.service';

exports.createSubtopic = async (req, res) => {
    try {
     req.body
      const subtopic = await subTopicService.createSubtopic(req.params.topicid,req.body);
      res.status(HttpStatus.OK).json(subtopic);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ error: error.message || 'Failed to create subtopic' });
    }
  };