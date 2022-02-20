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
  SECURITY_DEPOSIT: "SECURITY_DEPOSIT",
  SPONSORS_MINAMOUNT: "SPONSORS_MINAMOUNT",
  MANAGER: "MANAGER",
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
  let data = {};
  data = {
    sponsorsDeadline: await smartContract.methods.sponsorsDeadline().call(),
    sponsorsRaisedAmount: await smartContract.methods
      .sponsorsRaisedAmount()
      .call(),
    projects: await smartContract.methods.getProjects().call(),
    sponsorsMinAmount: await smartContract.methods.sponsorsMinAmount().call(),
  };
  // Object.preventExtensions(data);
  // data.projects.map(async (project, i) => {
  //   let contributors = await smartContract.methods
  //     .getContributersByProjectId(i)
  //     .call();
  //   contributors = [...new Set(contributors)];
  //   project.contributors = contributors;
  // });
  dispatch({
    type: CONTRACT_TYPES.INIT,
    payload: data,
  });

  dispatch({
    type: CONTRACT_TYPES.SPONSORS_RAISEDAMOUNT,
    payload: await smartContract.methods.sponsorsRaisedAmount().call(),
  });
  dispatch({
    type: CONTRACT_TYPES.SPONSORS_MINAMOUNT,
    payload: await smartContract.methods.sponsorsMinAmount().call(),
  });
  dispatch({
    type: CONTRACT_TYPES.SECURITY_DEPOSIT,
    payload: await smartContract.methods.deposit().call(),
  });
  dispatch({
    type: CONTRACT_TYPES.MANAGER,
    payload: await smartContract.methods.manager().call(),
  });
  console.log(await smartContract.methods.deposit().call());
};

// sponsors functions
export const sendSponsorAmount = amount => async dispatch => {
  console.log(amount, typeof amount);
  dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
  try {
    const res = await smartContract.methods.sendSponsorAmount().send({
      from: account,
      value: amount, //in wei
      //  value: web3.utils.toWei(amount, "ether")
    });
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

export const generateMatchAmount = data => async dispatch => {
  console.log("generateMatchAmount");
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
    const res = await smartContract.methods.generateMatchAmount().call();
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: { error: error.message },
    });
  }
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
      .send({
        from: account,
        value: 500000000000000000, //wei
      });
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: false } });
    if (res.status) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { success: "Project registered successful!" },
      });
    }
  } catch (error) {
    console.log(error);
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
    let contributors = await smartContract.methods
      .getContributersByProjectId(id)
      .call();
    contributors = [...new Set(contributors)];
    res.contributors = contributors;
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

export const acceptContribution =
  ({ id, amount }) =>
  async dispatch => {
    try {
      dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
      console.log(account);
      console.log(id, amount);

      const res = await smartContract.methods
        .acceptContribution(id)
        .send({ from: account, value: amount });
      console.log(res);
      if (res.status) {
        dispatch({
          type: GLOBALTYPES.ALERT,
          payload: { success: "Thank you for your contribution" },
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: { error: error.message },
      });
    }
  };
