import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, withTheme } from '@material-ui/core/styles';
import Link from 'next/link'
import { Button, Typography, CircularProgress } from '@material-ui/core';
import securePage from '../hocs/securePage'
import fetch from 'isomorphic-unfetch';

import {toLocalFormData} from '../utils/formSerializer';
import {getFormDataFromLocalCookie } from '../utils/form';
import {fetchFormData} from '../utils/form';

import ETBSelect from '../components/form/Select';
import ETBDatePicker from '../components/form/DatePicker';
import ETBInput from '../components/form/Input';

const styles = theme => ({
  section: {
    padding: "80px 20px"
  },
  sectionContent: {
    extend: 'section',
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: '300px',
    padding: '0px 40px',
  },
  mainContent: {
    paddingTop: 20,
  },
  documentHolder:{
    width: 500,
    flexDirection: 'column',
    flexWrap: 'wrap',
    display: 'flex',
    margin: 'auto'
  },
  documentImage: {
    width: 500,
    marginBottom: 20
  },
  signatureImage: {
    extend: 'documentImage',
    width: 200
  }
});



class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rawForm: null,
      form: null,
      loadingData: true,
    }
  }
  
  componentDidMount(){
    let baseURL = undefined;
    if(window.location.hostname === 'localhost') {
      // local dev
      baseURL = 'http://localhost:3001'
    } else {
      // hosted
      baseURL = window.location.protocol +'//'+ window.location.hostname
    }

    // this.setState({
    //   form: getFormDataFromLocalCookie()
    // })

    fetchFormData(this.props.loggedUser.email)
      .then(data => {
        this.setState({
          form: data,
          loadingData: false
        })
      });
  }



  formFragment() {
    const  { loggedUser, classes } = this.props;
    const { p45Url, finalPaySlipUrl, proofOfIdUrl, idVerificationUrl, authorisation } = this.state.form;
    const p45Images = [];
    const finalPayslipImages = [];
    const proofOfIdImages = [];
    const idVerificationImages = [];
    const authorisationImage = [];
    let fragments = [
      <ETBInput name={'name'} label={'Name'} disabled={true} formData={this.state.form} />,
      <ETBInput name={'email'} label={'Email'} disabled={true} formData={this.state.form} />,
      <ETBInput name={'dob'} label={'Date of birth'} disabled={true} formData={this.state.form} />,
      <ETBInput name={'nationality'} label={'Nationality'} disabled={true} formData={this.state.form} />,
      <ETBInput name={'number'} label={'Contact number'} disabled={true} formData={this.state.form} />,
      <ETBInput name={'arrivalDate'} label={'Date arrived'} disabled={true} formData={this.state.form} />,
      <ETBInput name={'bankAccountSubLocation'} label={'Bank location'} disabled={true} formData={this.state.form} />,
      <ETBInput name={'bsb'} label={'BSB'} disabled={true} formData={this.state.form} />,
      <ETBInput name={'bankSortCode'} label={'Sort code'} disabled={true} formData={this.state.form} />,
      <ETBInput name={'bankAccountNumber'} label={'Bank account number'} disabled={true} formData={this.state.form} />,
      <ETBInput name={'employerName'} label={'Employer name'} disabled={true} formData={this.state.form} />,
      <ETBInput name={'employerAddress'} label={'Employer address'} disabled={true} formData={this.state.form} />,
      <ETBInput name={'employerPostcode'} label={'Employer post code'} disabled={true} formData={this.state.form} />,
      <ETBInput name={'employerContactNumber'} label={'Employer contact number'} disabled={true} formData={this.state.form} />,
      <ETBInput name={'employerContactEmail'} label={'Employer contact email'} disabled={true} formData={this.state.form} />,
      <div className={classes.documentHolder}>{p45Images}</div>,
      <div className={classes.documentHolder}>{finalPayslipImages}</div>,
      <div className={classes.documentHolder}>{proofOfIdImages}</div>,
      <div className={classes.documentHolder}>{idVerificationImages}</div>,
      <div className={classes.documentHolder}>{authorisationImage}</div>,
    ]

    if(p45Url) {
      p45Images.push(<Typography variant={"h5"}>P45</Typography>);
      p45Url.forEach((img) => {
        p45Images.push( <img src={img} className={classes.documentImage} /> );
      });
    }
    
    
    if(finalPaySlipUrl) {
      finalPayslipImages.push(<Typography variant={"h5"}>Final Payslip</Typography>);
      finalPaySlipUrl.forEach((img) => {
        finalPayslipImages.push( <img src={img} className={classes.documentImage} /> );
      });
    }

    if(proofOfIdUrl){
      proofOfIdImages.push(<Typography variant={"h5"}>Proof of ID</Typography>);
      proofOfIdUrl.forEach((img) => {
        proofOfIdImages.push( <img src={img} className={classes.documentImage} /> )
      });
    }

    if(idVerificationUrl) {
      idVerificationImages.push(<Typography variant={"h5"}>ID Verification</Typography>);
      idVerificationUrl.forEach((img) => {
        idVerificationImages.push( <img src={img} className={classes.documentImage} /> )
      });
    }

    if(authorisation) {
      idVerificationImages.push(<Typography variant={"h5"}>Authorisation</Typography>);
      authorisationImage.push(<img src={authorisation} className={classes.signatureImage} />);
    }

    return fragments;
  }

  render() {
    const  { loggedUser, classes } = this.props;
    const { form, loadingData } = this.state
    return(
      <div className={classes.section}>
        <div className={classes.sectionContent}>
          <Typography variant={"h4"} className={classes.sectionHeader}>
            Profile
          </Typography>
          {/* <div className={classes.mainContent}><strong>{loggedUser.email}</strong></div> */}
          {/* <Link href="/auth/sign-off"><Button variant="contained" size="small" color="secondary"> Sign Out </Button></Link> */}
          
          
          {/* <pre>
              {loggedUser ? JSON.stringify(loggedUser, null, 2) : ''}
          </pre> */}
          { loadingData ? 
              <CircularProgress  className={classes.progress} color="secondary" />
            : <pre>
                {form ? 
                  <div>
                    { this.formFragment() }
                  </div>
                : ''}
              </pre>
          }
        </div>
      </div>
    )
  };
};

Profile.propTypes = {
  loggedUser: PropTypes.object.isRequired
}

export default withTheme()(withStyles(styles)(securePage(Profile)));