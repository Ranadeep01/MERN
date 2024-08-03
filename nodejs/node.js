const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const send = require('send')
const { Schema } = require('express');
const { log } = require('console');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

mongoose.connect('mongodb://localhost:27017/Auth')
  .then(() => { console.log('Database Connection successful..') })
  .catch((err) => { console.log("Database connection unsuccessful..", err) });

const schema = new mongoose.Schema({
  firstName: { type: String, required: true, unique: false },
  lastName: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: false },
  phone: { type: String, required: true, unique: false }
});

const Auth = mongoose.model('logindatas', schema);

app.post('/loginData', async (req, res)=>{
  const {firstName, lastName, email, password, phone} = req.body;
  const user = new Auth({firstName, lastName, email, password, phone});
  await user.save();
  res.send("Data saved successfully");
})

app.get('/', async (req, res) => {
    try{
      const data = await Auth.find({});
      res.status(200).json(data);
    }
    catch(err){
      res.status(500).send("Error fetching login details");
    }
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
