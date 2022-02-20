import * as React from "react";
import FeaturedProjects from "../components/Home/FeautredProjects";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="row mt-5" style={{paddingLeft : "5%", display : "flex"}}>
        <div className="col-sm-8  p-5" style={{width : "50%"}}>
          <h1 style={{color : "#316B83", fontSize : "3.5rem"}}>
            Quadratic Crowdfunding Platform for {<br />}the Open Web
          </h1>
          <h3 style={{color : "#92A9BD", marginTop : "3%", fontSize : "2.4rem"}}>WE TRUST THE COMMUNITY</h3>
          <p style={{marginTop : "7%", fontSize : "1.6rem"}}>
            QrowdLab is a decentralized platform that enables community funding
            for projects. Through Quadratic Funding, we give the community the
            power to take the best project forward!
          </p>
          <Link to={"/projects/new"}>
            <button style={{fontSize : "1.4rem",marginTop : "5%",background : "#92A9BD", border : "none", borderRadius : "9px", padding : "1%",paddingLeft : "3%" ,paddingRight : "3%" ,color : "white", fontWeight : "bold"}}>LIST YOUR PROJECT</button>
          </Link>
          <Link to={"/projects"}>
            <button style={{fontSize : "1.4rem", background : "#92A9BD", border : "none", borderRadius : "9px", padding : "1%", color : "white", fontWeight : "bold", paddingLeft : "3%" ,paddingRight : "3%" ,marginLeft : "4%"}}>SUPPORT PROJECTS</button>
          </Link>
          
        </div>
        <div className="col align-self-center" style={{marginLeft : "5%"}}>
          <img
            className=""
            width="500"
            height="auto"
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
