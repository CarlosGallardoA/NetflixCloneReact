import { makeStyles } from "@material-ui/core";
import React from "react";

const Banner = () => {
  const classes = useStyles();
  return <div>Banner</div>;
};
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#111",
    minHeight: "100vh",
  },
}));
export default Banner;
