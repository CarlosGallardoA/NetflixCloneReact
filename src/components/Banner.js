import { Button, makeStyles, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import request from "../Request";
const Banner = () => {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const baseURL = `https://image.tmdb.org/t/p/original/`;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(request.fetchTV);
      const random = Math.floor(Math.random() * result.data.results.length - 1);
      setMovies(result.data.results[random]);
      return result;
    };
    fetchData();
  }, []);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${baseURL}${movies?.backdrop_path})`,
      }}
    >
      <div className={classes.content}>
        <Typography variant="h2" component="h1">
          {movies?.title || movies?.name || movies?.original_name}
        </Typography>
        <div className={classes.buttons}>
          <Button>Play</Button>
          <Button>My List</Button>
        </div>
        <Typography
          style={{ wordWrap: "break-word" }}
          variant="h6"
          className={classes.description}
        >
          {truncate(`${movies?.overview}`, 160)}
        </Typography>
        <div className={classes.fadeBottom}></div>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "440px",
    objectFit: "contain",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
  },
  buttons: {
    "& button": {
      cursor: "pointer",
      color: "#fff",
      fontWeight: "700",
      borderRadius: "5px",
      padding: theme.spacing(1, 4, 1, 4),
      marginRight: "1rem",
      backgroundColor: "rgba(51,51,51,0.5)",
    },
    "& button:hover": {
      color: "#000",
      backgroundColor: "#e6e6e6",
    },
  },
  fadeBottom: {
    position: "absolute",
    top: "30vh",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    backgroundImage:
      "linear-gradient(180deg, transparent, rgba(37,37,37,0.61),#111)",
  },
  description: {
    marginTop: theme.spacing(5),
    width: "45rem",
    lineHeight: "1.3",
    maxWidth: "380px",
    height: "80px",
  },
  content: {
    position: "absolute",
    top: "105px",
    left: "45px",
  },
}));
export default Banner;
