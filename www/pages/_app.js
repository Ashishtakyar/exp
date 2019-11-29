import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import CssBaseline from "@material-ui/core/CssBaseline";
import {JssProvider} from 'react-jss';
import getPageContext from '../lib/getPageContext'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';


class MyApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }


  render () {
    const { Component, pageProps, reduxStore } = this.props
    
    return (
      <Container>
        <Provider store={reduxStore}>
          <JssProvider
            registry={this.pageContext.sheetsRegistry}
            jss={this.pageContext.jss}
            generateClassName={this.pageContext.generateClassName}
          >
            <MuiThemeProvider 
              theme={this.pageContext.theme}
              sheetsManager={this.pageContext.sheetsManager}
            >
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <CssBaseline />
                <Component pageContext={this.pageContext} {...pageProps} />
              </MuiPickersUtilsProvider>

            </MuiThemeProvider>
          </JssProvider>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)