import React from "react";
import { makeStyles } from "@material-ui/core";

const Login = () => {
  const classes = useStyles();
  return <div>Login</div>;
};
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#111",
    minHeight: "100vh",
  },
}));
export default Login;
