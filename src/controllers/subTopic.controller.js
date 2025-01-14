import HttpStatus from 'http-status-codes';
import * as subTopicService from '../services/subTopic.service';

export let createSubtopic = async (req, res) => {
    try {
      const subtopic = await subTopicService.createSubtopic(req.params.topicid,req.body);
      res.status(HttpStatus.OK).json(subtopic);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ error: error.message || 'Failed to create subtopic' });
    }
  };

export let getAllSubtopics = async (req, res) => {
    try {
      const { topicid } = req.params;
      const subtopic = await subTopicService.getSubtopicById(topicid);
      res.status(HttpStatus.OK).json(subtopic);
    } catch (error) {
      res.status(HttpStatus.BAD_GATEWAY).json({ error: error.message || 'Failed to fetch subtopic' });
    }
  };
  