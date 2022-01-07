// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./ProjectListing.sol";

contract Contribution is ProjectListing {
  address ownerOfProject;
  
  constructor(address _ownerOfProject) {
    ownerOfProject = _ownerOfProject;
  }

  event NewContribution(uint _projectId, uint _amount, address _contributor);
  function acceptContribution(uint256 _projectId) public payable{
    //Changing the total contribution in structure of project
    projects[_projectId].totalContribution += msg.value;

    //Updating the projectToContributors mapping and storing the address of the contributors
    projectToContributors[_projectId].push(msg.sender);

    //emitting the New Contribution 
    emit NewContribution(_projectId, msg.value, msg.sender);
  }
}
