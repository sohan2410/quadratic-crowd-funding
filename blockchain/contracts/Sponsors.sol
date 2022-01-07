// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Sponsors{
    mapping(address => uint256) public sponsors;
    uint256 public sponsorsMinAmount;
    uint256 public sponsorsRaisedAmount;
    uint256 public noOfSponsors;
    uint256 public sponsorsDeadline;

    constructor(uint256 _minAmount) {
        sponsorsMinAmount = _minAmount;
        sponsorsDeadline = block.timestamp + 2 days;
    }

    event sponsorDonation(address _sponsor, uint256 _totalAmount);
    modifier beforeEndTime() {
        require(block.timestamp < sponsorsDeadline, "Deadline has passed");
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
}
