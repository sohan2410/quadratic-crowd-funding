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

    mapping(address => uint256) public matchAmount;
    
    constructor(uint256 _minAmount){
        sponsorsMinAmount = _minAmount;
        sponsorsDeadline = block.timestamp + 2 days;
        manager = msg.sender;
    }

    event sponsorDonation(address _sponsor, uint256 _totalAmount);
    modifier beforeEndTime() {
        require(block.timestamp < sponsorsDeadline, "Deadline has passed");
        _;
    }
    modifier afterEndTime() {
        require(block.timestamp > ProjectListing.createTime );
        _;
    }
    modifier minAmount() {
        require(
            msg.value > sponsorsMinAmount,
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

    function generateMatchAmount() public onlyManager afterEndTime{
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
}
