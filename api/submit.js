

const { json, send, run } = require('micro')
const moment = require('moment');
const Airtable = require('airtable')
const sgMail = require('@sendgrid/mail');


const submit = async (req, res) => {

  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('app6mmCAa7IlLnsx5');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const incomingData = await json(req);
  const data = incomingData.form;

  const sendEmail = () => {
    const msg = {
      to: data["Email"],
      from: 'info@expattaxback.com',
      // subject: 'Hello world template',
      // text: 'Hello plain world!',
      // html: '<p>Hello HTML world!</p>',
      templateId: 'd-4cbb2c22d5b146f8bbd0ebabe2dc5cd7',
      dynamic_template_data: {
        "firstName": data["Name"],
      },
    };
    sgMail.send(msg)
      .then(() => {
        console.log('Submission thank you email sent:', msg); 
      })
      .catch(mailError => { 
        console.log('Error sending submission thank you email:', mailError);
      })
    
  }
  
  if(incomingData.isSubmitted) {
    data['Completed At'] = moment();
  }

  try {
    base('Submissions').select({
      filterByFormula: `{email} = "${data["Email"]}"`
    }).firstPage((err, results) => {
      if(err) {
        console.log("Error selecting a record to submit to",err );
        return send(res, 500, {status:err.status, message:err.statusText});
      } else if (!results || !results.length) {
        // couldnt find the record, so create it
        console.log('Creating a new record in Airtable');
        base('Submissions').create(data, function(err, record) {
          if (err) { 
            console.error('error creating a new submission record', err);
            send(res, 500, {status:err.status, message:err.statusText});
            return;
          } else {
            console.log('Created new record in Airtable:', record.getId());
            send(res, 200, record);
          }
          
        })
      } else {
        const recordId = results[0].id;
        base('Submissions').update(recordId, data, 
          function(err, record) {
            if (err) {
              console.error('error updating submission record', err);
              send(res, 500, {status:err.status, message:err.statusText});
              return;
            } else {
              if(incomingData.isSubmitted) sendEmail();
              console.log('Updated record in Airtable:', record.getId());
              send(res, 200, record);
            }
          });  
      }
    });
  } catch (err) {
    console.log('error submitting', err);
    // send(res, 500, {status:err.status, message:err.statusText});
  }
}

module.exports = (req, res) => run(req, res, submit)



// arrivalDate:
// authorisation:
// authorisationName:
// bankAccountLocation:
// bankAccountNumber:
// bankAccountSubLocation:
// bankCountryCode:
// bankName:
// bankSortCode:
// bsb:
// dob:
// employerAddress:
// employerConactEmail:
// employerContactNumber:
// employerName:
// "employer"
// employerPostcode:
// "12332"
// finalPaySlip:
// Array[1]
// name:
// nationality:
// number:
// "123"
// p45:
// Array[3]
// proofOfAge:
// Array[1]
// proofOfId:
// Array[1]


// arrivalDate:
// Moment{…}
// authorisation:
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAABHCAYAAADrysAHAAAL9klEQVR4Xu2dd6x9RRHHP6gholEQe8WCYuzGLho12FGDGrFGJGInxBKBP0yUiL33WGJBBTv2nlhQ7AaNKGLHji0WLFjzwV3d3+be3zvn3FP2nLuTvLz77tsy890zZ2dnZ2…"
// bankAccountLocation:
// "UK"
// bankAccountNumber:
// "12345678"
// bankName:
// "Bank Name"
// bsb:
// "BSB"
// dob:
// Moment{…}
// employerAddress:
// "Employer Address"
// employerConactEmail:
// "Contact Email"
// employerContactNumber:
// "contact Number"
// employerName:
// "Employer Name"
// employerPostcode:
// "Postcode"
// name:
// "Name"
// nationality:
// "Anguilla"
// number:
// "contact number"