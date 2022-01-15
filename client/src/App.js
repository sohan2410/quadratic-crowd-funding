import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Project from "./components/Project";
import Home from "./pages/Home";
import { useSelector, useDispatch } from "react-redux";
import { init } from "./redux/actions/contract";
function App() {
  // eslint-disable-next-line
  const { contract } = useSelector(state => state);
  console.log(contract);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(init());
  }, [dispatch]);
  return (
    <Router>
      {/* <h6>Address: {contract.account}</h6>
      <h6>Sponsors Deadline: {contract.sponsorsDeadline}</h6>
      <h6>Sponsors Raised Amount: {contract.sponsorsRaisedAmount}</h6> */}
      <NavbarComponent />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <Project />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
