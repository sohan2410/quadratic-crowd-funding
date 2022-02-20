const Sponsors = artifacts.require("Sponsors");
const minAmount = 10000; // wei
const deposit = 300000000000000000; // wei
module.exports = function (deployer) {
  // contract, minAmount, deposit
  deployer.deploy(Sponsors, minAmount, web3.utils.toWei("0.5", "ether")); //wei
};
