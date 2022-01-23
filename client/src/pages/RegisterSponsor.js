import "./RegisterSponsor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ListSponsor = () => {
  return (
    <div className="mainSponsorContainer">
      <div className="Sponsorcontainer">
        <div className="SponsortopBar">
          <FontAwesomeIcon className="Sponsoricon" icon={faFlag} />
          <h1>Support a Funding Round</h1>
        </div>
        <h3 style={{ marginTop: "2%" }}>
          Thank you for your interest in supporting public goods on Kickflow.
          Complete the form below to sponsor a funding round.
        </h3>
        <form className="Sponsorform">
          <TextField
            plalceholder="Enter Amount to contribute"
            required
            id="title"
            label="Enter Contribution Amount"
            placeholder="Contribution Amount"
            outlined
            fullWidth
          />
          <Button
            color="secondary"
            variant="outlined"
            className="Sponsorbtn"
            style={{ marginTop: "7%", fontSize: "2rem", width: "48%" }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ListSponsor;
