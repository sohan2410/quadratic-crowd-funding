// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ProjectListing {
  //Making project's structure
  struct Project{
    string title;
    string pitch;
    string description;
    string logo;
    string website;
    string category;
    string tags;
    string projectImage;
    uint256 contributionAmount;
    // address[] contributorAddress;
  }
  //Array to store all the listed projects
  Project[] public projects;

  //Mapping to store which project belongs to which address
  mapping(uint256 => address) public projectToOwner;

  //Function to list the projects
   function listProject(string memory _title, string memory _pitch, string memory _description, string memory _logo, string memory _website, string memory _category, string memory _tags, string memory _projectImage) public {
      projects.push(Project(_title, _pitch, _description, _logo, _website, _category, _tags, _projectImage, 0));
      uint _id = projects.length - 1;
      projectToOwner[_id] = msg.sender; 
   }
}