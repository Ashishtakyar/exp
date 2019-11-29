import React from 'react'
import { withStyles, withTheme } from '@material-ui/core/styles';
import {
  FormControl,
  TextField,
} from '@material-ui/core';
import NumberFormat from 'react-number-format';


const styles = theme => ({
  formControl: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 5,
    marginBottom: 5,
    minHeight: 50,
    maxWidth: 500,
  },
  inputLabel: {
    color: theme.palette.primary.dark,
  },
  textField: {
    width: '100%'
  },
});


class ETBInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      year: 1819,
      gross: 60000,
      ded: 20000,
      refund: 6116
    }
  }

  validate() {
    const { name, page, formData } = this.props;
    if (!formData || !formData.attemptedSubmitPage || !formData.attemptedSubmitPage[page]) return false;
    return !formData[name] || formData[name].length < 1;
  }

  render() {
    const { classes, formData, name, label, page, required, onChange, disabled, type = 'text' } = this.props;
    if(type === 'phone') {
      return   (
        <FormControl className={classes.formControl}>
          <NumberFormat
            customInput={TextField} 
            prefix={'+'}
            format={'+## ###########################'}
            id={name}
            label={label}
            // type={type === 'phone' ? 'number' : type}
            disabled={disabled}
            InputLabelProps={{
              className: classes.inputLabel,
            }}     
            error={required ? this.validate() : false}
            variant="outlined"
            className={classes.textField}
            value={formData[name]}
            onChange={onChange}
            margin="normal"
          />
        </FormControl>
      )
    }

    return (
      <FormControl className={classes.formControl}>
        <TextField
          id={name}
          label={label}
          type={type}
          disabled={disabled}
          InputLabelProps={{
            className: classes.inputLabel,
          }}         
          error={required ? this.validate() : false}
          variant="outlined"
          className={classes.textField}
          value={formData[name]}
          onChange={onChange}
          margin="normal"
        />
      </FormControl>
    )
  }

}


export default withTheme()(withStyles(styles)(ETBInput));