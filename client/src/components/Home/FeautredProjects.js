import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../Home/FeaturedProjects.css";
import CardComponent from "./CardComponent";
const FeaturedProjects = () => {
  const { contract } = useSelector(state => state);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(contract.projects);
  }, []);
  return (
    <div className="mainContainer">
      <h1 className="title">Featured Projects</h1>
      <div className="mainProjectContainer">
        {contract &&
          contract.projects.length > 0 &&
          contract.projects.map(project => (
            <>
              <CardComponent project={project} />
            </>
          ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
