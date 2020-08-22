import React from "react";
import { Button, TextField } from "@material-ui/core";

const Form = () => {
  return (
    <form noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
};

export default Form;
