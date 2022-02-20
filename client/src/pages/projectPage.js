import "./projectPage.css";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "../redux/actions/contract";
const IndivisualProjectPage = () => {
  const { id } = useParams();
  const { contract } = useSelector(state => state);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(init());
  //   dispatch(getProject(id));
  // }, []);
  useEffect(() => {
    console.log(id);
    try {
      const data = dispatch(getProject(id));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, id]);

  return (
    <div className="projectPageContainer">
      {contract && contract.project && (
        <>
          <div className="projectPageTop">
            <div className="projectPageLogoDiv">
              <img
                className="logoProjectPage"
                src={contract.project.logo}
                alt="project-logo"
              />
            </div>
          </div>
          <div className="projectPageBottomContainer">
            <div className="projectLeft">
              <div className="projectBox">
                <h1 className="projectBoxTitle">{contract.project.title}</h1>
                <p className="projectPageDescription">
                  {contract.project.description}
                </p>
              </div>
              <div className="projectOwnerBox">
                <h1 className="projectBoxTitle">Project Owner</h1>
                <div className="projectOwnerDiv">
                  <div className="projectImageOnwerDiv">
                    <img
                      className="projectOwnerImage"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJxKGGpPc9-5g25KWwnsCCy9O_dlS4HWo5A&usqp=CAU"
                      alt="project-owner"
                    />
                  </div>
                  <p className="projectPageDescription">
                    {" "}
                    {contract.project.projectOwner}
                  </p>
                </div>
              </div>
            </div> 
            <div className="projectRight">
              <div className="projectAmountBox">
                <h3 style={{ fontWeight: "700" }}>Total Collection</h3>
                <p style={{ fontSize: "2rem" }}>
                  Rs. <span>{contract.project.totalContribution}</span>
                </p>
                <p
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    marginTop: "60px",
                  }}
                >
                  From <span>10 </span>Contributors
                </p>
                <div className="projectAmountDivider"></div>
              </div>
              <div className="projectCategoryBox">
                <h3 style={{ fontWeight: "700" }}>Total CLR Match</h3>
                <p style={{ fontSize: "2rem", marginTop: "40px" }}>
                  Rs. <span>1000</span>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default IndivisualProjectPage;
