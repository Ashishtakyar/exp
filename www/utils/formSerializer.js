import moment from 'moment';

const airtableFormMappings = {
  "Name": 'name',
  "NI" : 'ni',
  "Nationality": 'nationality',
  "Contact Number": 'number',
  "Tax Year":'taxYear',
  "Last UK Address": 'lastUKAddress',
  "Last UK Postcode": 'lastUKPostcode',
  "Home Address": 'newAddress',
  "Home Postcode": 'newPostcode',
  "Has Medical": 'hasMedical',
  "Has Car": 'hasCar',
  "Has Tax Debt": 'hasTaxDebt',
  "I'm not sure": 'notsure',
  "Bank Location Category": 'bankAccountLocation',
  "Bank Location": 'bankAccountSubLocation',
  "Bank Name": 'bankName',
  "BSB": 'bsb',
  "Sort Code": 'bankSortCode',
  "Account Number": 'bankAccountNumber',
  "Employer Name": 'employerName',
  "Employer Address": 'employerAddress',
  "Employer Postcode": 'employerPostcode',
  "Employer Contact Number": 'employerContactNumber',
  "Employer Contact Email": 'employerContactEmail',
  "Employer Name 2": 'employerName2',
  "Employer Address 2": 'employerAddress2',
  "Employer Postcode 2": 'employerPostcode2',
  "Employer Contact Number 2": 'employerContactNumber2',
  "Employer Contact Email 2": 'employerContactEmail2',
  "Employer Name 3": 'employerName3',
  "Employer Address 3": 'employerAddress3',
  "Employer Postcode 3": 'employerPostcode3',
  "Employer Contact Number 3": 'employerContactNumber3',
  "Employer Contact Email 3": 'employerContactEmail3',
  "Page Finished":'pageFinished',
}



export const toLocalFormData = (formData) => {
  let data = {};
  // handle simple mappings
  Object.keys(airtableFormMappings).forEach(function(key) {
    let d = formData[key];
    if(d != null && d != undefined) data[airtableFormMappings[key]] = d;
  });

  // handle dates
  if(formData['Date Left']) data.dateLeftUK = moment(formData['Date Left']).format('YYYY-MM-DD');
  if(formData['Date Of Birth']) data.dob = moment(formData['Date Of Birth']).format('YYYY-MM-DD');
  if(formData['Date Arrived']) data.arrivalDate = moment(formData['Date Arrived']).format('YYYY-MM-DD')
  if(formData['Employment Start']) data.employmentStart = moment(formData['Employment Start']).format('YYYY-MM-DD')
  if(formData['Employment End']) data.employmentEnd = moment(formData['Employment End']).format('YYYY-MM-DD')
  if(formData['Employment Start 2']) data.employmentStart2 = moment(formData['Employment Start 2']).format('YYYY-MM-DD')
  if(formData['Employment End 2']) data.employmentEnd2 = moment(formData['Employment End 2']).format('YYYY-MM-DD')
  if(formData['Employment Start 3']) data.employmentStart3 = moment(formData['Employment Start 3']).format('YYYY-MM-DD')
  if(formData['Employment End 3']) data.employmentEnd3 = moment(formData['Employment End 3']).format('YYYY-MM-DD')  

  // handle array mappings
  if(formData["P45"]) data.p45Url = formData["P45"].map((el) => { return el.url; });
  if(formData["P45"]) data.p45 = formData["P45"].map((el) => { return el.filename; });
  
  if(formData["P60"]) data.p60Url = formData["P60"].map((el) => { return el.url; });
  if(formData["P60"]) data.p60 = formData["P60"].map((el) => { return el.filename; });

  if(formData["Payslip"]) data.finalPaySlipUrl = formData["Payslip"].map((el) => { return el.url; });
  if(formData["Payslip"]) data.finalPaySlip = formData["Payslip"].map((el) => { return el.filename; });

  if(formData["Proof of ID"]) data.proofOfIdUrl = formData["Proof of ID"].map((el) => { return el.url; });
  if(formData["Proof of ID"]) data.proofOfId = formData["Proof of ID"].map((el) => { return el.filename; });

  if(formData["ID Verification"]) data.idVerificationUrl = formData["ID Verification"].map((el) => { return el.url; });
  if(formData["ID Verification"]) data.idVerification = formData["ID Verification"].map((el) => { return el.filename; });

  if(formData["Authorization Signature"]) data.authorisation = formData["Authorization Signature"][0].url;


  if(formData['Email']) data.email = formData['Email'];
  
  if(formData['Completed At']) data.completedAt = moment(formData['Completed At']);
  if(formData['Updated At']) data.updatedAt = moment(formData['Completed At']);

  return data;
}




// converts a local form data obj into the format that Airtable expects
export const toServerFormData = (formData) => {
  let data = {};
  
  
  // handle simple mappings
  Object.keys(airtableFormMappings).forEach(function(key) {
    const d = formData[airtableFormMappings[key]];
    if(d != null && d != undefined) data[key.toString()] = d;
  });
  

  // handle dates
  if(formData.dob) data['Date Left'] = moment(formData.dateLeftUK).format('YYYY-MM-DD');
  if(formData.dob) data['Date Of Birth'] = moment(formData.dob).format('YYYY-MM-DD');
  if(formData.arrivalDate) data['Date Arrived'] = moment(formData.arrivalDate).format('YYYY-MM-DD')
  if(formData.employmentStart) data['Employment Start'] = moment(formData.employmentStart).format('YYYY-MM-DD')
  if(formData.employmentEnd) data['Employment End'] = moment(formData.employmentEnd).format('YYYY-MM-DD')
  if(formData.employmentStart2) data['Employment Start 2'] = moment(formData.employmentStart2).format('YYYY-MM-DD')
  if(formData.employmentEnd2) data['Employment End 2'] = moment(formData.employmentEnd2).format('YYYY-MM-DD')
  if(formData.employmentStart3) data['Employment Start 3'] = moment(formData.employmentStart3).format('YYYY-MM-DD')
  if(formData.employmentEnd3) data['Employment End 3'] = moment(formData.employmentEnd3).format('YYYY-MM-DD')

  // handle array mappings
  if(formData.finalPaySlipUrl) data["P45"] = formData.p45Url.map((el) => {
    return { url: el }
  })

  if(formData.p60Url) data["P60"] = formData.p60Url.map((el) => {
    return { url: el }
  });

  if(formData.finalPaySlipUrl) data["Payslip"] = formData.finalPaySlipUrl.map((el) => {
    return { url: el }
  })

  if(formData.proofOfIdUrl) data["Proof of ID"] = formData.proofOfIdUrl.map((el) => {
    return { url: el }
  })

  if(formData.idVerificationUrl) data["ID Verification"] = formData.idVerificationUrl.map((el) => {
    return { url: el }
  });

  if(formData.authorisation) data["Authorization Signature"] = [{url: formData.authorisation}]

  if(formData.email) data['Email'] = formData.email;
  if(formData.isCompleted) data['Completed At'] = new Date();
  if(formData.updatedAt) data['Updated At'] = moment(formData.updatedAt);

  return data;
}