const express = require('express');
const mongoose = require('mongoose');
const BookRoutes = require('./Routes/BookRoutes');
const MemberRoutes = require('./Routes/MemberRoutes');

const app = express();

mongoose.connect('mongodb+srv://abishekganguly123:frappe@cluster0.lpcfiwh.mongodb.net/frappe?retryWrites=true&w=majority', {
  useNewUrlParser: true
}).then(()=>{
  console.log("Database successfully connected!!");
}).catch(() => {
  console.log("Error in connecting database!!")
});

app.use(express.json());

app.use('/api', BookRoutes);
app.use('/api', MemberRoutes);

const PORT = 5000;

app.listen(PORT, ()=>{
  console.log('Backend server started...')
})