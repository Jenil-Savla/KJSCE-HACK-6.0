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
      
    );
  }
}

export default Missingreport;
