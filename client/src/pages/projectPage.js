import "./projectPage.css";

const IndivisualProjectPage = () => {
  return (
    <div className="projectPageContainer">
      <div className="projectPageTop">
        <div className="projectPageLogoDiv">
          <img
            className="logoProjectPage"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKUJg7Ar30QL0rZAAYVSD-7e3h3x84NWmeoA&usqp=CAU"
          />
        </div>
      </div>
      <div className="projectPageBottomContainer">
        <div className="projectLeft">
          <div className="projectBox">
            <h1 className="projectBoxTitle">Project Title</h1>
            <p className="projectPageDescription">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              consequatur dolor pariatur minus aut incidunt eveniet sapiente
              consectetur, repudiandae voluptatem eos modi, eum itaque ducimus!
              Numquam incidunt velit delectus dolorum!
            </p>
          </div>
          <div className="projectOwnerBox">
            <h1 className="projectBoxTitle">Project Owner</h1>
            <div className="projectOwnerDiv">
              <div className="projectImageOnwerDiv">
                <img className="projectOwnerImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJxKGGpPc9-5g25KWwnsCCy9O_dlS4HWo5A&usqp=CAU" />
              </div>
              <p className="projectPageDescription"> 0x000000000</p>
            </div>
          </div>
        </div>
        <div className="projectRight">
          <div className="projectAmountBox">
            <h3 style={{fontWeight : "700"}}>Total Collection</h3>
            <p style={{fontSize : "2rem"}}>Rs. <span>1000</span></p>
            <p style={{fontSize : "1.3rem", fontWeight : "600", marginTop : "60px"}}>From <span>10 </span>Contributors</p>
            <div className="projectAmountDivider"></div>
          </div>
          <div className="projectCategoryBox">
            <h3 style={{fontWeight : "700"}}>Total CLR Match</h3>
            <p style={{fontSize : "2rem", marginTop : "40px"}}>Rs. <span>1000</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndivisualProjectPage;
