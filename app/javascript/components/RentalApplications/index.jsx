import React from "react";
import Form from "./Form";
import { Grid, Paper } from "@material-ui/core";

const Index = (props) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Paper elevation={3}>
        <Form />
      </Paper>
    </Grid>
  );
};
export default Index;
