import React from 'react'
import { withStyles, withTheme } from '@material-ui/core/styles';
import {
  FormControl,
  MenuItem,
  TextField,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Tooltip,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Info } from "@material-ui/icons";


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
    width: '80%',
  },
  refundTextField: {
      borderColor: theme.palette.secondary.main
  },
  formControl: {
    // margin: theme.spacing.unit,
    // margin: 'auto',
    display: 'flex',
    alignItems: 'flex-start',
  },
  infoButton: {
    position: "absolute",
    right: 0
  },
  formRow: {
    width: '100%'
  },
  benefitHeader: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 13,
    marginTop: 20
  },
  benefitLabel: {
    marginLeft: 0,
    // width: '80%',
    // paddingRight: 10,
  }
});

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      year: 1920,
      gross: 0, // gross pay field
      ded: 0, // tax paid field
      refund:  2800,
      hasmedical: false,
      hascar: false,
      hastaxdebt: false,
      notsure: false
    }
  }
  
  inputChange = (evt) => {
    const id = evt.target.getAttribute("id");    
    this.setState({
      [id]: Math.round(parseInt(evt.target.value, 10)),
      refund: calculateTax()
    })
  }


  yearChange = (evt) => {
    this.setState({
      year: evt.target.value,
      refund: calculateTax()
    })
  }

  toggleChange = (evt) => {
    const id = evt.target.getAttribute("id");    
    this.setState({
      [id]: !this.state[id],
      refund: calculateTax()
    })
  }



  render() {
    const { theme, classes } = this.props;
    const years = [
      { value: 1920, label: "2019-2020" },
      { value: 1819, label: "2018-2019" },
      { value: 1718, label: "2017-2018" },
      { value: 1617, label: "2016-2017" },
      { value: 1516, label: "2015-2016" },
      // { value: 1415, label: "2014-2015" },
    ]

    return (
      <FormControl className={classes.formControl}>
        <div className={classes.formRow}>
          <Tooltip
            placement="left-start"
            enterTouchDelay={1}
            title={
              <React.Fragment>
                You can claim a refund for the past 5 years.
              </React.Fragment>
            }
          >
            <IconButton className={classes.infoButton}>
              <Info />
            </IconButton>
          </Tooltip>
          <TextField
            id="year"
            select
            label="Tax Year"
            // className={classes.textField}
            value={this.state.year}
            onChange={this.yearChange.bind(this)}
            className={classes.textField}
            InputLabelProps={{
              className: classes.inputLabel,
            }}
            margin="normal"
          >
            {years.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className={classes.formRow}>
          <Tooltip
            placement="left-start"
            enterTouchDelay={1}
            title={
              <React.Fragment>
                You can find this on your P45 or Final Payslip 
              </React.Fragment>
            }
          >
            <IconButton className={classes.infoButton}>
              <Info />
            </IconButton>
          </Tooltip>


          <TextField
            id="gross"
            label="Gross Pay"
            type="number"
            InputLabelProps={{
              className: classes.inputLabel,
            }}
            InputProps={{
              startAdornment: <InputAdornment position="start" disableTypography >£</InputAdornment>,
            }}
            // variant="outlined"
            className={classes.textField}
            value={this.state.gross}
            onChange={this.inputChange.bind(this)}
            margin="normal"
          />
        </div>
        <div className={classes.formRow}>
          <Tooltip
            placement="left-start"
            enterTouchDelay={1}
            title={
              <React.Fragment>
               You can find this on your P45 or Final Payslip 
              </React.Fragment>
            }
          >
            <IconButton className={classes.infoButton}>
              <Info />
            </IconButton>
          </Tooltip>
          <TextField
            id="ded"
            label="Tax Paid"
            type="number"
            InputLabelProps={{
              className: classes.inputLabel,
            }}
            InputProps={{
              startAdornment: <InputAdornment position="start" disableTypography >£</InputAdornment>,
            }}
            // variant="outlined"
            className={classes.textField}
            value={this.state.ded}
            onChange={this.inputChange.bind(this)}
            margin="normal"
          />
        </div>
        <div>
          <Tooltip
            placement="left-start"
            enterTouchDelay={1}
            title={
              <React.Fragment>
                We don’t expect you to know the benefit amount
              </React.Fragment>
            }
          >
            <IconButton className={classes.infoButton}>
              <Info />
            </IconButton>
          </Tooltip>
          <Typography className={classes.benefitHeader}>Did you Have?</Typography>
        </div>
        <FormControlLabel
          className={classes.benefitLabel}
          label="Medical / Dental Insurance?"
          // labelPlacement="start"  
          control={
            <Checkbox
              id={'hasmedical'}
              checked={this.state.hasmedical}
              onChange={this.toggleChange.bind(this)}
              value="disclaimerChecked"
            />
          }
        />
        <FormControlLabel
          className={classes.benefitLabel}
          label="A Company Car?"
          // labelPlacement="start"  
          control={
            <Checkbox
              id={'hascar'}
              checked={this.state.hascar}
              onChange={this.toggleChange.bind(this)}
              value="disclaimerChecked"
            />
          }
        />
        <FormControlLabel
          className={classes.benefitLabel}  
          label="Any Outstanding Tax Debt?"
          // labelPlacement="start"  
          control={
            <Checkbox
              id={'hastaxdebt'}
              // edge="start"
              checked={this.state.hastaxdebt}
              onChange={this.toggleChange.bind(this)}
              value="disclaimerChecked"
            />
          }
        />
		<FormControlLabel
          className={classes.benefitLabel}  
          label="I'm not sure"
          // labelPlacement="start"  
          control={
            <Checkbox
              id={'notsure'}
              // edge="start"
              checked={this.state.notsure}
              onChange={this.toggleChange.bind(this)}
              value="disclaimerChecked"
            />
          }
        />
        <TextField style={{fontWeight:'bold', fontSize:'32px'}}
          id="refund"
          label="Estimated Refund"
          type="number"
          step="1"
          InputLabelProps={{
            className: classes.refundLabel,
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start" disableTypography >£</InputAdornment>,
            classes: {
              root: classes.refundTextField
            },
          }}

          variant="outlined"
          className={classes.textField}
          value={this.state.refund}
          margin="normal"
        />
      </FormControl>

    )
  }

}


export default withStyles(styles)(Calculator)