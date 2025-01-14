import HttpStatus from 'http-status-codes';
import * as subTopicService from '../services/subTopic.service';

export let createSubtopic = async (req, res) => {
    try {
        if (req.body.role === 'Admin') {
            res.status(HttpStatus.UNAUTHORIZED).json({ error: error.message });
        }
        const subtopic = await subTopicService.createSubtopic(req.params.topicid, req.body);
        res.status(HttpStatus.OK).json(subtopic);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message || 'Failed to create subtopic' });
    }
};

export let getAllSubtopics = async (req, res) => {
    try {
        const { topicid } = req.params;
        const subtopic = await subTopicService.getSubtopicsByTopicId(topicid);
        res.status(HttpStatus.OK).json(subtopic);
    } catch (error) {
        res.status(HttpStatus.BAD_GATEWAY).json({ error: error.message || 'Failed to fetch subtopic' });
    }
};

export let getSubtopicById = async (req, res) => {
    try {
        const { subtopicid } = req.params;
        const subtopic = await subTopicService.getSubtopicById(subtopicid);
        res.status(HttpStatus.OK).json(subtopic);
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message || 'Failed to fetch subtopic' });
    }
};

export let updateSubtopic = async (req, res) => {
    try {
        if (req.body.role === 'Admin') {
            res.status(HttpStatus.UNAUTHORIZED).json({ error: error.message });
        }
        const { subtopicid } = req.params;
        const subtopic = await subTopicService.updateSubtopic(subtopicid, req.body);
        res.status(HttpStatus.OK).json({ message: 'Subtopic updated successfully', subtopic });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message || 'Failed to update subtopic' });
    }
};

export let deleteSubtopic = async (req, res) => {
    try {
        if (req.body.role === 'Admin') {
            res.status(HttpStatus.UNAUTHORIZED).json({ error: error.message });
        }
        const { subtopicid } = req.params;
        await subTopicService.deleteSubtopic(subtopicid);
        res.status(HttpStatus.OK).json({ message: 'Subtopic deleted successfully' });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message || 'Failed to delete subtopic' });
    }
};

export let isActiceSubtopic = async (req, res) => {
    try {
        if (req.body.role === 'Admin') {
            res.status(HttpStatus.UNAUTHORIZED).json({ error: error.message });
        }
        const { subtopicid } = req.params;
        await subTopicService.isActiceSubtopic(subtopicid);
        res.status(HttpStatus.OK).json({ message: 'Subtopic status changed successfully' });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message || ' Operation failed' });
    }
};
