import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
const Fund = () => {
  return (
    <div>
      <div className="container-lg my-5 row" style={{paddingLeft : "5%"}}>
        <div className="col-sm-8 p-5" style={{width : "50%"}}>
          <h1 className="p-4">
            There's No Better Way To Fund Open Source Projects
          </h1>
          <h3 className="p-4">
            Qrowd Lab uses quadratic funding, ensuring that projects doing the
            greates public good get the most support
          </h3>
          <Link to={"/projects"}>
            <button style={{width : "50%",marginTop : "3%",fontSize : "1.5rem", background : "#92A9BD", border : "none", borderRadius : "9px", padding : "1%", color : "white", fontWeight : "bold"}}>Fund Grants</button>
          </Link>
        </div>
        <div className="col align-self-center" style={{marginLeft : "5%"}}>
          <img
            src="/fund_image.jpg"
            width="500px"
            height="300px"
            alt="fund_image"
          />
        </div>
      </div>

      <div className="container-lg my-5 row" style={{paddingLeft : "5%"}}>
        <div className="col-sm-8 p-5" style={{width : "50%"}}>
          <h1 className="p-4">Why quadratic funding?</h1>
          <h3 className="p-4">
            Quadratic Funding is the optimal way to fund public goods in a
            democratic community. It works like a crowdfunding campaign that
            matches contributions from individuals with a pool from bigger
            donors. The higher the number of individual donors, the more matched
            funds a project gets.
          </h3>
        </div>
        <div className="col align-self-center"  style={{marginLeft : "5%"}}>
          <ReactPlayer
            className="react-player"
            width="500px"
            height="250px"
            url="https://www.youtube.com/watch?v=HJljTtLnymE"
          />
        </div>
      </div>
    </div>
  );
};
export default Fund;
