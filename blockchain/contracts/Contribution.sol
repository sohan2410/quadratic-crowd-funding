// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./ProjectListing.sol";

contract Contribution is ProjectListing {
  mapping(address => uint256) isAContributor;
  address ownerOfProject;
  
  constructor(address _ownerOfProject) {
    ownerOfProject = _ownerOfProject;
  }

  event NewContribution(uint _projectId, uint _amount, address _contributor);
  function acceptContribution(uint256 _projectId) public payable{
    
    projects[_projectId].totalContribution += msg.value;
    if(isAContributor[msg.sender] > 0) {
      isAContributor[msg.sender] += msg.value;
    }

    else{
      isAContributor[msg.sender] += msg.value;
      projects[_projectId].noOfContributors += 1;
    }

    emit NewContribution(_projectId, msg.value, msg.sender);
  }
}
