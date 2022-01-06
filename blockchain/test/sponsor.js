const { advanceTime, shouldThrow } = require("../utils");

const Sponsors = artifacts.require("Sponsors");

contract("Sponsor", async ([owner, alice, bob]) => {
  let contractInstance;
  beforeEach(async () => {
    contractInstance = await Sponsors.new(2);
  });
  it("sponsor should be able to donate before deadline", async () => {
    await contractInstance.sendSponsorAmount({
      from: alice,
      value: 4,
    });
    await contractInstance.sendSponsorAmount({
      from: alice,
      value: 5,
    });
    await contractInstance.sendSponsorAmount({
      from: bob,
      value: 3,
    });
    assert.equal(await contractInstance.sponsorsRaisedAmount(), 12);
    assert.equal(await contractInstance.noOfSponsors(), 2);
  });
  it("should not be able to donate after deadline", async () => {
    await advanceTime(3 * 24 * 60 * 60);
    await shouldThrow(
      contractInstance.sendSponsorAmount({ from: alice, value: 2 })
    );
  });
  it("should not be able to donate less than min amount", async () => {
    await shouldThrow(
      contractInstance.sendSponsorAmount({ from: alice, value: 1 })
    );
  });
});
