const ProjectListing = artifacts.require("ProjectListing");

contract("ProjectListing", async ([owner, user1, user2]) => {
  it("should list project", async () => {
      const contractInstance = await ProjectListing.new({from : owner});
      const result = await contractInstance.listProject("Demo project", "Demo pitch", "Demo description", "Demo logo", "Demo website", "Demo category", "Demo tags", "Demo image", {from : user1});

      const project = await contractInstance.projects(0);
      assert.equal(project.title, "Demo project");

      const Owner = await contractInstance.projectToOwner(0);
      assert.equal(Owner, user1);
  })
});

