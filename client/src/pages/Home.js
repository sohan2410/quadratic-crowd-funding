import * as React from "react";
import FeaturedProjects from "../components/Home/FeautredProjects";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});
const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.root}>Hook</Button>;
      <div className="row mt-5">
        <div className="col-sm-8  p-5">
          <h1 className="text-primary font-weight-bold">
            Quadratic Crowdfunding Platform for {"\n"}the Open Web
          </h1>
          <h3 className="text-primary mt-3">WE TRUST THE COMMUNITY</h3>
          <p className="font-weight-bold mt-5">
            QrowdLab is a decentralized platform that enables community funding
            for projects. Through Quadratic Funding, we give the community the
            power to take the best project forward!
          </p>
          <button className="btn btn-primary m-4">LIST YOUR PROJECT</button>
          <button className="btn btn-primary m-4">SUPPORT PROJECTS</button>
        </div>
        <div className="col align-self-center">
          <img
            className=""
            width="350"
            height="400"
            src="/logo1.png"
            alt="eth-img"
          />
        </div>
      </div>
      <FeaturedProjects />
    </div>
  );
};
export default Home;
