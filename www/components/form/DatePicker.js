import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, withTheme } from '@material-ui/core/styles';
import {
  FormControl,
} from '@material-ui/core';
import { InlineDatePicker } from "material-ui-pickers";

const styles = theme => ({
  formControl: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 5,
    minHeight: 50,
    maxWidth: 500,
  },
   textField: {
    width: '100%'
  },
  inputLabel: {
    color: theme.palette.primary.dark,
  },
});


class ETBDatePicker extends React.Component {
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
    const { theme, classes, formData, name, label, only, page, required, onChange, disabled } = this.props;
    return (
      <FormControl className={classes.formControl}>
        <InlineDatePicker
          id={name}
          label={label}
          disabled={disabled}
          variant="outlined"
          disablePast={only === 'future'}
          disableFuture={only ==='past'}
          className={classes.textField}
          placeholder={'(dd/mm/yy)'}
          value={formData[name] || null}
          InputLabelProps={{
            className: classes.inputLabel,
          }}
          onChange={(e) => onChange(name, e)}
          error={required ? this.validate() : false}
          keyboard
          clearable
          format={"DD/MM/YY"}
          // margin="normal"
        />
      </FormControl>
    )
  }

}


export default withTheme()(withStyles(styles)(ETBDatePicker));