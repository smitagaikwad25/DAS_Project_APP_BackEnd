const { DataTypes } = require('sequelize');
import sequelize from '../config/database';

const User = sequelize.define('user', {
  userId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('Admin', 'User'),
    allowNull: false
  },
  password: DataTypes.STRING
});

export {User}