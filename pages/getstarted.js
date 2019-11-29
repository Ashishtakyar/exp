import React  from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import defaultPage from '../hocs/defaultPage'
import { Typography, Button } from '@material-ui/core';



const styles = theme => ({
  section: {
    padding: "80px 20px",
  },
  imgInput: {
    display: 'none'
  },
  sectionContent: {
    extend: 'section',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '10px 0px'
  },
  inputLabel: {
      color: theme.palette.primary.dark,
  },
  refundLabel: {
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main
  },
  textField: {
    width: '100%'
  },
  chipUpload: {
    width: '100%',
    flexFlow: 'row wrap',
    paddingLeft: 54,
    // paddingBottom: 14,
    display: 'flex',
    '& input':{
      display:'none'
    }
  },
  inputChipContainer: {
    minHeight: 60
  },
  authorisationNameTextField: {
    top: 3,
    width: '100%',
    maxWidth: 400,
    '& input': {
      padding: 0,
    }
  },
  formControl: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    // alignItems: 'left',
    // paddingBottom: 20,
    // paddingTop: 20,
    // maxWidth: 300,
    marginTop: 5,
    marginBottom: 5,
    // minWidth: 500,
    minHeight: 50,
    maxWidth: 500,
  },
  selectFormControl: {
    extend: 'formControl',
    marginTop:20,
  },
  uploadFormControl: {
    extend: 'formControl',
    flexDirection: 'row',
    border: 'solid 1px',
    // borderColor: theme.palette.secondary.main,
    borderColor: 'rgba(0, 0, 0, 0.23)',
    borderRadius: 4,
  },
  buttonFooter: {
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    maxWidth: 500,
    textAlign: 'center',
    width: '100%',
  
  },
  footerButtons: {
    width: '100%',
  },
  submitButton: {
    textAlign: 'center',
    width: 120,
    textTransform: 'capitalize',
    marginLeft: 'auto'
  },
  nextButton: {
    extend: 'submitButton',
    marginLeft: 'auto'
  },
  previousButton: {
    extend: 'submitButton',
    marginLeft: 'initial'
  },
  sectionHeader: {
    maxWidth: 500,
    paddingBottom: 20,
    marginLeft: 'auto', 
    marginRight: 'auto',
    textAlign: 'center',
  },
  sectionHeaderText:
  {
	 maxWidth: 500,
	  color: '#554740',
    paddingBottom: 20,
    marginLeft: 'auto', 
    marginRight: 'auto',
	fontSize: '1rem',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '0.00938em'
    
  },
  progressBarWrapper: {
    width: '100%',
    height: 10,
    position:'fixed',
    top: 75,
    backgroundColor: theme.palette.primary.main,
  },
  progressBar: {
    backgroundColor: theme.palette.secondary.main,
    width:'1%',
    height: 10,
    transition: 'all',
    transitionDuration: '300ms',
  },
  getStartedSectionContent: {
    margin: 'auto',
    width: '100%',
    padding: 20,
    marginBottom: 40,
    maxWidth: '500px',
    backgroundColor: theme.palette.primary.main,
    border: 'solid 1px',
    borderColor: theme.palette.primary.dark,
    borderRadius: 5,
  },
  getStartedHeader: {
    extend: 'sectionHeader',
    textAlign: 'left',
    width: '100%',
    marginLeft: 0,
  }
});






const GetStarted = ({ classes }) => (
  <div className="container">
    <div className={classes.progressBarWrapper}>
      <div className={classes.progressBar} style={{width: '1%' }}/>
    </div>
    <div className={classes.section}>
      <div id="get-started" className={classes.sectionContent} >
        <Typography variant={"h4"} className={classes.sectionHeader}>
          Getting Started
        </Typography>
        <Typography variant={"subtitle2"} className={classes.sectionHeaderText}>
          Before you begin, we need the following information. Without it, we cannot complete your tax return. If you are having difficulty getting your P45 documentation from your employer, email us at <a href="mailto:info@expattaxback.com">info@expattaxback.com</a> and we can help do this on your behalf. 
        </Typography>

        <div className={classes.getStartedSectionContent}>
          <Typography variant={"h4"} className={classes.getStartedHeader}>
            P45
          </Typography>
          <Typography variant={"body1"} >
            A P45 document is a certificate of your income indicating how much you earned and how much tax you paid on those earnings. It is a three-page form, which your employer will issue to you at the end of each employment. Part 1A is to be kept by you for when you want to claim your tax back. The other parts are to be handed to your next employer (if you stay in the UK).You will need to submit a copy of all three parts of the P45. If you have P45's from more than 1 employer for the year, you will need to upload all of them.
          </Typography>
        </div>

        <div className={classes.getStartedSectionContent}>
          <Typography variant={"h4"} className={classes.getStartedHeader}>
            Final Payslip
          </Typography>
          <Typography variant={"body1"} >
            We need to validate your final payslip against your P45. If uploading a screenshot from your phone, make sure it can be clearly viewed,  and has the relevant year and date visible. 
          </Typography>
        </div>

        <div className={classes.getStartedSectionContent}>
          <Typography variant={"h4"} className={classes.getStartedHeader}>
            Proof of ID
          </Typography>
          <Typography variant={"body1"} >
            Please upload a copy of your passport ID page. Make sure the entire border of the page is visible (including the passport code on the bottom of the page). If you are taking a photo of the passport, make sure all of the information is clear and is legible. 
          </Typography>
        </div>

        <div className={classes.getStartedSectionContent}>
          <Typography variant={"h4"} className={classes.getStartedHeader}>
            Verification of ID
          </Typography>
          <Typography variant={"body1"} >
            We need to verify it’s you. To do so, please take a photo of yourself holding your passport ID page against your face. Make sure the photo of yourself and the ID page is clearly visible and is clear. 
          </Typography>
        </div>

        <div className={classes.buttonFooter} >
         <Button
            label="Contact Us"
            primary="true"
            color={'secondary'}
            variant="contained"
            className={classes.previousButton}
            href="mailto:info@expattaxback.com"
          >
            Contact Us
          </Button>
          <Button
            label="Get Started"
            primary="true"
            color={'secondary'}
            variant="contained"
            className={classes.nextButton}
            href={'/form'}
            // onClick={() => authorize('/../form')}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  </div>
)

GetStarted.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(defaultPage(GetStarted))
