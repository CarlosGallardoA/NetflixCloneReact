import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Header from "../components/Header";
import Plans from "../components/Plans";
import user1 from "../images/user1.png";
import { NetflixButton } from "../styled/styledcomponents";
const Profile = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Typography variant="h3">Edit Profile</Typography>
      <div className={classes.info}>
        <img src={user1} alt="user1" />
        <div className={classes.details}>
          <div className={classes.plans}>
            <Typography variant="h6">Email usuario</Typography>
            <Typography
              className={classes.plansText}
              variant="h5"
              gutterBottom
            ></Typography>
            <Plans cost={24.99}>Netflix Basic</Plans>
            <Plans cost={34.99}>Netflix Standard</Plans>
            <Plans cost={44.99}>Netflix Premium</Plans>
            <NetflixButton>Sign Out</NetflixButton>
          </div>
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    minHeight: "100vh",
    maxWidth: "800px",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  info: {
    width: "80%",
    display: "flex",
    "& img": {
      height: "100px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  },
  details: {
    width: "100%",
    marginLeft: theme.spacing(3),
    "& h6": {
      backgroundColor: "#aaa",
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontSize: "18px",
    },
  },
  plans: {
    width: "100%",
  },
  plansText: {
    borderBottom: "1px solid lightgray",
  },
}));
export default Profile;
