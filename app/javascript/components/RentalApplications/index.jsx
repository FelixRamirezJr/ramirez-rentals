import React, { useState } from "react";
import Form from "./Form";
import Confirmation from "./Confirmation";
import { Grid } from "@material-ui/core";

const Index = (props) => {
  // Hooks
  const [submitted, setSubmitted] = useState(false);

  // Content
  let content = null;
  if (submitted) {
    content = <Confirmation />;
  } else {
    content = <Form setSubmitted={setSubmitted} />;
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      {content}
    </Grid>
  );
};
export default Index;
