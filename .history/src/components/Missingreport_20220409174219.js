import React, { Component } from "react";

export class Missingreport extends Component {
  state = {};
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  render() {
    const { profileImg } = this.state;
    return (
      <div className="page">
        <div className="col-sm-3">
          <h1 className="heading">Add your Image</h1>
          <div className="img-holder">
            <img src={profileImg} alt="" id="img" className="img" />
          </div>
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={this.imageHandler}
          />
          <div className="label">
            <label className="image-upload" htmlFor="input">
              <i className="material-icons">add_photo_alternate</i>
              Choose your Photo
            </label>
          </div>
        </div>
      </div>
      <Grid container spacing={3} sx={{padding:"100px" }}>
      <Grid item xs={12} md={6} sx={{padding:"100px" }}>
        <TextField
          required
          id="Name"
          label="Name "
          fullWidth
          autoComplete=""
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{padding:"100px" }}>
        <TextField
          required
          id="Phone Number"
          label="Phone Number"
          fullWidth
          autoComplete="cc-number"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{padding:"0px 100px" }}>
        <TextField
          required
          id="Email-Id"
          label="Email-Id"
          fullWidth
          autoComplete="cc-exp"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{padding:"100px" }}>
        <TextField
          required
          id="Amount"
          label="Amount"
          helperText=""
          fullWidth
          autoComplete="cc-csc"
          variant="standard"
        />
      </Grid>
    );
  }
}

export default Missingreport;
