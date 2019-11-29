import React from 'react'
import Router from 'next/router'
import { withTheme } from '@material-ui/core/styles';
import Cookies from 'universal-cookie';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Consent from '../components/Consent';


import { getUserFromServerCookie, getUserFromLocalCookie } from '../utils/auth'
import { getFormDataFromLocalCookie } from '../utils/form';


const cookies = new Cookies();

const defaultPage = Page => withTheme()(class DefaultPage extends React.Component {
  static getInitialProps(ctx) {
    const loggedUser = process.browser ? getUserFromLocalCookie() : getUserFromServerCookie(ctx.req);
    const formData = process.browser ? getFormDataFromLocalCookie() : null;
    const pageProps = Page.getInitialProps && Page.getInitialProps(ctx);
    return {
      ...pageProps,
      loggedUser,
      currentUrl: ctx.pathname,
      isAuthenticated: !!loggedUser,
      formData,
    }
  }

  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
    this.state ={
      consentState: cookies.get('consent'),
      showConsentBanner: false
    }
  }

  logout(eve) {
    if (eve.key === 'logout') {
      Router.push(`/?logout=${eve.newValue}`)
    }
  }

  componentDidMount() {
    window.addEventListener('storage', this.logout, false)
    const showConsentBanner = !(cookies.get('consent') && cookies.get('consent').length > 0);
    this.setState({
      showConsentBanner
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  }

  componentWillUnmount() {
    window.removeEventListener('storage', this.logout, false)
  }

  consentHandler(state) {
    cookies.set('consent', state.toString(), { path: '/' });
    this.setState({
      showConsentBanner: false, 
      consentState: state
    })
  }


  render() {
    const { currentUrl, isAuthenticated, theme, loggedUser } = this.props
    return (
      <div>
        <Header 
          currentUrl={currentUrl}
          isAuthenticated={isAuthenticated}
          theme={theme}
          loggedUser={loggedUser}
        />
        <div style={{marginTop: '75px'}}> 
          <Page {...this.props} />
        </div>
        <Footer />
        { this.state.showConsentBanner
          ? <Consent consentHandler={this.consentHandler.bind(this)} /> 
          : ''
        }
      </div>
    )
  }
})

export default defaultPage
