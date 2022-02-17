import * as React from "react";
import { useSelector } from "react-redux";
import "./Projects.css";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";
const ProjectPage = () => {
  const { contract } = useSelector(state => state);

  const searchBox = {
    width: "90%",
    padding: "2.5%",
    fontSize: "1.4rem",
    border: "none",
    background: "transparent",
  };

  const projectContainer = {
    marginTop: "4%",
    display: "flex",
  };

  const categoriesDiv = {
    background: "#CDDEFF",
    width: "20%",
    padding: "1%",
    paddingLeft: "2%",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    borderRadius: "14px",
    color: "#362222",
  };

  const categories = {
    cursor: "pointer",
    padding: "2%",
    width: "90%",
  };

  const projectsContainer = {
    width: "100%",
    paddingLeft: "2%",
    paddingRight: "2%",
  };

  const projects = {
    width: "100%",
    border: "1px solid black",
    height: "200px",
    // background : "grey",
    padding: "1.5%",
    display: "flex",
    borderRadius: "14px",
    marginBottom: "2%",
    cursor: "pointer",
  };

  const imageContainer = {
    height: "100%",
    width: "auto",
  };
  const rightContainer = {
    marginLeft: "2%",
  };
  return (
    <div
      className="projectPage"
      style={{
        fontFamily: "Poppins, sans-serif",
        marginTop: "2%",
        paddingLeft: "10%",
        paddingRight: "10%",
      }}
    >
      <div
        className="topBar"
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "0",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontWeight: "700", fontSize: "4rem" }}>Projects</h1>
        <div
          style={{
            width: "25%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            background: "#FFAB76",
            borderRadius: "14px",
            paddingLeft: "1%",
          }}
        >
          {/* <FontAwesomeIcon style={{ fontSize: "1.4rem" }} icon={faSearch} /> */}
          <input style={searchBox} placeholder="Search projects" type="text" />
        </div>
      </div>
      <div style={projectContainer}>
        <div style={categoriesDiv}>
          <h3 style={{ fontSize: "2rem", fontWeight: "600", color: "#676FA3" }}>
            CATEGORIES
          </h3>
          <div style={categories}>
            <input type="checkbox" id="DeFi" value="DeFi" name="DeFi"></input>
            <label style={{ fontSize: "1.5rem" }} for="DeFi">
              {" "}
              DeFi
            </label>
            <br />
          </div>
          <div style={categories}>
            <input
              type="checkbox"
              id="Identity"
              value="Identity"
              name="Identity"
            ></input>
            <label style={{ fontSize: "1.5rem" }} for="Identity">
              {" "}
              Identity
            </label>
            <br />
          </div>
          <div style={categories}>
            <input type="checkbox" id="NFT" value="NFT" name="NFT"></input>
            <label style={{ fontSize: "1.5rem" }} for="NFT">
              {" "}
              NFT
            </label>
            <br />
          </div>
          <div style={categories}>
            <input
              type="checkbox"
              id="Wallets"
              value="Wallets"
              name="Wallets"
            ></input>
            <label style={{ fontSize: "1.5rem" }} for="Wallets">
              {" "}
              Wallets
            </label>
            <br />
          </div>
          <div style={categories}>
            <input
              type="checkbox"
              id="Education"
              value="Education"
              name="Education"
            ></input>
            <label style={{ fontSize: "1.5rem" }} for="Education">
              {" "}
              Education
            </label>
            <br />
          </div>
          <div style={categories}>
            <input
              type="checkbox"
              id="Media"
              value="Media"
              name="Media"
            ></input>
            <label style={{ fontSize: "1.5rem" }} for="Media">
              {" "}
              Media
            </label>
            <br />
          </div>
        </div>
        <div style={projectsContainer} className="container">
          {/* Project1 */}
          {contract &&
            contract.projects.length > 0 &&
            contract.projects.map((project, i) => (
              <div style={projects}>
                <div style={imageContainer}>
                  <img
                    style={{ width: "auto", height: "100%" }}
                    src={project.logo}
                    alt="project"
                  />
                </div>
                <div style={rightContainer}>
                  <Link to={"/project/" + i}>
                    <h3 style={{ fontSize: "2rem", fontWeight: "600" }}>
                      {project.title}
                    </h3>
                  </Link>
                  <p style={{ fontSize: "1.5rem" }}>{project.pitch}</p>
                  <p
                    style={{
                      marginTop: "4%",
                      fontSize: "1.5rem",
                      fontWeight: "300",
                    }}
                  >
                    Project Owner :<span>{project.projectOwner}</span>
                  </p>
                  <div
                    style={{
                      marginTop: "3%",
                      display: " flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                        {project.totalContribution}
                      </p>
                      <p style={{ fontSize: "1.3rem" }}>
                        Rs. raised from contributor(s)
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                        {project.finalAmount}
                      </p>
                      <p style={{ fontSize: "1.3rem" }}>Final CLR Match</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
