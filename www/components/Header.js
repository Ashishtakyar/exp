import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import { connect } from 'react-redux'
import { Button, Avatar } from '@material-ui/core';
import { authorize } from '../utils/auth0'

const styles = theme => ({
  nav: {
    display: 'flex',
    alignItems: 'center',
    height: '75px',
    backgroundColor: '#fff',
    borderBottom: 'solid 1px #7a7a7a',
    position:'fixed',
    width: '100%',
    zIndex: '100',
    top: '0',
  },
  RightLinks: {
    position: 'fixed',
    display: 'flex',
    right: '20px',
    zIndex: '500',
    height: 40, 
    alignSelf: 'center',
    '& button:first-child': {
      marginRight: '10px',
    },
  },
  centerHeader: {
    textAlign: 'left',
    marginLeft: '20px',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      paddingTop:'2px',
      '& img': {
        width: '160px'
      }
    },
  }
});


const Header = ({ isAuthenticated, theme, classes, loggedUser }) => (
  <div className={classes.nav} >
    <div className={classes.centerHeader} >  
      <Link href="/" >
        <a><img src='/static/images/logo.png' width="200px"/></a>
      </Link>
    </div>
    
    <div className={classes.RightLinks}>
     
      
      
      {/* <Button href="/getstarted" variant="contained" size="small" color="secondary">
        Get Started
      </Button>  */}  
      {!isAuthenticated ?
          <Button size="small" onClick={() => authorize()} > Sign In </Button> :
          (
            <div>
              
              <Button href="/profile" variant="text" >
                <Avatar src={loggedUser.picture} >
                  {loggedUser.nickname.slice(0,1)}
                </Avatar>
              </Button>
              <Button size="small" href="/auth/sign-off" > Sign Out </Button>
            </div>
          )
      }
    </div>
  </div>
)

const mapStateToProps = (state) => {
  const { lastUpdate, light } = state
  return { lastUpdate, light }
}

export default connect(mapStateToProps)(withStyles(styles)(Header))
