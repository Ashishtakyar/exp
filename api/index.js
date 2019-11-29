require('dotenv').config()

const { send, json } = require('micro')
const microCors = require('micro-cors')()
const profile = require('./profile')
const submit = require('./submit')
const reminder = require('./reminder');



const dev = async (req, res) => {
  
  // handle cors
  if (req.method === 'OPTIONS') {
    return send(res, 200, 'ok!');
  }
  console.log(req.url);
  switch (req.url) {
    case '/api/profile.js':
      await profile(req, res)
      break

    case '/api/reminder.js':
      await  reminder(req, res)
      break

    case '/api/submit.js':
      await  submit(req, res)
      break
      
    default:
      send(res, 404, '404. Not found.')
      break
  }
}

module.exports = microCors(dev);
