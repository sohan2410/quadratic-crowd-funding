import "./RegisterSponsor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendSponsorAmount } from "../redux/actions/contract";
const ListSponsor = () => {
  const { contract } = useSelector(state => state);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(sendSponsorAmount(amount));
  };
  return (
    <div className="mainSponsorContainer">
      <div className="Sponsorcontainer">
        <div className="SponsortopBar">
          {contract &&
            contract.sponsorsRaisedAmount &&
            contract.sponsorsMinAmount && (
              <>
                <h3>Sponsors Raised Amount: {contract.sponsorsRaisedAmount}</h3>
                <h3>Sponsors Deadline: {contract.sponsorsDeadline}</h3>
                <h3>Sponsors Min Amount: {contract.sponsorsMinAmount}</h3>
                <h3>Security Deposit: {contract.securityDeposit}</h3>
              </>
            )}
          <FontAwesomeIcon className="Sponsoricon" icon={faFlag} />
          <h1>Support a Funding Round</h1>
        </div>
        <h3 className="mt-3 mx-3">
          Thank you for your interest in supporting public goods on Kickflow.
          Complete the form below to sponsor a funding round.
        </h3>
        <form className="Sponsorform" onSubmit={handleSubmit}>
          <TextField
            plalceholder="Enter Amount to contribute"
            required
            id="title"
            label="Enter Contribution Amount in ethers"
            type="number"
            InputProps={{
              inputProps: { min: 10000, max: 100000000000 },
              endAdornment: <InputAdornment position="end">wei</InputAdornment>,
            }}
            placeholder="Contribution Amount"
            outlined="true"
            fullWidth
            onChange={e => setAmount(e.target.value)}
          />
          <Button
            type="submit"
            color="primary"
            variant="outlined"
            className="Sponsorbtn"
            style={{ marginTop: "10%", fontSize: "2rem", width: "48%" }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ListSponsor;
