import * as fs from 'fs';

export function addUsernameCheck(username) {
  username = username.trim();

  const profanities = JSON.parse(fs.readFileSync('./lib/profanities.json', 'utf8')).split(',');

  if (username.length <= 0) {
    return { valid: false, error: 'username cannot be nothing' };
  }
  if (username.length > 95) {
    return { valid: false, error: 'username is too long, must be less than 95 characters' };
  }
  if (/[^a-zA-Z1-9\s\_\-\.]/g.test(username)) {
    return { valid: false, error: 'Word contains invalid characters' };
  }

  if(profanities.includes(username.toLowerCase())) {
    return { valid: false, error: 'You cannot use that phrase' };
  }

  return {
    valid: true,
    username: username,
  };
}