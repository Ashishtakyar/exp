import React from 'react'
import securePage from '../hocs/securePage'
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import RemindForm from '../components/RemindForm';

const styles = theme => ({
  background: {
    backgroundImage: 'url(/static/images/formBg.jpg)',
    backgroundSize: 'cover'
  },
  section: {
    minHeight: 'calc(100vh - 100px)',
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
  },
  image: {
    height: '400px',
    backgroundPosition: '30% center'
  }
})

const Reminder = ({classes}) => (
  <div className={classes.background}>
    <div className={classes.section}>
      <div className={classes.sectionContent} >

        <Typography variant="h3" >Thank you!</Typography>
        <div>
          <Typography variant="body1" className={classes.bodyCopy}>
            <br />Thank you for your submission. We will review the information and respond with the value of your refund, or whether we require any further information to fast-track your refund. This will be done in the next 72 hours. In the mean time, sit back and relax - your'e in good hands!   
            <br /><br />The Expat Tax Back team. 
          </Typography>
        </div>
      </div>
    </div>
  </div>
)


export default withStyles(styles)(securePage(Reminder));