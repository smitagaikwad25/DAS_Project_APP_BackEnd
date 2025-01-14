const { DataTypes } = require('sequelize');
import sequelize from '../config/database'; // Assuming db.js exports the Sequelize instance
import { Topic } from './topic';

const Subtopic = sequelize.define('Subtopic', {
  subTopic_Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  program: {
    type: DataTypes.STRING,
  },
  youtubeLink: {
    type: DataTypes.STRING,
  },
  leetcodeLink: {
    type: DataTypes.STRING,
  },
  articleLink: {
    type: DataTypes.STRING,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  topicId: {
    type: DataTypes.INTEGER,
    references: {
      model: Topic,
      key: 'id',
    },
    allowNull: false,
  },
});

Topic.hasMany(Subtopic, { foreignKey: 'topicId', onDelete: 'CASCADE' });
Subtopic.belongsTo(Topic, { foreignKey: 'topicId' });

module.exports = Subtopic;
