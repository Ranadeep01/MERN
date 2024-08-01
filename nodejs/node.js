const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const send = require('send')

const app = express();
const port = 8080;

app.use(cors());

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

mongoose.connect('mongodb://localhost:17017/Authentication')
  .then(() => { console.log('Database Connection successful..') })
  .catch((err) => { console.log("Database connection unsuccessful..", err) });

const schema = new mongoose.Schema({
    id: {type: Number, require: true, unique: true},
  firstName: { type: String, required: true, unique: false },
  lastName: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: false },
  phone: { type: String, required: true, unique: false }
});

const Auth = mongoose.model('loginData', schema);

app.get('/', async (req, res) => {
    try {
      const data = await Auth.find({});

      console.log('Login details retrieved:', data);
      
      res.status(200).json(data);
    } catch (err) {
      console.log('Error fetching login details:', err);
      res.status(500).send("Error fetching login details");
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
