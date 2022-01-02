import React from "react";
import { makeStyles } from "@material-ui/core";

const Profile = () => {
  const classes = useStyles();
  return <div>Profile</div>;
};
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#111",
    minHeight: "100vh",
  },
}));
export default Profile;
