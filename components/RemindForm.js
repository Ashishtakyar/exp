import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, withTheme } from '@material-ui/core/styles';
import Link from 'next/link'
import styled from 'styled-components'
import { connect } from 'react-redux'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Typography, IconButton, Toolbar, Icon, Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { InlineDatePicker } from "material-ui-pickers";
import fetch from 'isomorphic-unfetch';
import MomentUtils from '@date-io/moment';

const styles = theme => ({
  inputLabel: {
      color: theme.palette.primary.dark,
  },
  refundLabel: {
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    // width: 300,
  },
  formControl: {
    // margin: theme.spacing.unit,
    // margin: 'auto',
    display: 'flex',
    alignItems: 'left',
    maxWidth: 300
  },
  submitButton: {
    width: '100%'
  }
});

class RemindForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      date: new MomentUtils().moment(),
      submitted: false,
      attemptedSubmit: false
    }
  }

  inputChange = (evt) => {
    const id = evt.target.getAttribute("id");    
    this.setState({
      [id]: evt.target.value,
    })
  }

  dateChange = (evt) => {
    this.setState({date: evt})
  }

  validate = (evt) => {
    if(!this.state.attemptedSubmit) return false;
    return evt ? false : true 
  }

  onSubmit = () => {
    this.setState({attemptedSubmit:true})
    const {name, email, date} = this.state;
    if(!name || !email) return;
    
    let baseURL = undefined;
    if(window.location.hostname === 'localhost') {
      // local dev
      baseURL = 'http://localhost:3001'
    } else {
      // hosted
      baseURL = window.location.protocol +'//'+ window.location.hostname
    }


    fetch(`${baseURL}/api/reminder.js`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        date: date.format('YYYY-MM-DD')
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(r => r.json())
    .then( data => { 
      this.setState({submitted:true});
      console.log(data)
    })
    .catch((err)=>{
      console.error('Fetch ERROR:',err)
    });
  }

  render() {
    const { isAuthenticated, theme, classes } = this.props;
  
    return !this.state.submitted ? (
        <FormControl className={classes.formControl}>
          <TextField
            id="name"
            label="Name"
            type="text"
            InputLabelProps={{
              className: classes.inputLabel,
            }}
            // variant="outlined"
            className={classes.textField}
            value={this.state.name}
            required
            error={this.validate(this.state.name)}
            onChange={this.inputChange.bind(this)}
            margin="normal"
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            InputLabelProps={{
              className: classes.inputLabel,
            }}
            // variant="outlined"
            className={classes.textField}
            value={this.state.email}
            required
            onChange={this.inputChange.bind(this)}
            error={this.validate(this.state.email)}
            margin="normal"
          />
          <br />
          <InlineDatePicker
            id="date"
            label="Return Date"
            disablePast
            className={classes.textField}
            value={this.state.date}
            InputLabelProps={{
              className: classes.inputLabel,
            }}
            required
            onChange={this.dateChange.bind(this)}
            error={this.validate(this.state.date)}
            // animateYearScrolling
            keyboard
            clearable
            format={"MM/DD/YY"}
          />
          <br/>
          <Button
            label="Submit"
            primary={true}
            color={'secondary'}
            variant="contained"
            className={classes.submitButton}
            onClick={this.onSubmit.bind(this)}
          >
            Submit
          </Button>
      </FormControl>
    ) : (
      <div>
        <p/>
        Thanks! We'll be in touch.
      </div>
    )
  }
}

RemindForm.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  currentUrl: PropTypes.string.isRequired,
}


export default withTheme()(withStyles(styles)(RemindForm))