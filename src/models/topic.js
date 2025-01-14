const { DataTypes } = require('sequelize');
import sequelize from '../config/database';
import { Subtopic } from './subTopic';

const Topic = sequelize.define('Topic', {
    topicId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    tableName: 'topics',
    timestamps: true,
});

// Topic.hasMany(Subtopic, { foreignKey: 'topicId', onDelete: 'CASCADE' });
// Subtopic.belongsTo(Topic, { foreignKey: 'topicId' });

export { Topic };
