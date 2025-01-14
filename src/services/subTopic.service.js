import { Topic } from "../models/topic";
import { Subtopic } from "../models/subTopic";

export let createSubtopic = async (topicId, data) => {
    const topic = await Topic.findByPk(topicId);
    if (!topic) {
        throw new Error('Topic not found');
    }
    let subtopic = await Subtopic.create({
        subTopic_Name: data.subTopic_Name,
        program: data.program,
        youtubeLink: data.youtubeLink,
        leetcodeLink: data.leetcodeLink,
        articleLink: data.articleLink,
        topicId: topicId
    })
    return subtopic;
};