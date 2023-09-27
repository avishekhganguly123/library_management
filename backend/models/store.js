const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
  bookID:{
    type: String
  },
  title:{
    type: String
  },
  authors:{
    type:String
  },
  average_rating:{
    type: String
  },
  isbn:{
    type: String
  },
  isbn13:{
    type: String
  },
  language_code:{
    type: String
  },
  num_pages:{
    type: String
  },
  ratings_count:{
    type: String
  },
  text_reviews_count:{
    type: String
  },
  publication_date:{
    type: String
  },
  publisher:{
    type: String
  },
  rented:{
    type: Boolean,
    default: false
  },
  available:{
    type: Boolean,
    default: true
  },
  quantity:{
    type: Number,
    default: 10
  }
});

const Store = mongoose.model('Store',StoreSchema);
module.exports = Store;