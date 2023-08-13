// const express = require('express')
// const axios=require ('axios')
// const app = express();
// // app.engine('.hbs',engine({
// //   extname:'.hbs',
// //   defaultLayout:false,
// //   layoutsDir:'views'
// // }))

// // app.set('view engine','.hbs')


// const apiUrl = "https://frappe.io/api/method/frappe-library";


// app.get('/',async(req,res)=>{
//      const {data} = await axios.get(apiUrl)
//      console.log(data);
//      res.json(data);
//     //  res.render('index',{
//     //       posts:data
//     //  })
// })

// app.listen(3000,()=>{
//   console.log("app is listening on port 3000");
// })

const express = require('express');
const BodyParser =require('body-parser');
const axios = require('axios');
const {engine} = require('express-handlebars');
const mysql=require('mysql');
const app = express();
app.use(BodyParser.json());

app.engine('.hbs',engine({
  extname:'.hbs',
  defaultLayout:false,
  layoutsDir:'views'
}))

app.set('view engine','.hbs')
const db = require('./db');


const PORT = process.env.PORT || 3000;

const connection = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '1234Asdf',
  database: 'library_management' // Your database name
});

connection.connect((err) => {
  if (err) {
      console.error('Error connecting to MySQL: ', err);
      return;
  }

    console.log('Connected to MySQL');
});

module.exports = connection;

app.get('/data-import', async (req, res) => {
  try {
    const frappeApiResponse = await axios.get('https://frappe.io/api/method/frappe-library');
    const responseData = frappeApiResponse.data;
    //res.json(responseData);
    //console.log(responseData.message[0]);
     res.render('index',{
          posts:responseData.message
     })
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data from the Frappe API.' });
  }
});



app.get('/authors', (req, res) => {
  db.query('SELECT * FROM authors', (err, results) => {
      if (err) {
          res.status(500).send('Error retrieving authors');
      } else {
          res.json(results);
      }
  });
});

// sql restAPI

app.post('/users', (req, res) => {
  const { book, author } = req.body;

  pool.query('INSERT INTO users (name, emailaddress) VALUES (?, ?)', [book, author], (error, results) => {
      if (error) {
          console.error(error);
          res.status(500).send('Error creating user');
      } else {
          res.status(200).send('User is created successfully');
      }
  });
});

// Retrieve all users
app.get('/users', (req, res) => {
  pool.query('SELECT * FROM users', (error, results) => {
      if (error) {
          console.error(error);
          res.status(500).send('Error retrieving users');
      } else {
          res.status(200).json(results);
      }
  });
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const { name, emailaddress } = req.body;

  pool.query('UPDATE users SET name = ?, emailaddress = ? WHERE id = ?', [name, emailaddress, id], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error updating user');
    } else {
      res.status(200).send('User updated successfully');
    }
  });
});


// Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const id = req.params.id;

  pool.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
      if (error) {
          console.error(error);
          res.status(500).send('Error deleting user');
  } else {
      res.status(200).send('User deleted successfully');
  }
  });
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})