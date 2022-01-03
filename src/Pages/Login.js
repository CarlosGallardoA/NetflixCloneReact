import React, { useState } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import SignUp from "../Pages/SignUp";
import logo from "../images/netflix-logo.png";
import banner from "../images/home-bg.jpg";
import { NetflixButton, NetflixInput } from "../styled/styledcomponents";
const Login = () => {
  const classes = useStyles();
  const [signIn, setSignIn] = useState(false);
  return (
    <div className={classes.root}>
      <img src={logo} alt="logo" className={classes.logo} />
      <NetflixButton className={classes.session}>Iniciar sesion</NetflixButton>
      <div className={classes.info}>
        {!signIn ? (
          <SignUp />
        ) : (
          <>
            <Typography variant="h4" gutterBottom>
              Películas y series ilimitadas y mucho más.
            </Typography>
            <Typography variant="h5">
              Disfruta donde quieras. Cancela cuando quieras.
            </Typography>
            <Typography variant="h6">
              ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
              reiniciar tu membresía de Netflix.
            </Typography>
            <div className={classes.inputBlock}>
              <NetflixInput placeholder="Correo electrónico" />
              <NetflixButton>Comenzar</NetflixButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100vh",
    backgroundImage: `url(${banner})`,
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "fixed",
    top: 0,
    left: 20,
    width: "150px",
    cursor: "pointer",
  },
  session: {
    position: "fixed",
    zIndex: 15,
    right: 20,
    top: 20,
  },
  info: {
    color: "#fff",
    zIndex: 15,
    textAlign: "center",
    "& h4": {
      fontWeight: "800",
    },
    "& h5": {
      fontWeight: "400",
    },
  },
  inputBlock: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export default Login;
