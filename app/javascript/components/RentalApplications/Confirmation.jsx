import React from "react";
import { Card, CardContent, CardHeader, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
  },
  content: {
    textAlign: "center",
  },
});

const Confirmation = () => {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <CardHeader
        className={classes.title}
        title="Your application has been submitted!"
      />
      <CardContent className={classes.content}>
        <h4>
          Thank you for providing this information. You may now schedule your
          viewing through our Calendly link below
        </h4>
        <h4>
          <a href="https://calendly.com/almondsbury/viewing" target="_blank">
            Schedule with Calendly
          </a>
        </h4>
      </CardContent>
    </Card>
  );
};

export default Confirmation;
