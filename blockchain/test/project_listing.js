const ProjectListing = artifacts.require("ProjectListing");

contract("ProjectListing", async ([owner, user1, user2]) => {
  let contractInstance;
  beforeEach(async () => {
    contractInstance = await ProjectListing.new({ from: owner });
  });
  it("should list project", async () => {
    const result = await contractInstance.listProject(
      "Demo project",
      "Demo pitch",
      "Demo description",
      "Demo logo",
      "Demo website",
      "Demo category",
      "Demo tags"
    );

    const project = await contractInstance.projects(0);
    assert.equal(project.title, "Demo project");

    const Owner = await contractInstance.projects(0);
    assert.equal(Owner.projectOwner, owner);
  });

  it("should list all projects", async () => {
    await contractInstance.listProject(
      "Demo project1",
      "Demo pitch1",
      "Demo description1",
      "Demo logo1",
      "Demo website1",
      "Demo category1",
      "Demo tags1",
      { from: user1 }
    );
    await contractInstance.listProject(
      "Demo project2",
      "Demo pitch2",
      "Demo description2",
      "Demo logo2",
      "Demo website2",
      "Demo category2",
      "Demo tags2",
      { from: user2 }
    );
    const projects = await contractInstance.getProjects();
    assert.equal(projects.length, 2);
    const Owner1 = await contractInstance.projects(0);
    const Owner2 = await contractInstance.projects(1);
    assert.equal(Owner1.projectOwner, user1);
    assert.equal(Owner2.projectOwner, user2);
  });
});
