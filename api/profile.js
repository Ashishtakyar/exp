const { json, send, createError, run } = require('micro')
const fetch = require('isomorphic-unfetch')
const Airtable = require('airtable')

const profile = async (req, res) => {
  // if (!('authorization' in req.headers)) {
  //   throw createError(401, 'Authorization header missing')
  // }

  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('app6mmCAa7IlLnsx5');
  const incomingData = await json(req);
  try {
    base('Submissions').select({
      filterByFormula: `{email} = "${incomingData.email}"`
    }).firstPage((err, results) => {
      if (err) { 
        console.error('error fetching form data for', incomingData.email, err);
        return send(res, 500, {status:err.status, message:err.statusText});;
      } 
      if(!results.length) {
        console.log('Unable to fetch profile for', incomingData.email, '- doesnt exist');
        return send(res, 200, {});
      }
      console.log('Fetched profile:', results[0]);
      send(res, 200, results[0]);
    });
  } catch (error) {
    throw createError(error, error.statusCode, error.statusText)
  }
}

module.exports = (req, res) => run(req, res, profile)
