import { Topic } from "../models/topic";

export let createTopic = async (name, description) => {
    try {
        return await Topic.create({ name, description });
    } catch (error) {
        throw new Error('Failed to create topic');
    }
};

export let getAllTopics = async () => {
    try {
        return await Topic.findAll();
    } catch (error) {
        throw new Error('Failed to fetch topics');
    }
};

export let getTopicById = async (topicId) => {
    try {
        const topic = await Topic.findByPk(topicId);
        if (!topic) {
            throw new Error('Topic not found');
        }
        return topic;
    } catch (error) {
        throw new Error('Failed to fetch topic');
    }
};

export let updateTopic = async (topicId, name, description) => {
    try {
        const topic = await Topic.findByPk(topicId);
        if (!topic) {
            throw new Error('Topic not found');
        }
        await topic.update({ name, description });
        return topic;
    } catch (error) {
        throw new Error('Failed to update topic');
    }
};

export let deleteTopic = async (topicId) => {
    try {
        const topic = await Topic.findByPk(topicId);
        if (!topic) {
            throw new Error('Topic not found');
        }
        await topic.destroy();
        return topic;
    } catch (error) {
        throw new Error('Failed to delete topic');
    }
};