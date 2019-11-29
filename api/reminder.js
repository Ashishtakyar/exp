
require('dotenv').config()

const { json, send, createError, run } = require('micro')
const fetch = require('isomorphic-unfetch')
const Airtable = require('airtable')
const sgMail = require('@sendgrid/mail');



const reminder = async (req, res) => {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('app6mmCAa7IlLnsx5');

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const incomingData = await json(req)
  const data = {
    'Email':incomingData.email,
    'Name':incomingData.name,
    'Leaving Date':incomingData.date
  }
  try {
    base('Reminders').create(data, function(err, record) {
      if (err) { 
        console.error(err);
        send(res, 500, {status:resp.status, message:resp.statusText});
        return;
      }
      console.log('Saved to Airtable:', record.getId());
      const msg = {
        to: incomingData.email,
        from: 'info@expattaxback.com',
        // subject: 'Hello world template',
        // text: 'Hello plain world!',
        html: '<p>Hello HTML world!</p>',
        templateId: 'd-fb8743b919de4b8b878b128d46374e88',
        dynamic_template_data: {
          "firstName": incomingData.name,
        },
      };
      
      sgMail.send(msg)
        .then(() => {
          console.log('Reminder confirmation email sent:', msg); 
          send(res, 200, record._rawJson);
        })
        .catch(mailError => { 
          console.log('Error sending reminder confirmation email:', mailError);
          send(res, 400, mailError);
        })

        // reminder confirmation email is not critical, dont throw an error
        
    })
  } catch (error){
    console.log(error);
    throw createError(error.statusCode, error.statusText)
  }
}

module.exports = (req, res) => run(req, res, reminder)
