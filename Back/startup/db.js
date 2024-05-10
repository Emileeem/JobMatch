const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('JobMatch', 'JobMatch', 'JobMatch*', {
    host: '127.0.0.2',
    dialect: 'mysqL'
  });

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}