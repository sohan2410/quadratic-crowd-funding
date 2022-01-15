import Web3 from "web3";
import contract from "./utils/Sponsors.json";
let selectedAccount, smartContract;

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
  // const account = (await web3.eth.getAccounts())[0];

  smartContract = new web3.eth.Contract(
    contract.abi,
    contract.networks[networkId].address
  );
  const temp = await smartContract.methods.sponsorsRaisedAmount().call();
  console.log(temp);
  console.log(await smartContract.methods.sponsorsDeadline().call());
  // smartContract = new web3.eth.Contract(abi, address);
  // console.log(smartContract.methods.getProjects.call());
  // console.log(smartContract.methods.manager.call());
  // console.log(account);
  // console.log(
  //   await smartContract.methods
  //     .sendSponsorAmount()
  //     .send({ from: account, value: web3.utils.toWei("2", "ether") }) //wei
  // );
  // console.log(smartContract.methods); //sponsorsRaisedAmount
  // const temp = await smartContract.methods.sponsorsRaisedAmount().call();
  // console.log(temp);
  return smartContract;
};
