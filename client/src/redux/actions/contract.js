import contract from "../../contracts/Sponsors.json";
import { GLOBALTYPES } from "./globalTypes";
import Web3 from "web3";
let selectedAccount, smartContract, account, web3;

export const CONTRACT_TYPES = {
  SPONSORS_DEADLINE: "SPONSORS_DEADLINE",
  SPONSORS_RAISEDAMOUNT: "SPONSORS_RAISEDAMOUNT",
  ACCOUNT: "ACCOUNT",
  INIT: "INIT",
  PROJECT: "PROJECT",
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
  web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();
  account = (await web3.eth.getAccounts())[0];
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
  //   )
  //   .send({ from: account });
  const data = {
    sponsorsDeadline: await smartContract.methods.sponsorsDeadline().call(),
    sponsorsRaisedAmount: await smartContract.methods
      .sponsorsRaisedAmount()
      .call(),
    projects: await smartContract.methods.getProjects().call(),
    sponsorsMinAmount: await smartContract.methods.sponsorsMinAmount().call(),
  };
  dispatch({
    type: CONTRACT_TYPES.INIT,
    payload: data,
  });

  dispatch({
    type: CONTRACT_TYPES.SPONSORS_RAISEDAMOUNT,
    payload: await smartContract.methods.sponsorsRaisedAmount().call(),
  });
  // dispatch({
  //   type: GLOBALTYPES.ALERT,
  //   payload: {
  //     error: "error message",
  //   },
  // });
  // dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
};

// sponsors functions
export const sendSponsorAmount = amount => async dispatch => {
  console.log(amount, typeof amount);
  dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
  try {
    const res = await smartContract.methods
      .sendSponsorAmount()
      .send({ from: account, value: web3.utils.toWei(amount, "ether") });
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: "Transaction Successful, thank you for your contribution!",
      },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.message },
    });
  }
};

export const generateMatchAmount = async dispatch => {
  dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
  const res = await smartContract.methods
    .generateMatchAmount()
    .send({ from: account });
  console.log(res);
  dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
};

export const sendFinalAmount = data => async dispatch => {
  dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
  const res = await smartContract.methods
    .sendFinalAmount(data.projectId)
    .send({ from: account });
  console.log(res);
  dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
};

// project listing functions

export const listProject = (data, link) => async dispatch => {
  dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
  data.logo = link;
  console.log(data);
  try {
    const res = await smartContract.methods
      .listProject(
        data.title,
        data.pitch,
        data.description,
        data.logo,
        data.website,
        data.category,
        data.tags
      )
      .send({ from: account });
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
    if (res.status) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { success: "Project registered successful!" },
      });
    }
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.message },
    });
  }
};

export const getProject = id => async dispatch => {
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
    const res = await smartContract.methods.projects(id).call();
    dispatch({
      type: CONTRACT_TYPES.PROJECT,
      payload: res,
    });
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.message },
    });
  }
};
// contribution function

export const acceptContribution = data => async dispatch => {
  dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
  const res = await smartContract.methods
    .acceptContribution(data)
    .send({ from: account });
  console.log(res);
  dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
};
