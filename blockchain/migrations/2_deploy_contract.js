const Sponsors = artifacts.require("Sponsors");

module.exports = function (deployer) {
  deployer.deploy(Sponsors, 1, 1);
};
