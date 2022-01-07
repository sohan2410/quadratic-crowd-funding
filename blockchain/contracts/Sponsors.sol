// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Sponsors{
    mapping(address=>uint) public sponsors;
    uint public sponsorsMinAmount;
    uint public sponsorsRaisedAmount;
    uint public noOfSponsors;
    uint public sponsorsDeadline;

    constructor(uint _minAmount) {
        sponsorsMinAmount = _minAmount;
        sponsorsDeadline = block.timestamp + 2 days;
    }
    event sponsorDonation(address _sponsor, uint _totalAmount);
    modifier beforeEndTime(){
        require(block.timestamp < sponsorsDeadline, "Deadline has passed");
        _;
    }
    modifier minAmount(){
        require(msg.value > sponsorsMinAmount , "Minimum Contribution is not met");
        _;
    }
    function sendSponsorAmount() public minAmount beforeEndTime payable {
        // if sponsors is contributing for the first time
        if(sponsors[msg.sender]==0){
            noOfSponsors++;
        }
        sponsors[msg.sender]+=msg.value;
        sponsorsRaisedAmount+=msg.value;

        emit sponsorDonation(msg.sender, sponsorsRaisedAmount);
    }

    
    
}