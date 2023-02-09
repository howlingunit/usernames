import { pool } from './db.js';


export async function allUsers(req, res) {
    const users = await pool.query('SELECT * FROM usernames');
    res.json(users.rows);
} 

export async function addName(req, res) {
    let { username } = req.body


    //checks 
    if (typeof username === 'string') { username = username.trim(); } else {
      res.status(400);
      res.json('Not a string');
      return;
    }

    // submit to DB
    const dbRes = await pool.query('INSERT INTO usernames (username) VALUES ($1)', [username]);

    res.send('OK');
}

export async function amtOfNames(req, res) {
  const username = req.query.username


  const dbRes = await pool.query('SELECT count(username) FROM usernames WHERE username = ($1) GROUP BY username', [ username ]);

  res.json(dbRes.rows);
}