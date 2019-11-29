import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import NotAuthorized from '../components/NotAuthorized'
import defaultPage from './defaultPage'

const securePageHoc = Page => class SecurePage extends React.Component {
  static getInitialProps (ctx) {
    
    return Page.getInitialProps && Page.getInitialProps(ctx)
  }

  componentWillMount(props){
    if(!this.props.isAuthenticated) {
      this.props.router.push("/auth/sign-in")
    }
  }
  
  render () {
    if (!this.props.isAuthenticated) {
      // not ussing this currently as unauthenticated requests are automatically redirected
      return <NotAuthorized />
    }
    return <Page {...this.props} />
  }
}

export default Page => withRouter(defaultPage(securePageHoc(Page)))