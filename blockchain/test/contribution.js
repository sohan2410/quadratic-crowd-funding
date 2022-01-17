const Contribution = artifacts.require("Contribution");

contract(
  "Contribution",
  function ([owner, projectOwner, contributor1, contributor2]) {
    let contractInstance;
    beforeEach(async () => {
      contractInstance = await Contribution.new();
      await contractInstance.listProject(
        "Demo project",
        "Demo pitch",
        "Demo description",
        "Demo logo",
        "Demo website",
        "Demo category",
        "Demo tags"
      );
    });

    //TEST1
    it("should accept contribution", async () => {
      const { logs } = await contractInstance.acceptContribution(0, {
        from: contributor1,
        value: 1,
      });
      //Testing if contribution is succesfully accepted by the project
      assert.equal(logs[0].args._projectId, 0);
      assert.equal(logs[0].args._contributor, contributor1);
      assert.equal(logs[0].args._amount, 1);

      //Testing if contributor's address gets stored in map and total contribution in struct gets changed
      const projectToContributor =
        await contractInstance.getContributersByProjectId(0);
      const project = await contractInstance.projects(0);
      assert.equal(projectToContributor.length, 1);
      assert.equal(projectToContributor, contributor1);
      assert.equal(project.totalContribution, 1);
    });

    //TSET2
    it("should accept multiple contributors in one project", async () => {
      await contractInstance.acceptContribution(0, {
        from: contributor1,
        value: 1,
      });
      await contractInstance.acceptContribution(0, {
        from: contributor2,
        value: 2,
      });
      const project = await contractInstance.projects(0);
      const projectToContributor =
        await contractInstance.getContributersByProjectId(0);

      //Testing if both the contributors get stores in the array (mapping)
      assert.equal(projectToContributor.length, 2);
      assert.equal(projectToContributor[0], contributor1);
      assert.equal(projectToContributor[1], contributor2);
      assert.equal(project.totalContribution, 3);
    });

    //Testing match amount of contributors TEST3
    // it("should generate match amount", async () => {
    //   await contractInstance.acceptContribution(0, {
    //     from: contributor1,
    //     value: 500,
    //   });
    //   await contractInstance.acceptContribution(0, {
    //     from: contributor2,
    //     value: 500,
    //   });

    //   await contractInstance.generatingMatchAmount(0);
    //   const matchAmount = await contractInstance.projectIdToMatchAmount(0);
    //   assert.equal(matchAmount.toNumber(), 1999);
    // });
  }
);
