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
          We will review your application and contact you as soon as possible.
          Once it has been reviewed, we will reach out to schedule a for you to
          view the rental
        </h4>
        <h4> Thank you and have a great day! </h4>
      </CardContent>
    </Card>
  );
};

export default Confirmation;
