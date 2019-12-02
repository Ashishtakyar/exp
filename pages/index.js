import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import defaultPage from '../hocs/defaultPage'
import { Typography, Grid, Button } from '@material-ui/core';
import Calculator from '../components/Calculator';


const styles = theme => ({
  
  section: {
    padding: "80px 20px"
  },
  sectionContent: {
    extend: 'section',
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: '300px',
    padding: '0px 0px',
    '&> h3': {
      marginBottom: '40px',
    },
    '&> .subTitle': {
      marginTop: '-30px'
    }
    
  },
  headlineCopyBlock: {
    position: 'absolute',
    bottom: 50,
    paddingLeft: 80,
    paddingRight: 80,
    width: 'calc(100vw - 80px)',
    maxWidth: '600px',
    // height: '100%'
    '& a':{
      marginTop: 20,
      width: 200,
      marginRight: 50,
    },
    [theme.breakpoints.down('xs')]: {
      bottom: 'initial',
      top: '10%',
      paddingLeft: 20,
      paddingRight: 20,
      '& h1': {
        fontSize:'37px'
      },
      '& h6': {
        fontSize: '1.2rem',
      }
    },
  },
  imageSection: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPositionY: '25%',
    backgroundPositionX: 'center',
    height: '680px',
    '&:before': {
      content: '""',
      position: 'absolute',
      height: '100%',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      display: 'block',
      opacity: 0.4,
      backgroundColor: '#000',
      pointerEvents: 'none',
    },
  },
  circleCard: {
    textAlign: 'center',
    padding: '30px 12px',
    '&> p': {
      
      maxWidth: '245px',
      margin: 'auto',
    }
  },
  circleIcon: {
    width: '200px',
    height: '200px',
    borderRadius: '100px',
    backgroundColor: '#EFEFEF',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display:'inline-block',
    marginBottom: '20px'
  },
  circleIconBorder: {
    extend: 'circleIcon',
    border: 'solid 1px black',
    width: '150px',
    height: '150px',
    borderRadius: '75px',
  },
  getStartedButtonContainer: {
    position: 'relative',
    width: '200px',
    // top: '300px',
    '&> a': {
      marginTop: '20px',
      // width: '200px',
      textAlign:'center'
    }
  },
  getStartedCopy: {
    position: 'relative',
    paddingTop: '130px',
    // top: '140px',
    maxWidth: '480px',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '85px'
    }
  },
  
});






const Index = ({ isAuthenticated, theme, classes }) => (
  <div>
    {/* {isAuthenticated && <div>only see me after login</div>} */}
    <div style={{marginTop: '75px'}}>
      {/* {!isAuthenticated && (
        <Content>
          Not Logged in. Maybe you want to <Link href='/auth/sign-in'>{createLink('/auth/sign-in', 'sign in')}</Link>?
        </Content>
      )} */}
      <div className={classes.imageSection} style={{backgroundImage: 'url(/static/images/gettingStarted.jpg)'}}>
        <div className={classes.sectionContent} >
          <div className={classes.headlineCopyBlock} >
            <Typography variant={"h1"} color="textSecondary">
              Fast-track your tax refund when you leave the UK
            </Typography>
            <Typography variant={"h6"} color="textSecondary" style={{paddingLeft:'3px', paddingTop:'6px'}}>
            If you leave the UK mid-way through the tax year, you’ve most likely paid too much tax. Start enjoying your tax refund within 48 hours, so you can spend it on the way home!
            </Typography>
            <div className={classes.getStartedButtonContainer}>
              <Link href="/disclaimer" passHref>
                <Button variant="contained" color="secondary" size="large" fullWidth>
                  Get Started
                </Button>
              </Link><br/>
              <Link href="#calculator" passHref>
                <Button variant="contained" color="secondary" size="large" fullWidth>
                  Estimate Refund
                </Button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      <div className={classes.section}>
        <div className={classes.sectionContent}>
          <Typography variant="h3" align="center" >Reasons to use Expat Tax Back</Typography>
          <Grid container spacing={8} justify="center" >
            <Grid item sm={6} md={4} lg={2}>
              <div className={classes.circleCard} >
                <div className={classes.circleIconBorder} style={{backgroundImage: 'url(/static/images/icons/smartphone.png)', backgroundSize: '65px'}} />
                <Typography variant="h5">We are Digital</Typography>
                <Typography variatn="body1">
                  No more back and forth  with snail mail and  documents.  We manage your refund online
                </Typography>
              </div>
            </ Grid>
            <Grid item sm={6} md={4} lg={2}>
              <div className={classes.circleCard} >
               <div className={classes.circleIconBorder} style={{backgroundImage: 'url(/static/images/icons/lightning.png)', backgroundSize: '45px'}} />
                <Typography variant="h5">Faster Refund</Typography>
                <Typography variatn="body1">
				It can take up to  <strong>12 week</strong> to get your refund back from HMRC depending on their busy lodgement periods. If you qualify, we refund <strong>50%</strong> of your estimated refund within <strong>48 hours</strong> hours , and the remaining amount once finalised with the HMRC (normally <strong>4 hours</strong>  weeks).
               
                </Typography>
              </div>
            </ Grid>
            <Grid item sm={6} md={4} lg={2}>
              <div className={classes.circleCard} >
                <div className={classes.circleIconBorder} style={{backgroundImage: 'url(/static/images/icons/cancel.png)', backgroundSize: '80px'}} />
                <Typography variant="h5">No Refund, No Fee</Typography>
                <Typography variatn="body1">
                There are no upfront fees. We only charge a fee if you qualify for a refund 
                </Typography>
              </div>
            </ Grid>
            <Grid item sm={6} md={4} lg={2}>
              <div className={classes.circleCard} >
                <div className={classes.circleIconBorder} style={{backgroundImage: 'url(/static/images/icons/handshake.png)', backgroundSize: '80px'}} />
                <Typography variant="h5">Fixed Fee</Typography>
                <Typography variatn="body1">
                Unlike other tax specialists that charge up to 30% of the refund, our fee is fixed at £99. So you always know how much you're paying upfront  
                </Typography>
              </div>
            </ Grid>
            <Grid item sm={6} md={4} lg={2}>
              <div className={classes.circleCard} >
                <div className={classes.circleIconBorder} style={{backgroundImage: 'url(/static/images/icons/calculator.png)', backgroundSize: '80px'}} />
                <Typography variant="h5">CIMA Qualified</Typography>
                <Typography variatn="body1">
                Our Tax Specialists are qualified members of the Chartered Institute of Management Accountants (CIMA). Globally recognised to ensure your refund is completed to government standards
                </Typography>
              </div>
            </ Grid>
          </Grid>
        </div>
      </div>
      <div className={classes.section} style={{backgroundColor:theme.palette.primary.main}}>
        <Typography variant="h3" align="center">How Does It Work?</Typography>
        <div className={classes.sectionContent}>
          <Grid container spacing={8} justify="center">
            <Grid item sm={6} md={4} >
              <div className={classes.circleCard} >
                <div className={classes.circleIcon} style={{backgroundImage: 'url(/static/images/how1.jpg)'}} />
                <Typography variant="h5">Upload</Typography>
                <Typography variatn="body1">
                Upload all the necessary information (especially your P45) after estimating your refund using our calculator. We’ll take care of your refund application, so you don’t have to worry about dealing with HMRC
                </Typography>
              </div>
            </ Grid>
            <Grid item sm={6} md={4}>
              <div className={classes.circleCard} >
                <div className={classes.circleIcon} style={{backgroundImage: 'url(/static/images/how2.jpg)'}} />
                <Typography variant="h5">Authorise</Typography>
                <Typography variatn="body1">
                Digitally authorise Expat Tax Back to compete your refund for you. That way, you don’t have to worry about dealing with HMRC and the uncertainty of how much you may or may not get back
                </Typography>
              </div>
            </ Grid>
            <Grid item sm={6} md={4}>
              <div className={classes.circleCard} >
                <div className={classes.circleIcon} style={{backgroundImage: 'url(/static/images/how3.jpg)'}} />
                <Typography variant="h5">Cash back</Typography>
                <Typography variatn="body1">
                Once we have all the necessary information we’ll refund you 50% of your estimated refund within 48 hours straight into your bank account, and the rest once we finalise your refund with HMRC (normally 4 weeks)
                </Typography>
              </div>
            </ Grid>
          </Grid>
        </div>
      </div>
      <div id="calculator" className={classes.section} >
        <div className={classes.sectionContent}>
          <Typography variant="h3" align="center">How much will I get back?</Typography>
          <Grid container spacing={8} justify="center">
            <Grid item sm={8} md={5}  style={{display:'flex', marginRight:'12%'}}>
              <Typography variant="body1" style={{padding: '20px 14px'}}>
                Use our refund calculator to see if you qualify. If you have left or are planning to leave the UK mid-way throughout the tax year, you are most likely due a tax refund. If it was a previous tax year, we can make a claim for the last 5 years. 
                <br/><br/> If you work in Scotland, it’s a bit different. Get in touch for an estimate of your refund to <a href="mailto:info@expattaxback.com">info@expattaxback.com</a>
              </Typography>
            </Grid>
            <Grid item sm={8} md={4}>
              <Calculator />
            </Grid>
          </Grid>
          
        </div>
      </div>
      <div className={classes.imageSection} style={{backgroundImage: 'url(/static/images/getstarted_bg.jpg)'}}>
        <div className={classes.sectionContent}>
          <div className={classes.headlineCopyBlock} >
            <Typography className={classes.getStartedCopy} variant={"h6"} color="textSecondary">
              You are only a few clicks away from a tax refund. If you’re not ready to claim, but know when you are leaving the UK, leave your contact details and we will get in touch at the right time!
            </Typography>
            <div className={classes.getStartedButtonContainer}>
              <Link href="/disclaimer" passHref>
                <Button variant="contained" color="secondary" size="large" fullWidth>
                  Get Started
                </Button>
              </Link>
              <Link href="/reminder" passHref>
                <Button href="/reminder" variant="contained" color="secondary" size="large" fullWidth>
                  REMIND ME BEFORE I LEAVE THE UK 
                </Button>
              </Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Index.propTypes = {
  isAuthenticated: PropTypes.bool,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles)(defaultPage(Index))
