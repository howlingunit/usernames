import express from 'express';
import * as api from './lib/api.js'

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Origin" ,"*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  res.header('Access-Control-Allow-Origin', '*');
  next();
})

app.use(express.static('static'));

app.get('/all-usernames', api.allUsers);

app.post('/add-username', express.json(), api.addName);

app.get('/amt-of-names', api.amtOfNames);

app.listen(8080);
