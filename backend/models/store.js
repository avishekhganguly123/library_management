const { DataTypes } = require('sequelize');
const sequelize = require('./index');
  
    const store = sequelize.define('store', {
      
        bookID: {
         type: Sequelize.INTEGER
      },
      title: {
         type: Sequelize.STRING
      },
      authors: {
         type: Sequelize.STRING
      },
      average_rating: {
        type: Sequelize.STRING
      },
      is_bn: {
        type: Sequelize.INTEGER
      },
      is_bn13: {
        type: Sequelize.INTEGER
      },
      language_code: {
        type: Sequelize.STRING
      },
      num_pages: {
        type: Sequelize.INTEGER
      },
      ratings_count: {
        type: Sequelize.INTEGER
      },
      text_reviews_count: {
        type: Sequelize.INTEGER
      },
      publisher: {
        type: Sequelize.INTEGER
      },
    });  
      
    module.exports = store;   




