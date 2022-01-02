import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Paypal from "./Pages/Paypal";
import Login from "./Pages/Login";
function App() {
  const user = "carlos";
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Paypal />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#111",
    minHeight: "100vh",
  },
}));

export default App;
