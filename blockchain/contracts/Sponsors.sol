// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Contribution.sol";

contract Sponsors is Contribution{
    mapping(address => uint256) public sponsors;
    uint256 public sponsorsMinAmount;
    uint256 public sponsorsRaisedAmount;
    uint256 public noOfSponsors;
    uint256 public sponsorsDeadline;
    address public manager;
    
    constructor(uint256 _minAmount, uint256 _deposit) ProjectListing(_deposit){
        sponsorsMinAmount = _minAmount;
        sponsorsDeadline = block.timestamp + 15 days; 
        manager = msg.sender;
    }

    event sponsorDonation(address _sponsor, uint256 _totalAmount);
    modifier beforeEndTime() {
        require(block.timestamp < sponsorsDeadline, "Deadline has passed");
        _;
    }
    
    modifier minAmount() {
        require(
            msg.value >= sponsorsMinAmount,
            "Minimum Contribution is not met"
        );
        _;
    }

    function sendSponsorAmount() public payable minAmount beforeEndTime {
        // if sponsors is contributing for the first time
        if (sponsors[msg.sender] == 0) {
            noOfSponsors++;
        }
        sponsors[msg.sender] += msg.value;
        sponsorsRaisedAmount += msg.value;

        emit sponsorDonation(msg.sender, sponsorsRaisedAmount);
    }

    modifier onlyManager() {
        require(msg.sender == manager, "Only manager can call this function");
        _;
    }

    function generateMatchAmount() public onlyManager{
        uint total;
        for(uint i=0; i<ProjectListing.projects.length; i++) {
            Contribution.generatingMatchAmount(i);
            total+=Contribution.projectIdToMatchAmount[i];
        }
        for(uint i=0; i<ProjectListing.projects.length; i++) {
            projects[i].matchAmount=(Contribution.projectIdToMatchAmount[i] * sponsorsRaisedAmount) / total; 
            projects[i].finalAmount = projects[i].matchAmount+ projects[i].totalContribution;
        }

    }
    function sendFinalAmount(uint _projectId) public payable {
        // Checking for valid project id
        require(_projectId <= projects.length-1, "Project not found");
        
        // checking if the function called is the project owner by comparing msg.sender and owner of the project
        require(msg.sender == projects[_projectId].projectOwner, "Only project owner are allowed!");

        // If the final amount is already paid to the project owner
        require(projects[_projectId].paid == false, "Amount already paid");
        
        // If final amount of the project is 0
        require(projects[_projectId].finalAmount > 0, "Sorry! No contribution for the project");

        projects[_projectId].projectOwner.transfer(projects[_projectId].finalAmount+deposit);
        projects[_projectId].paid = true;


    }
}
