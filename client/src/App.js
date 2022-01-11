import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Project from "./components/Project";
import Home from "./pages/Home";
// import Web3 from "web3";
function App() {
  // const [account, setAccount] = useState(); // state variable to set account.

  // useEffect(() => {
  //   async function load() {
  //     const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
  //     const accounts = await web3.eth.requestAccounts();

  //     setAccount(accounts[0]);
  //   }

  //   load();
  // }, []);

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
