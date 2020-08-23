import React, { useState } from "react";
import { isEmpty } from "lodash";
import {
  Button,
  TextField,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  makeStyles,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    minWidth: 500,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  title: {
    textAlign: "center",
  },
  inputs: {
    marginBottom: "10px",
  },
  actions: {
    display: "block",
    textAlign: "right",
  },
});

const Form = ({ setSubmitted }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [leaseAgreement, setLeaseAgreement] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberOfTentants, setNumberOfTenants] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [backgroundCheck, setBackgroundCheck] = useState(false);
  const [creditScore, setCreditScore] = useState(false);
  const [leaseConfirm, setLeaseConfirm] = useState(false);
  const [onlinePayment, setOnlinePayment] = useState(false) 

  const classes = useStyles();

  const submitDisabled =
    isEmpty(firstName) ||
    isEmpty(lastName) ||
    isEmpty(email) ||
    isEmpty(leaseAgreement) ||
    isEmpty(phoneNumber) ||
    isEmpty(numberOfTentants) ||
    backgroundCheck !== true ||
    creditScore !== true ||
    onlinePayment !== true ||
    leaseConfirm !== true;

  const submit = () => {
    const data = {
      rental_application: {
        first_name: firstName,
        last_name: lastName,
        email,
        lease_agreement: leaseAgreement,
        phone_number: phoneNumber,
        number_of_tenants: numberOfTentants,
        additional_info: additionalInfo,
      },
    };

    setSubmitted(true);

    // @TODO - Move to Util Functions
    const token = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = token;

    axios
      .post("/rental_applications", data)
      .then(function (response) {
        setSubmitted(true);
      })
      .catch(function (error) {
        alert(
          "Unable to process application. If you continue to have issues, please reach out to frj.investments@gmail.com"
        );
      });
  };

  return (
    <Card className={classes.container} f>
      <CardHeader
        className={classes.title}
        title={
          <>
            <h3> Rental Application For Room #1 </h3>
            <h6> 410 E Greenway Drive, Tempe Arizona </h6>
          </>
        }
      />
      <CardContent>
        <Grid item xs={12}>
          <TextField
            className={classes.inputs}
            fullWidth
            label="First Name"
            placeholder="First Name"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            className={classes.inputs}
            label="Last Name"
            placeholder="Last Name"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.inputs}
            fullWidth
            label="Email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            className={classes.inputs}
            label="Desired Move In Date"
            placeholder="Desired Move In Date"
            required
            onChange={(e) => setLeaseAgreement(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            className={classes.inputs}
            label="Phone Number"
            placeholder="Phone Number"
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            className={classes.inputs}
            label="Number of Tenants"
            placeholder="Number of Tenants"
            required
            type="number"
            onChange={(e) => setNumberOfTenants(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            className={classes.inputs}
            label="Additional Information"
            placeholder="Additional Information"
            onChange={(e) => setAdditionalInfo(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            className={classes.inputs}
            control={
              <Checkbox
                checked={creditScore}
                onChange={(e) => setCreditScore(e.target.checked)}
                color="primary"
              />
            }
            label="I have a credit score of 650 or can provide proof of financial stability"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            className={classes.inputs}
            control={
              <Checkbox
                checked={onlinePayment}
                onChange={(e) => setOnlinePayment(e.target.checked)}
                color="primary"
              />
            }
            label="I will be able to make rental payments using paperless services such as: Cozy or Venmo"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            className={classes.inputs}
            control={
              <Checkbox
                checked={leaseConfirm}
                onChange={(e) => setLeaseConfirm(e.target.checked)}
                color="primary"
              />
            }
            label="I agree to at least a 6 month lease (will be signed at a later date)"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            className={classes.inputs}
            control={
              <Checkbox
                checked={backgroundCheck}
                onChange={(e) => setBackgroundCheck(e.target.checked)}
                color="primary"
              />
            }
            label={
              <Typography>
                I agree to pay for a
                <strong> $39.99 Background and Credit Check </strong> for each
                tenant over 18 years old (will be done at a later time)
              </Typography>
            }
          />
        </Grid>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button
          color="primary"
          disabled={submitDisabled}
          onClick={submit}
          variant="text"
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
};

export default Form;
