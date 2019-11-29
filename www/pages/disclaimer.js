import React from 'react'
import { withStyles, withTheme } from '@material-ui/core/styles';
import { Typography, Button, Checkbox } from '@material-ui/core';
import securePage from '../hocs/securePage'

const styles = theme => ({
  section: {
    padding: "80px 20px"
  },
  sectionContent: {
    extend: 'section',
    maxWidth: '800px',
    margin: '0 auto',
    minHeight: '300px',
    padding: '0px 40px',
  },
  sectionHeader: {
    paddingBottom: 20,
  },
  subHeader: {
    paddingTop: 20,
    paddingBottom: 5,
  },
  mainContent: {
    paddingTop: 20,
  },
  getStartedButton: {
    textAlign: 'center',
    // width: 100,
    textTransform: 'capitalize',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  buttonFooter: {
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    
    maxWidth: 500,
    textAlign: 'center',
    width: '100%',
  },
  tocContainer: {
    display: 'flex',
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 290,
    textAlign: 'center',
    width: '100%',
  },
  tocLabel: {
    fontSize: 14,
    paddingTop:2,
  },
  // root: {
  //   color: '#ff6000',
  //   '&$checked': {
  //     color: '#ff6000',
  //   },
  // },
  // checked: {},
});


class Disclaimer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      disclaimerChecked:false
    }
  }

  handleChange = name => event => {
    console.log(event.target);
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const {theme, classes, loggedUser } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.sectionContent}>
          <Typography variant={"h4"} className={classes.sectionHeader}>
            Disclaimer
          </Typography>

          <p>Expat Tax Back takes privacy, online security and fraudulent activity very seriously. We have to be extra vigilant because we are an online platform and dealing with your personal and sensitive information.</p>


          <p>Do <b>not</b> continue if: </p>

          <ul>
            <li>You have already submitted a tax refund for the relevant tax year in question</li>
            <li>You have not left the UK, or are not expecting to permanently leave the UK at the time of completing this refund</li>
            <li>You are in Self-Assessment. This service is only available if you are PAYE (e.g if you are an employee and your employer deducts tax from your wages or salary under the Pay As You Earn (PAYE) system</li>
            <li>Employed  in Scotland. Please contact <a href='info@expattaxback.com'>info@expattaxback.com</a> directly</li>
            <li>You worked multiple jobs during the tax year in question. If the answer is yes, contact <a href='info@expattaxback.com'>info@expattaxback.com</a> directly, as we will need to verify additional information</li>
          </ul>

          <p>If you are unsure of the above and would like more guidance, contact us directly at <a href='info@expattaxback.com'>info@expattaxback.com</a></p>

          <p>By continuing, you are complying with our Terms and Conditions and will be held liable for any misconduct.</p>

          <div className={classes.buttonFooter} >
            <div className={classes.tocContainer}>
              <Checkbox
                checked={this.state.disclaimerChecked}
                onChange={this.handleChange('disclaimerChecked')}
                
                value="disclaimerChecked"
              />
              <p className={classes.tocLabel}>I agree to the <a href='/terms'>Terms & Conditions.</a></p>
            </div>
            <Button
              label="get started"
              primary="true"
              color={'secondary'}
              variant="contained"
              disabled={!this.state.disclaimerChecked}
              className={classes.getStartedButton}
              href="/getstarted"
              // onClick={direction === 'next' || direction === 'authorise' ? () => this.onNextPage(page, validations) : this.onPreviousPage.bind(this)}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withTheme()(withStyles(styles)(securePage(Disclaimer)));
