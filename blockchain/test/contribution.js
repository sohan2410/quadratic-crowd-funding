const Contribution = artifacts.require("Contribution");

contract("Contribution", function ([owner, projectOwner, contributor1, contributor2]) {
  let contractInstance;
  beforeEach(async () => {
    contractInstance = await Contribution.new(projectOwner, {from : owner});
    await contractInstance.listProject("Demo project", "Demo pitch", "Demo description", "Demo logo", "Demo website", "Demo category", "Demo tags", "Demo image", {from : projectOwner});
  });

  it("should accept contribution", async () => {
      const { logs } = await contractInstance.acceptContribution(0, {from : contributor1, value : 1});
      //Testing if contribution is succesfully accepted by the project
      assert.equal(logs[0].args._projectId, 0);
      assert.equal(logs[0].args._contributor, contributor1);
      assert.equal(logs[0].args._amount, 1);

      //Testing if total contribution and total number of contributors increase after any contribution
      const project = await contractInstance.projects(0);
      assert.equal(project.totalContribution, 1);
      assert.equal(project.noOfContributors, 1);
  })
});