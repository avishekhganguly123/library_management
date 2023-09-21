const express = require('express');
var bodyParser = require('body-parser')
const axios = require('axios');
const {engine} = require('express-handlebars');
const mysql=require('mysql');
const app = express();
//import store from './models/store';
app.use(bodyParser.json());
const Store  = require('./models/store');
app.engine('.hbs',engine({
  extname:'.hbs',
  defaultLayout:false,
  layoutsDir:'views'
}))

app.set('view engine','.hbs')


const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',
//   password: '1234Asdf',
//   database: 'library_management' // Your database name
// });

// connection.connect((err) => {
//   if (err) {
//       console.error('Error connecting to MySQL: ', err);
//       return;
//   }

//     console.log('Connected to MySQL');
// });

// module.exports = connection;

app.get('/data-import', async (req, res) => {
  try {
    const frappeApiResponse = await axios.get('https://frappe.io/api/method/frappe-library');
    const responseData = frappeApiResponse.data;
    const dt=responseData.message;
    //const dt=dbData[0];
    for(var i=0;i<dt.length;i++){

      const post=new store({
         bookID:dt[i]['bookID'],
         title:dt[i]['title'],
         authors:dt[i]['authors'],
         average_rating:dt[i]['average_rating'],
         is_bn:dt[i]['is_bn'],
         is_bn13:dt[i]['is_bn13'],
         language_code:dt[i]['language_code'],
         num_pages:dt[i]['num_pages'],
         ratings_count:dt[i]['ratings_count'],
         text_reviews_count:dt[i]['text_reviews_count'],
         publisher:dt[i]['publisher']
      });
      Store.build(post);
      //post.save();
      Store.save();

    }
   

    //console.log(responseData.message[0]);
    //  res.render('index',{
    //       posts:responseData.message
    //  })
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data from the Frappe API.' });
  }
});



// app.get('/authors', (req, res) => {
//   db.query('SELECT * FROM authors', (err, results) => {
//       if (err) {
//           res.status(500).send('Error retrieving authors');
//       } else {
//           res.json(results);
//       }
//   });
// });

// sql restAPI

// app.post('/users', (req, res) => {
//   const { book, author } = req.body;

//   pool.query('INSERT INTO users (name, emailaddress) VALUES (?, ?)', [book, author], (error, results) => {
//       if (error) {
//           console.error(error);
//           res.status(500).send('Error creating user');
//       } else {
//           res.status(200).send('User is created successfully');
//       }
//   });
// });

// Retrieve all users
// app.get('/users', (req, res) => {
//   pool.query('SELECT * FROM users', (error, results) => {
//       if (error) {
//           console.error(error);
//           res.status(500).send('Error retrieving users');
//       } else {
//           res.status(200).json(results);
//       }
//   });
// });

// Update a user by ID
// app.put('/users/:id', (req, res) => {
//   const id = req.params.id;
//   const { name, emailaddress } = req.body;

//   pool.query('UPDATE users SET name = ?, emailaddress = ? WHERE id = ?', [name, emailaddress, id], (error, results) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send('Error updating user');
//     } else {
//       res.status(200).send('User updated successfully');
//     }
//   });
// });


// Delete a user by ID
// app.delete('/users/:id', (req, res) => {
//   const id = req.params.id;

//   pool.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
//       if (error) {
//           console.error(error);
//           res.status(500).send('Error deleting user');
//   } else {
//       res.status(200).send('User deleted successfully');
//   }
//   });
// });



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})


