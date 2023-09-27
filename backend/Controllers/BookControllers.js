const Store = require('../models/Store');
const Member = require('../models/Member');
const axios = require('axios');

const url='https://frappe.io/api/method/frappe-library';

const SaveBooks = async(req,res)=>{
   try{
    const resposeData = await axios.get(url);
    const data = resposeData.data;
    const message = data.message;
   // console.log(message[0].bookID)

    for (let i = 0; i < message.length; i++) {
        await Store.create({
          bookID: message[i].bookID,
          title: message[i].title,
          authors: message[i].authors,
          average_rating: message[i].average_rating,
          isbn: message[i].isbn,
          isbn13: message[i].isbn13,
          language_code: message[i].language_code,
          num_pages: message[i].num_pages,
          ratings_count: message[i].ratings_count,
          text_reviews_count: message[i].text_reviews_count,
          publication_date: message[i].publication_date,
          publisher: message[i].publisher
        });


   }
   res.status(201).json({"message":"data fetched"});
}
catch(err){
    console.log(err);
  }
}

const getBooks=async(req,res)=>{
    try{
        const data = await Store.find();
        res.status(200).json({data});
    }
    catch(err){
        res.status(404).json({err});
    }
  
}

const issueBooks = async(req,res)=>{
  try{
    const data = req.body;
    const memberID = data.Id;
    const bookId = data.bookID;
    const member = await Member.findOne({memberID:memberID});
    member.books.push(bookId);
    console.log(member);

    const store = await Store.findOne({bookID:bookId});
    if(store.quantity>0){
      store.quantity--;
      store.rented = true;
    }else{
      store.available = false;
    }
    await store.save()

    res.status(200).json({message:"Book issued Successfully"})
  }
  catch(err){
      res.status(500).json({err})
  }
}

const deleteBooks = async(req,res)=>{
  try{
    await Store.deleteMany({})
    res.status(200).json({message:"books deleted"})
  }
  catch(e){
   res.status(500).json({e})
  }
}

module.exports = {getBooks,SaveBooks,issueBooks,deleteBooks};
