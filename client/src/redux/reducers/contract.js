import { CONTRACT_TYPES } from "../actions/contract";
const initialState = {
  sponsorsDeadline: 0,
  sponsorsRaisedAmount: 0,
  loading: false,
  account: "",
  connectedToWallet: false,
  projects: [],
  project: [],
};

const contractReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTRACT_TYPES.INIT:
      var utcSeconds = action.payload.sponsorsDeadline;
      var d = new Date(0);
      d.setUTCSeconds(utcSeconds);
      console.log(d, typeof d);
      return {
        ...state,
        sponsorsDeadline:
          d.getDate() + "/" + d.getMonth() + 1 + "/" + d.getFullYear(),
        sponsorsMinAmount: action.payload.sponsorsMinAmount,
        sponsorsRaisedAmount: action.payload.sponsorsRaisedAmount,
        projects: action.payload.projects,
      };
    case CONTRACT_TYPES.SPONSORS_DEADLINE:
      utcSeconds = action.payload;
      d = new Date(0);
      d.setUTCSeconds(utcSeconds);
      console.log(d, typeof d);
      return {
        ...state,
        sponsorsDeadline:
          d.getDate() + "/" + d.getMonth() + 1 + "/" + d.getFullYear(),
      };
    case CONTRACT_TYPES.SPONSORS_RAISEDAMOUNT:
      return {
        ...state,
        sponsorsRaisedAmount: action.payload,
      };
    case CONTRACT_TYPES.ACCOUNT:
      console.log(action.payload);
      return {
        ...state,
        account: action.payload,
        connectedToWallet: true,
      };
    case CONTRACT_TYPES.PROJECT:
      return {
        ...state,
        project: action.payload,
      };
    default:
      return state;
  }
};
export default contractReducer;
