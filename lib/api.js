import { pool } from './db.js';
import * as fs from 'fs';

import * as checks from './checks.js';


export async function allUsers(req, res) {
    const users = await pool.query('SELECT * FROM usernames');
    res.json(users.rows);
} 

export async function addName(req, res) {
    let { username } = req.body


    //checks 
    if (typeof username === 'string') { username = checks.addUsernameCheck(username); } else {
      res.status(400);
      res.json({valid: false, error : 'Not a string'});
      return;
    }

    // submit to DB
    if (username.valid){
      const dbRes = await pool.query('INSERT INTO usernames (username) VALUES ($1)', [username.username]);
      res.json(username);
    } else {
      res.status(400);
      res.json(username);
    }

}

export async function amtOfNames(req, res) {
  const username = req.query.username

  if(!username){
    res.status(400);
    res.json({valid: false, error : 'must provide a username'});
  }


  const dbRes = await pool.query('SELECT count(username) FROM usernames WHERE username = ($1) GROUP BY username', [ username ]);

  let amt = dbRes.rows[0];
  if(!amt){
    amt = 0;
  } else {
    amt = amt.count;
  }


  let coolNames

  try { //This is for an optional coolNames Json object where you can sepcify custom msgs
    coolNames = JSON.parse(fs.readFileSync('./lib/coolNames.json', 'utf8'));

  } catch (e) {}

  let msg

  if (coolNames) {
    if (Object.keys(coolNames).includes(username)){
      msg = coolNames[username]
    }
  }

  res.json({valid: true, amt: amt, msg: msg});
}