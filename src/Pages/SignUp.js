import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { NetflixButton, NetflixInput } from "../styled/styledcomponents";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const register = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.root}>
      <Typography variant="h5" align="left">
        Sign In
      </Typography>
      <form className={classes.form}>
        <NetflixInput
          value={email}
          placeholder="Email"
          className={classes.email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <NetflixInput
          value={password}
          placeholder="Password"
          type="password"
          className={classes.password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <NetflixButton type="submit" wide="fullWidth" onClick={signIn}>
          Sign In
        </NetflixButton>
        <Typography variant="subtitle2">
          New to Netflix ?{" "}
          <span className={classes.signupLink} onClick={register}>
            SignUp now.{" "}
          </span>
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
