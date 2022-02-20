// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./ProjectListing.sol";

abstract contract Contribution is ProjectListing {
    //Mapping to store match amount corresponding to the project Id
    mapping(uint256 => uint256)  projectIdToMatchAmount;

    //Mapping to store project to contributors and indivusal contributions
    mapping(uint256 => address[]) public projectToContributors;
    mapping(uint256 => uint256[]) projectToContribution;
   
    event NewContribution(
        uint256 _projectId,
        uint256 _amount,
        address _contributor
    );

    function acceptContribution(uint256 _projectId) public payable {
        //Changing the total contribution in structure of project
        projects[_projectId].totalContribution += msg.value;

        //Updating the projectToContributors mapping and storing the address of the contributors
        projectToContributors[_projectId].push(msg.sender);

        //Updating projectToContribution mapping
        projectToContribution[_projectId].push(msg.value);

        //emitting the New Contribution
        emit NewContribution(_projectId, msg.value, msg.sender);
    }

    //Function to return the array of contributors for particular project
    function getContributersByProjectId(uint256 _projectId)
        public
        view
        returns (address[] memory)
    {
        return projectToContributors[_projectId];
    }

    //Function to return array of contribution for particular project
    function getContributionPerProject(uint256 _projectId)
        public
        view
        returns (uint256[] memory)
    {
        return projectToContribution[_projectId];
    }

    //Function to calculate swaure root
    function sqrt(uint y) internal pure returns (uint z) {
    if (y > 3) {
        z = y;
        uint x = y / 2 + 1;
        while (x < z) {
            z = x;
            x = (y / x + x) / 2;
        }
    } else if (y != 0) {
        z = 1;
    }
    return z;
}

    //Function to calculate match amount per project
    function generatingMatchAmount(uint256 _projectId) internal {
        uint256 sumOfSquareRoot = 0;
        for (
            uint256 i = 0;
            i < getContributionPerProject(_projectId).length;
            i++
        ) {
            sumOfSquareRoot += sqrt(getContributionPerProject(_projectId)[i]*100000);
        }
        projectIdToMatchAmount[_projectId] = (sumOfSquareRoot * sumOfSquareRoot)/100000;
    }
}
