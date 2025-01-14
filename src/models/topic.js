const { DataTypes } = require('sequelize');
import sequelize from '../config/database';

const Topic = sequelize.define('Topic', {
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

export {Topic};
