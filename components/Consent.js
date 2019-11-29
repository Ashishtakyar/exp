import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import styled from 'styled-components'
import { connect } from 'react-redux'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Typography, IconButton, Toolbar, Icon, Button } from '@material-ui/core';
import Cookies from 'universal-cookie';

const styles = theme => ({
  consent: {
    position: 'fixed',
    bottom: 0,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    width: '100%',
    textAlign: 'center'
  },
  footerLinkContainer: {
    margin: 'auto',
    '& a':{
      margin: '0 10px',
      textDecoration: 'none',
      color: theme.palette.text.primary,
      '&:hover': {
        color: theme.palette.secondary.main
      }
    }
  },
});


const Consent = ({ consentHandler , theme, classes }) => (
  <div id="consent" className={classes.consent} >
    <Typography style={{paddingTop:'10px'}}>
      We use cookies and other tracking technologies to improve your browsing experience on our website, to show you personalized content, to analyze our website traffic, and to understand where our visitors are coming from. By browsing our website, you consent to our use of cookies and other tracking technologies.
    </Typography>
    <div className={classes.footerLinkContainer} >  
      <Button onClick={() => consentHandler(true)} >Accept</Button>
      <Button onClick={() => consentHandler(false)} >Decline</Button>
    </div>
  </div>
)


export default withStyles(styles)(Consent);