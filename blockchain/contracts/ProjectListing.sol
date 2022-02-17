// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ProjectListing {
    //Making project's structure
    struct Project {
        string title;
        string pitch;
        string description;
        string logo;
        string website;
        string category;
        string tags;
        uint256 totalContribution;
        uint256 matchAmount;
        uint256 finalAmount;
        address payable projectOwner;
        bool paid;
    }
    mapping(uint256 => uint256) projectToDeposit;
    uint256 public deposit;
    //Array to store all the listed projects
    Project[]  public projects;
    
    constructor(uint256 _deposit){
        deposit = _deposit;
    }
    //Function to list the projects
    function listProject(
        string memory _title,
        string memory _pitch,
        string memory _description,
        string memory _logo,
        string memory _website,
        string memory _category,
        string memory _tags
    ) public payable {
        require(msg.value==deposit, "Security deposit required");
        Project storage newProject = projects.push();
        newProject.title=_title;
        newProject.pitch=_pitch;
        newProject.description=_description;
        newProject.logo=_logo;
        newProject.website=_website;
        newProject.category=_category;
        newProject.tags=_tags;
        newProject.projectOwner=payable(msg.sender);
        newProject.paid=false;
    }

    //Function to get all the projects listed. Function is to be made to access the while array.
    function getProjects() public view returns (Project[] memory) {
        return projects;
    }
}
