import "./projectPage.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "../redux/actions/contract";
import { TextField, InputAdornment, Button } from "@mui/material";
import { acceptContribution } from "../redux/actions/contract";
const IndivisualProjectPage = () => {
  const { id } = useParams();
  const { contract } = useSelector(state => state);
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(id);
    try {
      const data = dispatch(getProject(id));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, id]);
  const handleSubmit = e => {
    e.preventDefault();
    console.log(id, amount);
    dispatch(acceptContribution({ id, amount }));
  };
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
              <div>
                <form className="Sponsorform" onSubmit={handleSubmit}>
                  <TextField
                    required
                    id="title"
                    label="Enter Contribution Amount in ethers"
                    type="number"
                    InputProps={{
                      inputProps: { min: 0 },
                      endAdornment: (
                        <InputAdornment position="end">wei</InputAdornment>
                      ),
                    }}
                    placeholder="Contribution Amount"
                    outlined="true"
                    fullWidth
                    onChange={e => setAmount(e.target.value)}
                  />
                  <Button
                    type="submit"
                    color="primary"
                    variant="outlined"
                    className="Sponsorbtn"
                    style={{ marginTop: "10%", fontSize: "2rem", width: "48%" }}
                  >
                    Contribute
                  </Button>
                </form>
              </div>

              <div className="projectAmountBox">
                <h3 style={{ fontWeight: "700" }}>Total Collection</h3>
                <p style={{ fontSize: "2rem" }}>
                  Rs. <span>{contract.project.totalContribution}</span>
                </p>
                {contract.project.contributors && (
                  <p
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "600",
                      marginTop: "60px",
                    }}
                  >
                    From <span>{contract.project.contributors.length}</span>
                    Contributors
                  </p>
                )}

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
