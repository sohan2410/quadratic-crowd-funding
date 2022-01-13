import contract from "../../utils/Sponsors.json";
import Web3 from "web3";
let selectedAccount, smartContract;

export const CONTRACT_TYPES = {
  SPONSORS_DEADLINE: "SPONSORS_DEADLINE",
  SPONSORS_RAISEDAMOUNT: "SPONSORS_RAISEDAMOUNT",
  ACCOUNT: "ACCOUNT",
  INIT: "INIT",
};
export const init = () => async dispatch => {
  let provider = window.ethereum;

  if (typeof provider !== "undefined") {
    provider
      .request({ method: "eth_requestAccounts" })
      .then(accounts => {
        selectedAccount = accounts[0];
        console.log(`selected account is ${selectedAccount}`);
        console.log(typeof selectedAccount);
        dispatch({ type: CONTRACT_TYPES.ACCOUNT, payload: selectedAccount });
      })
      .catch(err => {
        console.log(err);
      });

    window.ethereum.on("accountsChanged", accounts => {
      selectedAccount = accounts[0];
      console.log(`selected account changed to ${selectedAccount}`);
      dispatch({ type: CONTRACT_TYPES.ACCOUNT, payload: selectedAccount });
    });
  }
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();
  const account = (await web3.eth.getAccounts())[0];
  // console.log(contract.networks[networkId].address);
  smartContract = new web3.eth.Contract(
    contract.abi,
    contract.networks[networkId].address
  );

  // await smartContract.methods
  //   .listProject(
  //     "Project C",
  //     "Demo pitch",
  //     "Demo description",
  //     "https://cdn.pixabay.com/photo/2018/01/18/07/31/bitcoin-3089728__480.jpg",
  //     "Demo website",
  //     "Demo category",
  //     "Demo tags",
  //     "https://cdn.pixabay.com/photo/2018/01/18/07/31/bitcoin-3089728__480.jpg"
  //   )
  //   .send({ from: account });
  const data = {
    sponsorsDeadline: await smartContract.methods.sponsorsDeadline().call(),
    sponsorsRaisedAmount: await smartContract.methods
      .sponsorsRaisedAmount()
      .call(),
    projects: await smartContract.methods.getProjects().call(),
  };
  dispatch({
    type: CONTRACT_TYPES.INIT,
    payload: data,
  });

  dispatch({
    type: CONTRACT_TYPES.SPONSORS_RAISEDAMOUNT,
    payload: await smartContract.methods.sponsorsRaisedAmount().call(),
  });
};