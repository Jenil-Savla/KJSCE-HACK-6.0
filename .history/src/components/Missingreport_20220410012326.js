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
      <Grid container spacing={3}>
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
        
        <div className="col-sm-6">
        <form>
          <input type="text" name="first name" placeholder=" First Name" />
          <input type="text" name="last name" placeholder=" Last Name" />
          <input type="text" name="Age" placeholder="Age" />
          <input type="text" name="Gender" placeholder="Gender" />
          <input type="number" name="Phone" placeholder="Phone number" />
        
          <input type="email" name="email" placeholder="Email-id" />
          <input type="text" name="desc" placeholder = " Description"/>
    </form>
        </div>
      </div>
      </Grid >

    );

  }
}

export default Missingreport;
