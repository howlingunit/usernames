import { pool } from './db.js';


export async function allUsers(res, req) {
    const users = await pool.query('SELECT * FROM usernames');
    req.json(users.rows);
} 