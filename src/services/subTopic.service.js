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

export let getSubtopicsByTopicId = async (topicId) => {
    return Subtopic.findAll({ where: { topicId } });
};

export let getSubtopicById = async (id) => {
    const subtopic = await Subtopic.findByPk(id, {
        include: {
            model: Topic,
            attributes: ['name'],
        },
    });

    if (!subtopic) {
        throw new Error('Subtopic not found');
    }
    return subtopic;
};

export let updateSubtopic = async (id, data) => {
    const subtopic = await Subtopic.findByPk(id);

    if (!subtopic) {
        throw new Error('Subtopic not found');
    }
    subtopic.subTopic_Name = data.subTopic_Name || subtopic.subTopic_Name,
        subtopic.program = data.program || subtopic.program,
        subtopic.youtubeLink = data.youtubeLink || subtopic.youtubeLink,
        subtopic.leetcodeLink = data.leetcodeLink || subtopic.leetcodeLink,
        subtopic.articleLink = data.articleLink || subtopic.articleLink,

        await subtopic.save();
    return subtopic;
};


export let deleteSubtopic = async (id) => {
    const subtopic = await Subtopic.findByPk(id);

    if (!subtopic) {
        throw new Error('Subtopic not found');
    }
    await subtopic.destroy();
};


export let isActiceSubtopic = async (id) => {
    const subtopic = await Subtopic.findByPk(id);

    if (!subtopic) {
        throw new Error('Subtopic not found');
    }
    if (Subtopic) {
        Subtopic.is_Active = !Subtopic.is_Active;
        await Subtopic.save();
    }

};
