import express from 'express';
import * as api from './lib/api.js'

const app = express();

app.use(express.static('static'));

app.get('/all-usernames', api.allUsers);

app.post('/add-username', express.json(), api.addName);

app.get('/amt-of-names', api.amtOfNames);

app.listen(8080);
