import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
const Fund = () => {
  return (
    <div>
      <div className="container-lg my-5 row">
        <div className="col-sm-8 p-5">
          <h1 className="p-4">
            There's No Better Way To Fund Open Source Projects
          </h1>
          <h3 className="p-4">
            Qrowd Lab uses quadratic funding, ensuring that projects doing the
            greates public good get the most support
          </h3>
          <Link to={"/projects"}>
            <button className="btn btn-primary m-4">Fund Grants</button>
          </Link>
        </div>
        <div className="col align-self-center">
          <img
            src="/fund_image.jpg"
            width="350"
            height="400"
            alt="fund_image"
          />
        </div>
      </div>

      <div className="container-lg my-5 row">
        <div className="col-sm-8 p-5">
          <h1 className="p-4">Why quadratic funding?</h1>
          <h3 className="p-4">
            Quadratic Funding is the optimal way to fund public goods in a
            democratic community. It works like a crowdfunding campaign that
            matches contributions from individuals with a pool from bigger
            donors. The higher the number of individual donors, the more matched
            funds a project gets.
          </h3>
        </div>
        <div className="col align-self-center">
          <ReactPlayer
            className="react-player"
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=HJljTtLnymE"
          />
        </div>
      </div>
    </div>
  );
};
export default Fund;
