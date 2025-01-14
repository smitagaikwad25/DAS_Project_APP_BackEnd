import HttpStatus from 'http-status-codes';
import * as TopicService from '../services/topic.service';

export let createTopic = async (req, res) => {
    try {
        const { name, description, role } = req.body;
        if (role != 'Admin') {
            res.status(HttpStatus.UNAUTHORIZED).json({ error: error.message });
        }
        const topic = await TopicService.createTopic(name, description);
        res.status(HttpStatus.ACCEPTED).json(topic);
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message || 'Failed to create topic' });
    }
};

export let getAllTopics = async (req, res) => {
    try {
        const topics = await TopicService.getAllTopics({
            
        });
        res.status(200).json(topics);
    } catch (error) {
        res.status(500).json({ error: error.message || 'Failed to fetch topics' });
    }
};

export let getTopicById = async (req, res) => {
    try {
      const { id } = req.params;
      const topic = await TopicService.getTopicById(id);
      res.status(HttpStatus.OK).json(topic);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message || 'Failed to fetch topic' });
    }
  };

export let updateTopic = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
      const topic = await TopicService.updateTopic(id, name, description);
      res.status(HttpStatus.ACCEPTED).json({ message: 'Topic updated successfully', topic });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message || 'Failed to update topic' });
    }
  };

export let deleteTopic = async (req, res) => {
    try {
      const { id } = req.params;
      await TopicService.deleteTopic(id);
      res.status(HttpStatus.OK).json({ message: 'Topic deleted successfully' });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message || 'Failed to delete topic' });
    }
  };
