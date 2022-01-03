import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { NetflixButton, NetflixInput } from "../styled/styledcomponents";

const SignUp = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5" align="left">
        Sign In
      </Typography>
      <form className={classes.form}>
        <NetflixInput placeholder="Email" className={classes.email} />
        <NetflixInput placeholder="Password" className={classes.password} />
        <NetflixButton wide="fullWidth">Sign In</NetflixButton>
        <Typography variant="subtitle2">
          New to Netflix ?{" "}
          <span className={classes.signupLink}>SignUp now. </span>
        </Typography>
      </form>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "350px",
    width: "20rem",
    height: "25rem",
    backgroundColor: "rgba(0,0,0,0.65)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  form: {
    width: "80%",
  },
  email: {
    marginBottom: theme.spacing(2),
  },
  password: {
    marginBottom: theme.spacing(4),
  },
  signupLink: {
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));
export default SignUp;
