import "./ListProjects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { listProject } from "../redux/actions/contract";
const ListProjectPage = () => {
  const dispatch = useDispatch();
  const [logo, setLogo] = useState();

  const uploadImage = async file => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "xifvk2us");
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/sarvh/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    return data.secure_url;
  };
  const [values, setValues] = useState([
    {
      title: "",
      pitch: "",
      description: "",
      logo: "",
      website: "",
      category: "nft",
      tags: "",
    },
  ]);

  const handleSubmit = async e => {
    e.preventDefault();

    const link = await uploadImage(logo);
    dispatch(listProject(values, link));
  };
  return (
    <div className="mainListProjectContainer">
      <div className="container">
        <div className="topBar">
          <FontAwesomeIcon className="icon" icon={faRocket} />
          <h1>List Your Project</h1>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="textFieldContainer">
            <TextField
              className="textField"
              required
              id="title"
              label="Enter Project Title"
              placeholder="Project Title"
              onChange={e => setValues({ ...values, title: e.target.value })}
              style={{ width: "48%", color: "black" }}
            />
            <div style={{ width: "48%", color: "black" }}>
              <label for="formFile" class="form-label">
                Select Logo
              </label>
              <input
                type="file"
                onChange={event => {
                  setLogo(event.target.files[0]);
                  // setValues({ ...values, logo: event.target.files[0] });
                }}
              />
            </div>
            {/* <TextField
              className="textField"
              required
              id="logo"
              label="Enter Project Logo URL"
              onChange={e => setValues({ ...values, logo: e.target.value })}
              style={{ width: "48%", color: "black" }}
            /> */}
          </div>
          <TextField
            required
            label="Enter Project Pitch"
            rows={4}
            fullWidth
            multiline
            onChange={e => setValues({ ...values, pitch: e.target.value })}
            style={{ marginTop: "2%" }}
          />
          <TextField
            id="description"
            label="Enter Project Description"
            required
            fullWidth
            rows={4}
            multiline
            onChange={e =>
              setValues({ ...values, description: e.target.value })
            }
            style={{ marginTop: "2%" }}
          />
          <TextField
            id="Website"
            label="Enter Project Website"
            required
            fullWidth
            rows={4}
            onChange={e => setValues({ ...values, website: e.target.value })}
            style={{ marginTop: "2%" }}
          />
          <TextField
            label="Enter Tags"
            required
            onChange={e => setValues({ ...values, tags: e.target.value })}
            style={{ marginTop: "2%", marginRight: "2%", width: "48%" }}
            helperText="Enter a tag (Eg: Gaming)"
          />
          <TextField
            id="outlined-select-category"
            select
            required
            label="Select"
            value={values.category || ""}
            helperText="Please select Category"
            onChange={e => setValues({ ...values, category: e.target.value })}
            style={{ marginTop: "2%", width: "48%" }}
          >
            <MenuItem value="defi">DeFi</MenuItem>
            <MenuItem value="identity">Identity</MenuItem>
            <MenuItem label="NFT">NFT</MenuItem>
            <MenuItem value="wallet">Wallet</MenuItem>
            <MenuItem value="education">Education</MenuItem>
            <MenuItem value="media">Media</MenuItem>
            <MenuItem value="others">Others</MenuItem>
          </TextField>
          <Typography>
            Note: Taking 0.5 eth as security deposit from projects. In case they
            turn out to be a scam, they will lose their deposit as well as any
            funding they have received.{" "}
          </Typography>
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ListProjectPage;
