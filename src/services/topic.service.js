import { Topic } from "../models/topic";

export let createTopic = async (name, description) => {
    try {
        return await Topic.create({ name, description });
    } catch (error) {
        throw new Error('Failed to create topic');
    }
};