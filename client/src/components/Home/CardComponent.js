import React from "react";

export const CardComponent = ({ project }) => {
  return (
    <div className="projectContainer">
      <div className="imageContainer">
        <img className="projectImage" src={project.logo} alt="project" />
      </div>
      <h1 className="projectTitle">{project.title}</h1>
      <p className="projectDescription">{project.description}</p>
      <p className="projectOwnerText">
        Project Owner :{" "}
        <span className="projectOwner">{project.projectOwner}</span>
      </p>
      <div className="projectAmountContainer">
        <div className="projectAmountRaisedContainer">
          <p className="projectAmountRaisedText">{project.totalContribution}</p>
          <p className="projectAmountRaisedFromText">
            Raised from Contributor(s)
          </p>
        </div>
        <div className="projectAmountRaisedContainer">
          <p className="projectAmountRaisedText">Rs. {project.finalAmount}</p>
          <p className="projectAmountRaisedFromText">
            Final CLR Match Amount <span>{project.matchAmount} </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;
