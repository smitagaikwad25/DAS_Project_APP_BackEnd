import { DataTypes } from 'sequelize';
import sequelize from '../config/database'; 
import { Topic } from './topic'; 

const Subtopic = sequelize.define('Subtopic', {
  subTopicId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
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
      key: 'topicId', 
    },
    allowNull: false,
  },
});

Topic.hasMany(Subtopic, { foreignKey: 'topicId', onDelete: 'CASCADE' });
Subtopic.belongsTo(Topic, { foreignKey: 'topicId' });

export { Subtopic };
