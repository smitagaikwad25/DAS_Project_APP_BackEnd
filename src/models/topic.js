const { DataTypes } = require('sequelize');
import sequelize from '../config/database';

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

export { Topic };
