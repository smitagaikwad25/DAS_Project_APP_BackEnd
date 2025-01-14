import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
  
    next();
  }
};

export const loginValidator = (req, res, next) => {
  const schema = Joi.object({
   
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
  
    next();
  }
};

export const topicValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
  
    next();
  }
};


const subtopicSchema = Joi.object({
  subTopic_Name: Joi.string().required(),
  program: Joi.string().allow(null, '').max(500).messages({
    'string.max': 'Program description must be less than 500 characters',
  }),
  youtubeLink: Joi.string().uri().allow(null, '').messages({
    'string.uri': 'YouTube link must be a valid URL',
  }),
  leetcodeLink: Joi.string().uri().allow(null, '').messages({
    'string.uri': 'LeetCode link must be a valid URL',
  }),
  articleLink: Joi.string().uri().allow(null, '').messages({
    'string.uri': 'Article link must be a valid URL',
  }),
  isActive: Joi.boolean().required().messages({
    'boolean.base': 'isActive must be a boolean value',
  }),
  topicId: Joi.number().integer().required().messages({
    'number.base': 'Topic ID must be a number',
    'any.required': 'Topic ID is required',
  }),
});

// Middleware to validate requests
const validateSubtopic = (req, res, next) => {
  const { error } = subtopicSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ errors: error.details.map(err => err.message) });
  }
  next();
};

