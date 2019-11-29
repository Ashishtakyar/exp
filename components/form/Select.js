import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, withTheme } from '@material-ui/core/styles';
import {
  InputLabel,
  Select,
  FormControl,
  MenuItem,
  OutlinedInput,
} from '@material-ui/core';

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
  selectFormControl: {
    extend: 'formControl',
    marginTop:15,
    marginBottom: 20,
  },
  inputLabel: {
    color: theme.palette.primary.dark,
  }
});


class ETBSelect extends React.Component {
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
    const { theme, classes, formData, name, label, options, page, required, onChange, disabled } = this.props;
    return (
      <FormControl className={classes.selectFormControl} variant="outlined" >
        <InputLabel htmlFor={`${name}-id`} className={classes.inputLabel}>{label}</InputLabel>
        <Select
          value={formData[name] || ""}
          onChange={onChange}
          disabled={disabled}
          error={required ? this.validate() : false}
          className={classes.textField}
          input={
            <OutlinedInput
              labelWidth={300}
              name={name}
              id={`${name}-id`}
            />
          }
        >
          {options.map((option) => {
            return <MenuItem key={`${option}-${Math.random()}`} value={option}>{option}</MenuItem>
          })}
        </Select>
      </FormControl>
    )
  }

}


export default withTheme()(withStyles(styles)(ETBSelect));