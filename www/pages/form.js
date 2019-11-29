import React from "react";
import securePage from "../hocs/securePage";
import { withStyles, withTheme } from "@material-ui/core/styles";
import {
  FormControl,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Tooltip,
  Chip,
  Avatar,
  CircularProgress,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { CloudUpload, Info } from "@material-ui/icons";
import { InlineDatePicker } from "material-ui-pickers";
import SignatureCanvas from "react-signature-canvas";
import ChipInput from "material-ui-chip-input";

import {
  setFormData,
  fetchFormData,
  submitFormData
} from "../utils/form";
import { toServerFormData } from "../utils/formSerializer";

import ETBSelect from "../components/form/Select";
import ETBDatePicker from "../components/form/DatePicker";
import ETBInput from "../components/form/Input";

// List of all countries. The & character has been converted into &amp; for you, in case you want to use this directly in HTML.
// Last updated June 11, 2018

const styles = theme => ({
  section: {
    padding: "80px 20px"
  },
  imgInput: {
    display: "none"
  },
  sectionContent: {
    extend: "section",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "10px 0px"
  },
  inputLabel: {
    color: theme.palette.primary.dark
  },
  refundLabel: {
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main
  },
  textField: {
    width: "100%"
  },
  chipUpload: {
    width: "100%",
    flexFlow: "row wrap",
    paddingLeft: 54,
    // paddingBottom: 14,
    display: "flex",
    "& input": {
      display: "none"
    }
  },
  inputChipContainer: {
    minHeight: 60
  },
  authorisationNameTextField: {
    top: 3,
    width: "100%",
    maxWidth: 400,
    "& input": {
      padding: 0
    }
  },
  formControl: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    // alignItems: 'left',
    // paddingBottom: 20,
    // paddingTop: 20,
    // maxWidth: 300,
    marginTop: 5,
    marginBottom: 5,
    // minWidth: 500,
    minHeight: 50,
    maxWidth: 500
  },
  selectFormControl: {
    extend: "formControl",
    marginTop: 20
  },
  uploadFormControl: {
    extend: "formControl",
    flexDirection: "row",
    border: "solid 1px",
    // borderColor: theme.palette.secondary.main,
    borderColor: "rgba(0, 0, 0, 0.23)",
    borderRadius: 4
  },
  signatureCanvas: {
    position: "relative",
    // display: "inline-block",
    // borderRadius: 5,
    // border: "solid 1px",
    // borderColor: theme.palette.primary.dark,
    // marginTop: 20,
    // marginBottom: 20,
    // marginLeft: "50%",
    // transform: "translateX(-50%)",
    // width: '90vw',
    // maxWidth: '400px',
    // marginLeft: "50%",
    // transform: "translateX(-50%)",
    margin: 'auto',
    width: 500,
    "& Button": {
      color: "#999",
      fontSize: 14,
      right: 5,
      position: "absolute",
      bottom: 25
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  sigCanvas: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 5,
    border: "solid 1px",
    borderColor: theme.palette.primary.dark,
    width: 500,
    // height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      // height: 200,
    },
  },
  signatureCanvasInvalid: {
    extend: "signatureCanvas",
    borderColor: "#FF3B3F"
  },
  footerButtons: {
    width: "100%"
  },
  submitButton: {
    textAlign: "center",
    width: 100,
    textTransform: "capitalize",
    marginLeft: "auto"
  },
  nextButton: {
    extend: "submitButton",
    marginLeft: "auto"
  },
  previousButton: {
    extend: "submitButton",
    marginLeft: "initial"
  },
  sectionHeader: {
    maxWidth: 500,
    paddingBottom: 20,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center"
  },
  progressBarWrapper: {
    width: "100%",
    height: 10,
    position: "fixed",
    top: 75,
    backgroundColor: theme.palette.primary.main
  },
  progressBar: {
    backgroundColor: theme.palette.secondary.main,
    width: "1%",
    height: 10,
    transition: "all",
    transitionDuration: "300ms"
  },
  buttonFooter: {
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    maxWidth: 500,
    textAlign: "center",
    width: "100%"
  },
  authorisationBody: {
    maxWidth: 650,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  infoButton: {
    position: "absolute",
    top: "25%",
    right: 0
    // width: 22,
  },
  uploadAdornment: {
    marginTop: -11,
    marginLeft: 0,
    cursor: "initial",
    left: 4,
    top: 42,
    position: "absolute"
  },
  canvasTitle: {
    left: 10,
    top: 25,
    position: "absolute",
    pointerEvents: "none"
  },
  employmentDateContainer: {
    display: "flex",
    maxWidth: 500,
    margin: "auto"
  },
  benefitContainer: {
    flexDirection: 'column',
    display: 'flex',
    maxWidth: 500,
    marginTop: 5,
    minHeight: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 5,
  }
  
});

class Form extends React.Component {
  constructor(props) {
    super(props);
    const { loggedUser } = props;
    this.state = {
      loadingData: true,
      page: 0,
      maxPages: 5,
      isSubmitted: false,
      showEmployers: 1,
      form: {
        name: '',
        attemptedSubmitPage: [],
        email: loggedUser.email
      }
    };
  }

  componentDidMount = () => {
    const urlParams = new URLSearchParams(window.location.search);
    fetchFormData(this.props.loggedUser.email)
      .then(form => {
        const page = parseInt(urlParams.get("page")) || form.pageFinished || 0;
        const updatedShowEmployers = () => {
          let employerCount = 1  
          if(form && form.employmentStart) employerCount = 1
          if(form && form.employmentStart2) employerCount = 2
          if(form && form.employmentStart3) employerCount = 3;
          return employerCount;
        }
        // in case we somehow lost the email, put it back in
        if (!form.email) form.email = this.props.loggedUser.email;
        this.setState({
          loadingData: false,
          isSubmitted: form.completedAt != undefined,
          showEmployers: updatedShowEmployers(),
          form,
          page
        });
      })
      .catch(e => {
        this.setState({
          loadingData: false,
          page: 0
        });
      });
  }

  inputChange = evt => {
    const id = evt.target.getAttribute("id");
    this.setState({
      form: {
        ...this.state.form,
        [id]: evt.target.value
      }
    });
  }

  selectChange = (evt) => {
    this.setState({
      form: {
        ...this.state.form,
        [evt.target.name]: evt.target.value
      }
    });
  }

  toggleChange = (evt) => {
    const id = evt.target.getAttribute("id");    
    console.log('!!!', this.state.form);
    this.setState({
      form: {
        ...this.state.form,
        [id]: !this.state.form[id],
      }
    })
  }

  dateChange = (id, evt) => {
    this.setState({
      form: {
        ...this.state.form,
        [id]: evt
      }
    });
  }

  /**
   * @desc Go to the next page if the current page meets its validity requirements
   * @param String page - the current page
   * @param Array validations - strings which will be matched to form field id in order to check for validity of the section
   **/
  onNextPage = (page, validations) => {
    const {
      pageValidity,
      form,
      maxPages,
      isSubmitted
    } = this.state;
    let isValid = true;

    // match form input id's and check validity. Comment this out to remove validation between pages
    if(validations) {
      // check if the passed validation fields exist and have content
      for (let i = 0; i < validations.length; i++) {
        const id = validations[i];
        if(!this.state.form[id]) {
          isValid = false;
          console.log(id, ' is invalid')
        }
      }
    }
    if(!form.attemptedSubmitPage) form.attemptedSubmitPage = [];
    form.attemptedSubmitPage[page] = true;
    if (isValid) {
      const newPage = (this.state.page += 1);
      this.setState({ page: newPage, form });
      this.onSubmit();
      if (page != maxPages) {
        window.scrollTo({
          top: 0,
          left: 0
          // behavior: 'smooth'
        });
      }
    } else {
      this.setState({ form });
    }
  }

  onPreviousPage = () => {
    if (this.state.page <= 0) return;
    this.setState({
      page: (this.state.page -= 1)
    });
  }

  validate = (id, page) => {
    const { form } = this.state;
    if (!form || !form.attemptedSubmitPage || !form.attemptedSubmitPage[page]) return false;
    return !form[id] || form[id].length < 1;
  }

  checkProgress = () => {
    return ((this.state.page + 1) / (this.state.maxPages + 1)) * 100 || 2;
  }

  updateSignature = () => {
    this.setState({
      form: {
        ...this.state.form,
        authorisation: this.sigCanvas.getTrimmedCanvas().toDataURL()
      }
    });
  }

  clearSignature = () => {
    this.sigCanvas.clear();
  }

  onSubmit = async (isFinal) => {
    const { isSubmitted } = this.state;
    if (isSubmitted) return;

    this.setState({
      attemptedSubmit: true
    });

    let authorisationUrl = this.state.form.authorisation;
    if (
      this.state.form.authorisation &&
      this.state.form.authorisation.indexOf("data:image") > -1
    ) {
      // upload the signature to cloudinary
      const cloudName = "dn6usbmxp";
      const fd = new FormData();
      fd.append("upload_preset", "hqlzmfod");
      fd.append("file", this.state.form.authorisation);
      fd.append("tags", this.state.form.email);
      await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
        method: "POST",
        body: fd
      })
        .then(r => r.json())
        .then(data => {
          authorisationUrl = data.secure_url;
        })
        .catch(err => {
          console.error("Error uploading signature", err);
        });
    }

    const { form, page } = this.state;

    form.updatedAt = new Date();
    form.pageFinished = page; // set the current page
    form.authorisation = authorisationUrl;

    const formData = toServerFormData(form);

    setFormData(formData);
    submitFormData({ form: formData, isSubmitted: isFinal }).then(res => {
      this.setState({ submitted: true });
      if (isFinal) {
        // window.scrollTo({
        //   top: 0,
        //   left: 0,
        // });
        this.props.router.push("/thanks");
      }
    });
  }

  openUploadWidget = (name) => {
    const { theme } = this.props;
    const { form } = this.state;
    const myUploadWidget = cloudinary.createUploadWidget(
      {
        cloudName: "dn6usbmxp",
        uploadPreset: "hqlzmfod",
        showAdvancedOptions: false,
        showPoweredBy: false,
        // cropping: true,
        multiple: true,
        maxFiles: 6,
        maxFileSize: 3000000, // 3mb
        folder: this.state.form.email,
        // thumbnails: `.${name}-uploaded`,
        tags: [this.state.form.email],
        sources: ["local", "camera"],
        theme: "minimal",
        styles: {
          palette: {
            window: "#FFF",
            windowBorder: "#90A0B3",
            tabIcon: "#0E2F5A",
            menuIcons: "#5A616A",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: theme.palette.secondary.main,
            action: "#FF620C",
            inactiveTabIcon: "#0E2F5A",
            error: "#F44235",
            inProgress: "#0078FF",
            complete: "#20B832",
            sourceBg: "rgb(249, 247, 246)"
          }
          // fonts: {
          //     "'Cute Font', cursive": "https://fonts.googleapis.com/css?family=Cute+Font",
          // }
        }
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result);
          const newForm = form;
          if (!newForm[name] || !newForm[name].length) {
            newForm[name] = [];
            newForm[`${name}Url`] = [];
          }
          newForm[name].push(
            `${result.info.original_filename}.${result.info.format}`
          );
          newForm[`${name}Url`].push(result.info.url);
          this.setState({
            form: newForm
          });
        }
      }
    );
    myUploadWidget.open();
  }

  createUpload = (name, label, page, required, infoText) => {
    const { classes } = this.props;
    return (
      <div>
        <FormControl className={classes.formControl}>
          <ChipInput
            id={name}
            label={label}
            allowDuplicates
            // onClick={() => this.openUploadWidget(name)}
            value={this.state.form[name]}
            // value={['one', 'two', 'two', 'two', 'two', 'two', 'two', 'two', 'two', 'two', 'two']}
            error={required ? this.validate(name, page) : false}
            onDelete={deletedChip =>
              this.handleDocumentDelete(name, deletedChip)
            }
            // onChange={(deletedChip) => this.handleDocumentDelete(name,deletedChip)}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  className={classes.uploadAdornment}
                  onClick={() => this.openUploadWidget(name)}
                >
                  <IconButton>
                    <CloudUpload />
                  </IconButton>
                </InputAdornment>
              )
            }}
            InputLabelProps={{
              className: classes.inputLabel,
              shrink: true
            }}
            classes={{
              inputRoot: classes.chipUpload,
              chipContainer: classes.inputChipContainer
            }}
            chipRenderer={(
              {
                value,
                isDisabled,
                handleClick,
                handleDelete,
                className
              },
              key
            ) => (
              <Chip
                key={key}
                className={className}
                style={{
                  pointerEvents: isDisabled ? "none" : undefined
                  // backgroundColor: isFocused ? green[800] : green[300]
                }}
                onClick={handleClick}
                onDelete={handleDelete}
                label={value}
                avatar={<Avatar size={32}>{value[0].toUpperCase()}</Avatar>}
              />
            )}
            variant="outlined"
            className={{ with: "100%" }}
            margin="normal"
          />

          {infoText ? (
            <Tooltip
              placement="left-start"
              enterTouchDelay={1}
              title={
                <React.Fragment>
                  <Typography color="inherit">{label}</Typography>
                  {infoText}
                </React.Fragment>
              }
            >
              <IconButton className={classes.infoButton}>
                <Info />
              </IconButton>
            </Tooltip>
          ) : (
            ""
          )}
        </FormControl>
        <div className={`${name}-uploaded`} />
      </div>
    );
  }

  createNavButton = (direction, page, validations) => {
    const { classes } = this.props;
    return (
      <Button
        label={direction}
        primary="true"
        color={"secondary"}
        variant="contained"
        className={
          direction === "next" || direction === "authorise"
            ? classes.nextButton
            : classes.previousButton
        }
        onClick={
          direction === "next" || direction === "authorise"
            ? () => this.onNextPage(page, validations)
            : this.onPreviousPage.bind(this)
        }
      >
        {direction}
      </Button>
    );
  }

  createBankForm = (location, subLocation) => {
    const { isSubmitted } = this.state;
    // if the location is set to UK
    switch (location) {
      case "UK":
        return [
          <ETBInput
            name={"bankName"}
            label={"Bank name"}
            page={3}
            disabled={isSubmitted}
            required={true}
            formData={this.state.form}
            onChange={this.inputChange}
          />,
          <ETBInput
            name={"bankSortCode"}
            label={"Sort Code"}
            page={3}
            required={true}
            formData={this.state.form}
            onChange={this.inputChange}
          />,
          <ETBInput
            name={"bankAccountNumber"}
            label={"Account number"}
            page={3}
            required={true}
            formData={this.state.form}
            onChange={this.inputChange}
          />
        ];
    }

    // otherwise wait for a sublocation to be set
    switch (subLocation) {
      case "Australia":
        return [
          <ETBInput
            name={"bankName"}
            label={"Bank name"}
            page={3}
            disabled={isSubmitted}
            required={true}
            formData={this.state.form}
            onChange={this.inputChange}
          />,
          <ETBInput
            name={"bsb"}
            label={"BSB"}
            page={3}
            type={"number"}
            disabled={isSubmitted}
            required={true}
            formData={this.state.form}
            onChange={this.inputChange}
          />,
          <ETBInput
            name={"bankAccountNumber"}
            label={"Account number"}
            page={3}
            type={"number"}
            disabled={isSubmitted}
            required={true}
            formData={this.state.form}
            onChange={this.inputChange}
          />
        ];
      case "New Zealand":
        return [
          <ETBInput
            name={"bankName"}
            label={"Bank name"}
            page={3}
            disabled={isSubmitted}
            required={true}
            formData={this.state.form}
            onChange={this.inputChange}
          />,
          <ETBInput
            name={"bankAccountNumber"}
            label={"Account number"}
            page={3}
            type={"number"}
            disabled={isSubmitted}
            required={true}
            formData={this.state.form}
            onChange={this.inputChange}
          />
        ];
      case "Other":
        return [
          <ETBInput
            name={"bankName"}
            label={"Bank name"}
            page={3}
            disabled={isSubmitted}
            required={true}
            formData={this.state.form}
            onChange={this.inputChange}
          />,
          <ETBInput
            name={"bankSortCode"}
            label={"Sort Code"}
            page={3}
            disabled={isSubmitted}
            required={true}
            formData={this.state.form}
            onChange={this.inputChange}
          />,
          <ETBInput
            name={"bankAccountNumber"}
            label={"Account number"}
            page={3}
            type={"number"}
            disabled={isSubmitted}
            required={true}
            formData={this.state.form}
            onChange={this.inputChange}
          />
        ];
    }
  };

  getBankValidations = (location, subLocation) => {
    switch (location) {
      case "UK":
        return ["bankName", "bankSortCode", "bankAccountNumber"];
    }

    switch (subLocation) {
      case "Australia":
        return ["bankName", "bsb", "bankAccountNumber"];
      case "New Zealand":
        return ["bankName", "bankAccountNumber"];
      case "Other":
        return ["bankName", "bankSortCode", "bankAccountNumber"];
      default:
        return ["bankAccountSubLocation"];
    }
  };

  createEmploymentForm = (_id) => {
    const { classes } = this.props;
    const { form, isSubmitted } = this.state;
    let id = (_id === 1 || !_id) ? '' : _id.toString();
    return (
      <div>
        <div className={classes.employmentDateContainer}>
          <ETBDatePicker
            name={`employmentStart${id}`}
            label={"Start Date"}
            page={1}
            disabled={isSubmitted}
            required={true}
            only={"past"}
            formData={form}
            onChange={this.dateChange}
          />
          <div style={{ width: "25px" }} />
          <ETBDatePicker
            name={`employmentEnd${id}`}
            label={"End Date"}
            page={1}
            disabled={isSubmitted}
            required={true}
            formData={form}
            onChange={this.dateChange}
          />
        </div>
        <ETBInput
          name={`employerName${id}`}
          label={"Employer name"}
          page={1}
          disabled={isSubmitted}
          required={true}
          formData={form}
          onChange={this.inputChange}
        />
        <ETBInput
          name={`employerAddress${id}`}
          label={"Address"}
          page={1}
          disabled={isSubmitted}
          required={true}
          formData={form}
          onChange={this.inputChange}
        />
        <ETBInput
          name={`employerPostcode${id}`}
          label={"Postcode"}
          page={1}
          disabled={isSubmitted}
          required={true}
          formData={form}
          onChange={this.inputChange}
        />
        <ETBInput
          name={`employerContactNumber${id}`}
          label={"Contact number"}
          page={1}
          disabled={isSubmitted}
          required={true}
          type={"phone"}
          formData={form}
          onChange={this.inputChange}
        />
        <ETBInput
          name={`employerContactEmail${id}`}
          label={"Contact email"}
          page={1}
          disabled={isSubmitted}
          required={true}
          formData={form}
          onChange={this.inputChange}
        />
      </div>
    )
  }

  handleDocumentDelete = (name, id) => {
    this.setState({
      form: {
        [name]: this.state.form[name].filter(c => c !== id)
      }
    });
  };

  handleAddEmployer = () => {
    const {showEmployers} = this.state;
    const newShowEmployers = showEmployers + 1;
    this.setState({
      showEmployers: newShowEmployers
    });
  }

  render() {
    const { isAuthenticated, classes } = this.props;
    const { page, maxPages, form, loadingData, isSubmitted } = this.state;
    return (
      <div className="container">
        <div className={classes.progressBarWrapper}>
          <div
            className={classes.progressBar}
            style={{ width: `${this.checkProgress()}%` }}
          />
        </div>
        {!loadingData ? (
          <div className={classes.section}>
            {page === maxPages ? (
              <div>
                <Typography variant={"h1"} className={classes.sectionHeader}>
                  Review
                </Typography>
                <Typography variant={"h5"} className={classes.sectionHeader}>
                  Are your details correct?
                </Typography>
              </div>
            ) : (
              ""
            )}

            {page === 0 || page === maxPages ? (
              <div id="form-0" className={classes.sectionContent}>
                <Typography variant={"h4"} className={classes.sectionHeader}>
                  Personal Information
                </Typography>

                <ETBInput
                  name={"name"}
                  label={"Name"}
                  page={0}
                  disabled={isSubmitted}
                  required={true}
                  formData={this.state.form}
                  onChange={this.inputChange}
                />
                <ETBInput
                  name={"ni"}
                  label={"National Insurance Number"}
                  page={0}
                  disabled={isSubmitted}
                  required={true}
                  formData={this.state.form}
                  onChange={this.inputChange}
                />
                <ETBSelect
                  name={"nationality"}
                  label={"Nationality"}
                  options={countryList}
                  page={0}
                  disabled={isSubmitted}
                  required={true}
                  formData={this.state.form}
                  onChange={this.selectChange}
                />
                <ETBDatePicker
                  name={"dob"}
                  label={"Dob"}
                  page={0}
                  disabled={isSubmitted}
                  required={true}
                  only={"past"}
                  formData={this.state.form}
                  onChange={this.dateChange}
                />
                <ETBInput
                  name={"number"}
                  label={"Contact number"}
                  page={0}
                  disabled={isSubmitted}
                  required={true}
                  type={"phone"}
                  formData={this.state.form}
                  onChange={this.inputChange}
                />
                <ETBDatePicker
                  name={"arrivalDate"}
                  label={"Arrived in the UK"}
                  page={0}
                  disabled={isSubmitted}
                  required={true}
                  only={"past"}
                  formData={this.state.form}
                  onChange={this.dateChange}
                />
                <ETBSelect
                  name={"taxYear"}
                  label={"Tax Year"}
                  options={[
                    "2019-2020",
                    "2018-2019",
                    "2017-2018",
                    "2016-2017",
                    "2015-2016",
                  ]}
                  page={0}
                  disabled={isSubmitted}
                  required={true}
                  formData={this.state.form}
                  onChange={this.selectChange}
                />
                
                
                <ETBDatePicker
                  name={`dateLeftUK`}
                  label={"Departure date from UK"}
                  page={0}
                  disabled={isSubmitted}
                  required={true}
                  only={"past"}
                  formData={form}
                  onChange={this.dateChange}
                />
                

                <ETBInput
                  name={`lastUKAddress`}
                  label={"Most recent address in UK before leaving"}
                  page={0}
                  disabled={isSubmitted}
                  required={true}
                  formData={form}
                  onChange={this.inputChange}
                />
                <ETBInput
                  name={`lastUKPostcode`}
                  label={"Most recent postcode in UK before leaving"}
                  page={0}
                  disabled={isSubmitted}
                  required={true}
                  formData={form}
                  onChange={this.inputChange}
                />

                <ETBInput
                  name={`newAddress`}
                  label={"Address in home Country"}
                  page={0}
                  disabled={isSubmitted}
                  required={true}
                  formData={form}
                  onChange={this.inputChange}
                />
                <ETBInput
                  name={`newPostcode`}
                  label={"Post code in home Country"}
                  page={0}
                  disabled={isSubmitted}
                  required={true}
                  formData={form}
                  onChange={this.inputChange}
                />
                <p/>
                <Typography variant={"h5"} className={classes.sectionHeader}>Did you have?</Typography>
                <div className={classes.benefitContainer}>
                  <FormControlLabel
                    className={classes.benefitLabel}
                    label="Medical / Dental Insurance?"
                    control={
                      <Checkbox
                        id={'hasMedical'}
                        checked={form.hasMedical}
                        onChange={this.toggleChange.bind(this)}
                        value="disclaimerChecked"
                      />
                    }
                  />
                  <FormControlLabel
                    className={classes.benefitLabel}
                    label="A Company Car?"
                    control={
                      <Checkbox
                        id={'hasCar'}
                        checked={form.hasCar}
                        onChange={this.toggleChange.bind(this)}
                        value="disclaimerChecked"
                      />
                    }
                  />
                  <FormControlLabel
                    className={classes.benefitLabel}  
                    label="Any Outstanding Tax Debt?"
                    control={
                      <Checkbox
                        id={'hasTaxDebt'}
                        // edge="start"
                        checked={form.hasTaxDebt}
                        onChange={this.toggleChange.bind(this)}
                        value="disclaimerChecked"
                      />
                    }
                  />
				  <FormControlLabel
                    className={classes.benefitLabel}
                    label="I'm not sure"
                    control={
                      <Checkbox
                        id={'notsure'}
                        checked={form.notsure}
                        onChange={this.toggleChange.bind(this)}
                        value="disclaimerChecked"
                      />
                    }
                  />
                </div>
                  
                <div className={classes.buttonFooter}>
                  {page === 0
                    ? this.createNavButton("next", 0, [
                        "name",
                        "ni",
                        "dob",
                        "nationality",
                        "number",
                        "arrivalDate",
                        "taxYear",
                        "dateLeftUK",
                        "lastUKAddress",
                        "lastUKPostcode",
                        "newAddress",
                        "newPostcode"
                      ])
                    : ""}
                </div>
              </div>
            ) : (
              ""
            )}

            {page === 1 || page === maxPages ? (
              <div id="form-1" className={classes.sectionContent}>
                <Typography variant={"h4"} className={classes.sectionHeader}>
                  Employer Details
                </Typography>

                <Typography
                  variant={"subtitle2"}
                  className={classes.sectionHeader}
                >
                  If we need any more information after you have left the UK, we
                  will make sure to contact them for you.
                </Typography>
                
                { this.state.showEmployers >= 1 ? [
                  <Typography variant={"h5"} className={classes.sectionHeader}>Employer 1</Typography>,
                  this.createEmploymentForm()]
                 : ''}
                { this.state.showEmployers >= 2 ? [
                  <Typography variant={"h5"} className={classes.sectionHeader}>Employer 2</Typography>,
                  this.createEmploymentForm(2)
                 ] : ''}
                { this.state.showEmployers === 3 ? [
                  <Typography variant={"h5"} className={classes.sectionHeader}>Employer 3</Typography>,
                  this.createEmploymentForm(3)
                 ] : ''}
                { this.state.showEmployers < 3 ?
                  <Button
                    label={'addAnotherEmployer'}
                    primary="true"
                    color={"secondary"}
                    variant="contained"
                    onClick ={this.handleAddEmployer}
                    style={{
                      left: '50%',
                      transform: 'translateX(-50%)'
                    }}
                  >
                    Add another Employer
                  </Button>
                  : '' }

                <div className={classes.buttonFooter}>
                  {page === 1 ? this.createNavButton("back", 1) : ""}
                  {page === 1
                    ? this.createNavButton("next", 1, [
                        "employerName",
                        "employerAddress",
                        "employerPostcode",
                        "employerContactNumber",
                        "employmentStart",
                        "employmentEnd"
                      ])
                    : ""}
                </div>
              </div>
            ) : (
              ""
            )}

            {page === 2 || page === maxPages ? (
              <div id="form-2" className={classes.sectionContent}>
                <Typography variant={"h4"} className={classes.sectionHeader}>
                  Required Documentation
                </Typography>
                <Typography
                  variant={"subtitle2"}
                  className={classes.sectionHeader}
                >
                  We need this information to complete your refund. Either
                  upload the document or take a photo of the original. Make sure
                  it’s clear and under 2MB, or it won’t upload properly. You can
                  upload a PDF, JPG or PNG.
                </Typography>

                
                {this.createUpload("p45", "P45", 2, true, [
                  "A P45 document is a certificate of your income indicating how much you earned and how much tax you paid on those earnings. It is a three-page form, which your employer will issue to you at the end of each employment. Part 1A is to be kept by you for when you want to claim your tax back. The other parts are to be handed to your next employer (if you stay in the UK).",
                  <p />,
                  "You will need to submit a copy of all three parts of the P45.",
                  <p />,
                  "If you have P45's from more than 1 employer for the year, you will need to upload all of them"
                ])}
                {this.createUpload("finalPaySlip", "Final Payslip", 2, true)}
                {this.createUpload(
                  "proofOfId",
                  "Proof of ID",
                  2,
                  true,
                  "A photo of your passport"
                )}
                {this.createUpload(
                  "idVerification",
                  "Verification of ID ",
                  2,
                  true,
                  "A photo of you holding your passport next to your face (so we know its you)"
                )}
                {this.createUpload(
                  "p60",
                  "P60",
                  2,
                  false,
                  "Your employer sends this to you and at the end of each tax year, confirming how much tax you have paid. You only need to submit this if you are claiming for a period previous to the current tax year (e.g before 18/19), but if you have it, upload it- the more information we have, the quicker we can fast track your refund."
                )}
                <div className={classes.buttonFooter}>
                  {page === 2 ? this.createNavButton("back", 2) : ""}
                  {page === 2 ? this.createNavButton("next", 2, ["p45", "proofOfId", "finalPaySlip", "idVerification"]) : ""}
                </div>
              </div>
            ) : (
              ""
            )}

            {page === 3 || page === maxPages ? (
              <div id="form-3" className={classes.sectionContent}>
                <Typography variant={"h4"} className={classes.sectionHeader}>
                  Bank Details
                </Typography>
                <Typography
                  variant={"subtitle2"}
                  className={classes.sectionHeader}
                >
                  We need to know where to send your money. You can either
                  nominate to send it to a UK or International bank account.
                </Typography>
                <ETBSelect
                  name={"bankAccountLocation"}
                  label={"Account location"}
                  options={["UK", "International"]}
                  page={3}
                  disabled={isSubmitted}
                  required={true}
                  formData={this.state.form}
                  onChange={this.selectChange}
                />

                {form.bankAccountLocation === "International" ? (
                  <ETBSelect
                    name={"bankAccountSubLocation"}
                    label={"Account location"}
                    options={["Australia", "New Zealand", "Other"]}
                    page={3}
                    disabled={isSubmitted}
                    required={form.bankAccountLocation === "International"}
                    formData={this.state.form}
                    onChange={this.selectChange}
                  />
                ) : (
                  ""
                )}

                {this.createBankForm(
                  form.bankAccountLocation,
                  form.bankAccountSubLocation
                )}

                <div className={classes.buttonFooter}>
                  {page === 3 ? this.createNavButton("back", 3) : ""}
                  {page === 3
                    ? this.createNavButton("next", 3, [
                        "bankAccountLocation",
                        ...this.getBankValidations(
                          form.bankAccountLocation,
                          form.bankAccountSubLocation
                        )
                      ])
                    : ""}
                </div>
              </div>
            ) : (
              ""
            )}

            {page === 4 || page === maxPages ? (
              <div id="form-4" className={classes.sectionContent}>
                <Typography variant={"h4"} className={classes.sectionHeader}>
                  Authorisation
                </Typography>

                <ol className={classes.authorisationBody}>
                  <li>
                    <Typography variant={"body1"}>
                      I{" "}
                      {
                        <TextField
                          id="authorisationName"
                          // label={label}
                          placeholder="(type full name here)"
                          type="text"
                          // error={this.validate("authorisationName", 4)}
                          error={true}
                          // InputLabelProps={{
                          //   className: classes.inputLabel,
                          // }}
                          // variant="outlined"
                          className={classes.authorisationNameTextField}
                          value={this.state.form["authorisationName"]}
                          onChange={this.inputChange.bind(this)}
                          // margin="normal"
                        />
                      }
                      , have instructed <strong>expattaxback</strong> to act as
                      my agent for my tax rebate claim. By signing this
                      authorisation, I am also authorising my digital signature
                      to be applied to the ‘authorise your agent’ 64-8
                      application, giving <strong>expattaxback</strong> the
                      authority to act on my behalf.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      I have read and completed the online application and
                      certify that it shows a true representation of my personal
                      details and UK employment history.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      I agree that the rebate shall be made payable to{" "}
                      <strong>expattaxback</strong> as my authorised agent.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      This contract is binding on both parties until the
                      completion of payment made by{" "}
                      <strong>expattaxback</strong>.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      I understand that in the absence of all the necessary
                      information and/or my full cooperation in answering any of{" "}
                      <strong>expattaxback’s</strong> queries in relation to the
                      information provided, they may be unable to proceed with
                      my PAYE refund claim.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      I confirm to hold receipts and documents on file to
                      support any allowable expenses included in this PAYE
                      refund claim.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      I agree that to ascertain my overall PAYE refund claim
                      position for any period, <strong>expattaxback</strong> may
                      review my earnings and tax paid position, for tax years
                      outside of the originally nominated tax year(s). To the
                      extent that further applications are required or
                      recommended for additional tax years, I agree I will pay
                      the relevant processing fees (see 11 below).
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      I authorise <strong>expattaxback</strong> to retrieve my
                      P45/P60/SOE documents from previous employers, if I do not
                      have them.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      Should I receive the refund directly from any other source
                      other than <strong>expattaxback</strong>, I agree that I
                      will contact <strong>expattaxback</strong> and pay the
                      appropriate fee due for the work within 14 days of
                      receiving the payment.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      In respects to 9, I understand that{" "}
                      <strong>expattaxback</strong> may seek recovery of any
                      such fees through the appropriate legal channels if my
                      payment is not forthcoming.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      <strong>Expattaxback</strong> will charge a fee of £125 to
                      process the refund claim.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      All charges are exclusive of Value Added Tax (20% of total
                      charges) and will be applied to the total charges.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      All correspondence, telephone, postal and incidental costs
                      will be paid for by <strong>expattaxback</strong> and are
                      inclusive of the fee.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      If I nominate an international bank transfer, the transfer
                      cost is £15.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      We want you to be entirely satisfied with the services
                      provided to you.In the first instance please contact{" "}
                      <a href="mailto:info@expattaxback.com">
                        info@expattaxback.com
                      </a>{" "}
                      to discuss any concerns you have, so that the matter can
                      be looked into immediately.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      Upon receipt of your written formal complaint an
                      acknowledgement will be sent to you within 7 working days.
                      The name and contact details of the person who will be
                      dealing with your case will be supplied to you at this
                      point.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      Within 14 working days from receipt of your written
                      complaint you will receive in writing a summary of our
                      understanding of your complaint. You will be asked at this
                      time to provide any further evidence or information
                      regarding the complaint and to confirm that we have
                      understood all your concerns.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      Following such confirmation, we will investigate the
                      matter and write to you in reply within 14 ]working days
                      unless it becomes apparent to us that the investigation
                      may not be completed within this timescale. In these
                      circumstances, a written explanation will be sent to you
                      including a progress report. .When a substantive reply is
                      sent you, a summary of findings will be included along
                      with details of any further action to be taken.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      For service related matters involving a CIMA member in
                      Practice in the UK, you may wish to know that CIMA offers
                      an independent Alternative Dispute Resolution (ADR)
                      facility for members of the public.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      If in the context of your dealings with us or the handling
                      of your complaint, you believe that a member of CIMA has
                      been guilty of misconduct, you may lodge a complaint with
                      the Professional Conduct department of the Institute.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      Further information on ADR or making a complaint about
                      alleged misconduct can be found on the CIMA website at{" "}
                      <a href="www.cimaglobal.com">www.cimaglobal.com</a>.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      If a complaint cannot be resolved through our internal
                      complaints handling procedure, under the Consumer Rights
                      Act 2015 we are required to point you towards alternative
                      dispute resolution (ADR) providers. There are many ADR
                      providers listed on the{" "}
                      <a href="http://www.tradingstandards.uk/advice/ADRApprovedBodies.cfm">
                        Chartered Trading Standards Institute website
                      </a>{" "}
                      but CIMA has an arrangement with CEDR for the provision of
                      ADR. More information is available on the CIMAGlobal
                      website.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant={"body1"}>
                      <strong>expattaxback</strong> reserve the right to refuse
                      to process any claim without reason
                    </Typography>
                  </li>
                </ol>

                <div
                  className={
                    !this.validate("authorisation", 4)
                      ? classes.signatureCanvas
                      : classes.signatureCanvasInvalid
                  }
                >
                  <Typography className={classes.canvasTitle} variant={"body1"}>
                    Sign here:
                  </Typography>
                  <SignatureCanvas
                    id="authorisation"
                    penColor="black"
                    canvasProps={{
                      height: 300,
                      // width: 600,
                      className: classes.sigCanvas
                    }}
                    onEnd={this.updateSignature.bind(this)}
                    ref={ref => {
                      this.sigCanvas = ref;
                    }}
                  />
                  <Button onClick={this.clearSignature.bind(this)}>
                    CLEAR
                  </Button>
                </div>

                {page === maxPages ? (
                  <div className={classes.buttonFooter}>
                    {page === 5 ? this.createNavButton("back") : ""}
                    {isAuthenticated ? (
                      <Button
                        label="submit"
                        primary="true"
                        color={"secondary"}
                        variant="contained"
                        className={classes.submitButton}
                        onClick={() => this.onSubmit(true)}
                      >
                        Submit
                      </Button>
                    ) : (
                      <Button
                        primary="true"
                        color="secondary"
                        variant="contained"
                        className={classes.submitButton}
                        href="/auth/sign-in"
                      >
                        Submit.
                      </Button>
                    )}
                  </div>
                ) : (
                  <div className={classes.buttonFooter}>
                    {page === 4 ? this.createNavButton("back") : ""}
                    {page === 4
                      ? this.createNavButton("authorise", 4, ["authorisation"])
                      : ""}
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          <div className={classes.section} style={{ textAlign: "center" }}>
            <CircularProgress className={classes.progress} color="secondary" />
          </div>
        )}
      </div>
    );
  }
}

export default withTheme()(withStyles(styles)(securePage(Form)));

const countryList = [
  "Australia",
  "Canada",
  "New Zealand",
  "South Africa",
  " ------",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua & Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia & Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre & Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts & Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad & Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks & Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "United States Minor Outlying Islands",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];
