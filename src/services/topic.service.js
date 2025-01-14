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