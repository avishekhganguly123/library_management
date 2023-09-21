const Sequelize = require('sequelize');
const sequelize = new Sequelize('library_management', 'root', '1234Asdf', {
    HOST: '127.0.0.1',
    // dialect: 'mysql',
    USER: 'root',
PASSWORD: '1234Asdf',
DB: 'testdb',
dialect: 'mysql', 
pool: {
max: 5,
min: 0,
acquire: 30000,
idle: 10000
}
   // operatorsAliases: false,
  
    // pool: {
    //   max: 5,     
    //   min: 0,     
    //   idle: 10000
    // }
  });
  const db = {};
  
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.store = require('./store.model')(sequelize, Sequelize);
  module.exports = sequelize;
  //module.exports = sequelize;

  // config.js
// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('your_database_name', 'your_username', 'your_password', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

// module.exports = sequelize;
