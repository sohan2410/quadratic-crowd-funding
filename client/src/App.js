import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Project from "./components/Project";
import Home from "./pages/Home";
import { init } from "./Web3";
// import Web3 from "web3";
function App() {
  // const [account, setAccount] = useState(); // state variable to set account.

  useEffect(() => {
    init();
  }, []);

  return (
    <Router>
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
