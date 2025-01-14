import HttpStatus from 'http-status-codes';
import * as TopicService from '../services/topic.service';

export let createTopic = async (req, res) => {
    try {
      const { name, description } = req.body;
      const topic = await TopicService.createTopic(name, description);
      res.status(HttpStatus.ACCEPTED).json(topic);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message || 'Failed to create topic' });
    }
  };