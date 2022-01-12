import Web3 from "web3";
// import smartContractBuild from "contracts/Sponsors.json";
let selectedAccount;

export const init = async () => {
  let provider = window.ethereum;

  if (typeof provider !== "undefined") {
    provider
      .request({ method: "eth_requestAccounts" })
      .then(accounts => {
        selectedAccount = accounts[0];
        console.log(`selected account is ${selectedAccount}`);
      })
      .catch(err => {
        console.log(err);
      });

    window.ethereum.on("accountsChanged", accounts => {
      selectedAccount = accounts[0];
      console.log(`selected account changed to ${selectedAccount}`);
    });
  }
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();
  //   const smartContract = new web3.eth.Contract(
  //     smartContractBuild.abi,
  //     smartContract.networks[networkId].address
  //   );
};
