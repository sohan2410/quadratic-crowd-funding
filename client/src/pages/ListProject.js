import "./ListProjects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import Button from '@mui/material/Button';

const ListProjectPage = () => {
    const [category, setCategory] =useState('defi');
    
    const handleChange = (event) => {
        event.preventDefault();
        setCategory(event.target.value);
    }
  return (
    <div className="mainListProjectContainer">
      <div className="container">
        <div className="topBar">
          <FontAwesomeIcon className="icon" icon={faRocket} />
          <h1>List Your Project</h1>
        </div>
        <form className="form">
          <div className="textFieldContainer">
            <TextField
              className="textField"
              required
              id="title"
              label="Enter Project Title"
              placeholder="Project Title"
              standard
              style={{ width: "48%", color: "black" }}
            />
            <TextField
              className="textField"
              required
              id="pitch"
              label="Enter Project Pitch"
              placeholder="Project Pitch"
              standard
              style={{ width: "48%", color: "black" }}
            />
          </div>
          <TextField
            id="description"
            label="Enter Project Description"
            fullWidth
            rows={4}
            style={{ marginTop: "2%" }}
          />
          <TextField
            id="Website"
            label="Enter Project Website"
            fullWidth
            rows={4}
            style={{ marginTop: "2%" }}
          />
          <TextField
            id="outlined-select-category"
            select
            label="Select"
            value={category}
            helperText="Please select Category"
            onChange={handleChange}
            style={{marginTop : "2%", width : "48%"}}
          >
           <MenuItem key="defi" value="defi" label="DeFi">DeFi</MenuItem>
           <MenuItem key="identity" value="identity" label="Identity">Identity</MenuItem>
           <MenuItem key="nft" value="nft" label="NFT">NFT</MenuItem>
           <MenuItem key="wallet" value="wallet" label="Wallet">Wallet</MenuItem>
           <MenuItem key="education" value="education" label="Education">Education</MenuItem>
           <MenuItem key="media" value="media" label="Media">Media</MenuItem>
           <MenuItem key="others" value="others" label="Others">Others</MenuItem>
          </TextField>
          <Button color="secondary" variant="outlined" className="btn" style={{marginTop : "10%", fontSize : "2rem" ,width: "48%", transform : "TranslateX(-50%)"}}>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default ListProjectPage;
