import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import styled from 'styled-components'
import { connect } from 'react-redux'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Typography, IconButton, Toolbar, Icon, Button } from '@material-ui/core';

const styles = theme => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    height: '75px',
    backgroundColor: '#fff',
    height: '100px',
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


const Header = ({ isAuthenticated, theme, classes }) => (
  <div id="footer" className={classes.footer} >
    <div className={classes.footerLinkContainer} >
      <Link href="mailto:info@expattaxback.com">Contact Us</Link>
      <Link href="/faq">FAQ</Link>
      <Link href="/terms">Terms</Link>
      <Link href="/privacy">Privacy</Link>
      <Typography style={{paddingTop:'10px'}}>© Expattaxback</Typography>
    </div>
  </div>
)

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  currentUrl: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
  const { lastUpdate, light } = state
  return { lastUpdate, light }
}

export default connect(mapStateToProps)(withStyles(styles)(Header))