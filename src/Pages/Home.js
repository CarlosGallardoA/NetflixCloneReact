import { makeStyles } from "@material-ui/core";
import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Rows from "../components/Rows";
import request from "../Request";
const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Banner />
      <Rows title="ORIGINAL NETFLIX" fetchUrl={request.fetchTV} isLargeRow />
      <Rows title="TOP RATED" fetchUrl={request.fetchTopRated} />
      <Rows title="TRENDING" fetchUrl={request.fetchTrending} />
      <Rows title="ACTION" fetchUrl={request.fetchActionMovies} />
      <Rows title="COMEDY" fetchUrl={request.fetchComedyMovies} />
      <Rows title="HORROR" fetchUrl={request.fetchHorrorMovies} />
      <Rows title="ROMANCE" fetchUrl={request.fetchRomanceMovies} />
      <Rows title="DOCUMENTARIES" fetchUrl={request.fetchDocumentaries} />
      <Rows title="WESTERN" fetchUrl={request.fetchWesternMovies} />
      <Rows title="ANIMATION" fetchUrl={request.fetchAnimationMovies} />
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#111",
    minHeight: "100vh",
  },
}));
export default Home;
