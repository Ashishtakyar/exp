import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import defaultPage from '../hocs/defaultPage'
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import RemindForm from '../components/RemindForm';

const styles = theme => ({
  background: {
    backgroundImage: 'url(/static/images/formBg.jpg)',
    backgroundSize: 'cover'
  },
  section: {
    minHeight: 'calc(100vh + 100px)',
    padding: "80px 20px",
    // paddingTop:'75px',
  },
  sectionContent: {
    maxWidth: '400px',
    position:'absolute',
    top: '8%',
    left: '8%',
    margin: '80px auto',
    minHeight: '300px',
    padding: '40px 40px',
    background: '#fff',
    opacity: 0.95,
    [theme.breakpoints.down('xs')]: {
      position: 'initial'
    }
  },
  bodyCopy: {
    width: '100%',
    // maxWidth: '400px',
  },
  image: {
    // width: 'calc(50% - 70px)',
    height: '400px',
    // marginRight: '20px',
    // position: 'absolute',
    // left: '80px',
    backgroundPosition: '30% center'
  }
})

const Reminder = ({classes}) => (
  <div className={classes.background}>
    <div className={classes.section}>
      <div className={classes.sectionContent} >

        <Typography variant="h3" >We’ll be in touch</Typography>
        <div>
          <Typography variant="body1" className={classes.bodyCopy}>
            <p />Thanks for registering your interest with Expat Tax Back.
            <p />Closer to your departure date from the UK, we’ll contact you and remind you about what information we need to fast-track your refund as quickly as possible.  
            <p/>When you’re ready, notify your employer (normally HR) of your leave date. Ask them to prepare your P45 for your last day (or as close to it as possible). 
            <p/>In the meantime, enjoy the rest of your time in the UK!
            <p/><p/>Cheers,
            <p/>The Expat Tax Back team. 
          </Typography>
        </div>
        <div>
          <RemindForm />
        </div>

      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => {
  const { lastUpdate, light } = state
  return { lastUpdate, light }
}

export default connect(mapStateToProps)(withStyles(styles)(defaultPage(Reminder)))
