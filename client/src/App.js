import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import FooterComponent from "./components/Footer";
import Home from "./pages/Home";
import Alert from "./components/Alert";
import { useSelector, useDispatch } from "react-redux";
import { init } from "./redux/actions/contract";
import ProjectPage from "./pages/Projects";
import ListProjectPage from "./pages/ListProject";
import ListSponsor from "./pages/RegisterSponsor";
import IndivisualProjectPage from "./pages/projectPage";
import Fund from "./pages/Fund";
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
      <Alert />
      <NavbarComponent />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/projects">
          <ProjectPage />
        </Route>
        <Route exact path="/projects/new">
          <ListProjectPage />
        </Route>
        <Route exact path="/sponsor">
          <ListSponsor />
        </Route>
        <Route exact path="/project/:id">
          <IndivisualProjectPage />
        </Route>
        <Route exact path="/learn">
          <Fund />
        </Route>
      </Switch>
      <FooterComponent />
    </Router>
  );
}

export default App;
