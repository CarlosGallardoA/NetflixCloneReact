import React, { useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import axios from "axios";

const Rows = ({ title, fetchUrl, isLargeRow }) => {
  const classes = useStyles();
  const [movies, setMovies] = React.useState([]);
  const baseURL = `https://image.tmdb.org/t/p/original/`;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(fetchUrl);
      setMovies(result.data.results);
      return result;
    };
    fetchData();
  }, [fetchUrl]);
  return (
    <div className={classes.root}>
      <Typography variant="h4">{title}</Typography>
      <div className={classes.posters}>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`${classes.poster} ${
                  isLargeRow && classes.posterLarge
                }`}
                key={movie.id}
                src={`${baseURL}${
                  isLargeRow ? movie.poster_path : movie?.backdrop_path
                }`}
                alt={movie?.name}
              />
            )
        )}
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    marginLeft: theme.spacing(4),
  },
  posters: {
    display: "flex",
    overflowY: "hidden",
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  poster: {
    maxHeight: "12rem",
    objectFit: "contain",
    marginRight: theme.spacing(1),
    transition: "transform 450ms",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  posterLarge: {
    maxHeight: "15rem",
    "&:hover": {
      transform: "sclae(1.15)",
    },
  },
}));
export default Rows;
