
import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react';
import PropTypes from 'prop-types';
import flush from 'styled-jsx/server';
import { ServerStyleSheet } from "styled-components";


class MyDocument extends Document {
  render() {
    const { pageContext } = this.props;
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta
            name="theme-color"
            content={pageContext ? pageContext.theme.palette.primary.main : null}
          />


          <meta name="description" content="If you leave the UK mid-way through the tax year, you’ve most likely paid too much tax. Start enjoying your tax refund within 48 hours, so you can spend it on the way home!" />

          <meta property="og:url"                content="https://expattaxback.com" />
          <meta property="og:type"               content="website" />
          <meta property="og:title"              content="Fast-track your tax refund when you leave the UK" />
          <meta property="og:description"        content="If you leave the UK mid-way through the tax year, you’ve most likely paid too much tax. Start enjoying your tax refund within 48 hours, so you can spend it on the way home!" />
          <meta property="og:image"              content="https://expattaxback.com/static/images/how2.jpg" />
          
          <link rel="stylesheet" href="https://unpkg.com/normalize.css@5.0.0/normalize.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <script dangerouslySetInnerHTML={{__html: `function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','UA-137495753-2');`}} />
          <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"></script>  
          <script src="/static/js/taxcalculator.js" />
         <link rel="shortcut icon" href="/static/images/fav.png" />
          {/* {this.props.styleTags} */}
		 
			
        </Head>
        <body style={{backgroundColor: '#f9f7f6'}}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = ctx => {
  
  // Render app and page and get the context of the page with collected side effects.
  let pageContext;
  const page = ctx.renderPage(Component => {
    const WrappedComponent = props => {
      pageContext = props.pageContext;
      return <Component {...props} />;
    };

    WrappedComponent.propTypes = {
      pageContext: PropTypes.object.isRequired,
    };

    return WrappedComponent;
  });

  let css;
  // It might be undefined, e.g. after an error.
  if (pageContext) {
    css = pageContext.sheetsRegistry.toString();
  }

  return {
    ...page,
    pageContext,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: css }}
        />
        {flush() || null}
      </React.Fragment>
    ),
  };
};


export default MyDocument;