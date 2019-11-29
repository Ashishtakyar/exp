import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import defaultPage from '../hocs/defaultPage'
import { withStyles } from '@material-ui/core/styles';
import { Typography} from '@material-ui/core';

const styles = theme => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    height: '75px',
    backgroundColor: theme.palette.primary.main,
    height: '100px',
    width: '100%',
    textAlign: 'center'
  },
  footerLinkContainer: {
    margin: 'auto',
    '& a':{
      margin: '0 10px'
    }
  },
  question: {
    margin: '40px 0'
  },
  section: {
    padding: "80px 20px"
  },
  sectionContent: {
    extend: 'section',
    maxWidth: '1024px',
    margin: '0 auto',
    minHeight: '300px',
    padding: '0px 40px',
  },
  '@global': {
    a: {
      textDecoration: 'none',
      color: theme.palette.text.primary,
      '&:hover': {
        color: theme.palette.secondary.main
      }
    }
  },
  
});

const Faq = ({classes}) => (
  <div className={classes.section}>
    <div className={classes.sectionContent} >
      <Typography variant="h3">Frequently Asked Questions</Typography>
      <div className={classes.question} >
        <Typography variant="h5">When can I claim?</Typography>
        <Typography variant="body1">When you have finished work and won’t be working again in that financial year.</Typography>
      </div>
      <div className={classes.question} >
        <Typography variant="h5">Do I get all of my tax back?</Typography>
        <Typography variant="body1">If you have earned less than £11, 800 in the 2019/20  financial year then you will receive a full tax refund of tax paid. If you have earned over your tax-free allowance, the tax you pay is dependent on how much you earn. But if you stop working mid-year or on the wrong tax code, you should be entitled to a refund. That’s where we come in.</Typography>
      </div>
      <div className={classes.question} >
        <Typography variant="h5">If I make a claim midway through the tax year, do I have to wait until the end of the tax year to get my rebate?</Typography>
        <Typography variant="body1">No. You can claim at any time! It can take up to 12 weeks to receive your refund from the HMRC. Once we have all the necessary information we’ll refund you 50% of your estimated refund within 48 hours straight into your bank account, and the rest once we finalise your refund with the HMRC (normally 4 weeks)</Typography>
        It can take up to 12 weeks to get your refund back from HMRC depending on their busy lodgement periods. Because we’re tax agents, we can do it faster.
If you qualify, we will refund you a minimum of 50% of your estimated refund within 48 hours of your submission straight into your bank account, and the remaining amount once we finalise your refund with the HMRC (normally 4 weeks). This way, you’ll have an idea of how much you’re going to get back immediately and have access to your cash sooner!
      </div>
      <div className={classes.question} >
        <Typography variant="h5">How far back can I claim?</Typography>
        <Typography variant="body1">You can claim back as far as 5 years. This means we can help you claim a refund over that period if you have already left the the UK.</Typography>
      </div>
      <div className={classes.question} >
        <Typography variant="h5">Do I need a National Insurance number to get a refund?</Typography>
        <Typography variant="body1">Yes. You can find this on your P45, P60, Statement of Earnings or Payslip.</Typography>
      </div>
      <div className={classes.question} >
        <Typography variant="h5">I won’t get my P45 from my last job until I have left the country can I still lodge my return?</Typography>
        <Typography variant="body1">Yes we can lodge the claim with the tax office and then forward them the P45 once we receive it.</Typography>
      </div>
      <div className={classes.question} >
        <Typography variant="h5">What is a P45?</Typography>
        <Typography variant="body1">
          P45 document is a certificate of your income indicating how much you earned and how much tax you paid on those earnings.
          <p/>It is a blue, three-page form, which your employer will issue to you at the end of each employment.
          <p/>Part 1A is to be kept by you for when you want to claim your tax back. The other parts are to be handed to your next employer. You will need to submit parts 1A, 2 and 3 of the P45 from your previous employer in the UK.
        </Typography>
      </div>
      <div className={classes.question} >
        <Typography variant="h5">What is a P60?</Typography>
        <Typography variant="body1">Your employer sends this to you and at the end of each tax year, confirming how much tax you have paid. You only need to submit this if you are claiming for a period previous to the current tax year  (e.g before 18/19), but if you have it, upload it- the more information we have, the quicker we can fast track your refund.</Typography>
      </div>
      <div className={classes.question} >
        <Typography variant="h5">What if I've lost my P45 or P60?</Typography>
        <Typography variant="body1">
          If you have lost your P45 or P60, you will need to contact your employer or agency and ask them to issue you with a statement of earnings as a substitute.
          <p/>If you are unable to do this, we may be able to assist you. Subject to conditions, we may be able to follow up on a maximum of two outstanding documents at a cost of £20 + VAT per document.
          <p/>In our experience, we have found that our clients have a higher rate of success getting this information from their employers and agencies. We would therefore advise all clients to try to obtain the documentation first before contacting us for assistance.
          <p/>Please note: we cannot guarantee that outstanding documentation will be received, as employers and agencies are not legally obligated to issue statements of earnings.
          <p/>HMRC may have your missing pay and tax details on record. Contact us to find out how to obtain this information.
        </Typography>
      </div>
    </div>
  </div>
)

export default withStyles(styles)(defaultPage(Faq))