import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <>
        <div className="px-4 mb-4 text-center text-lg-left">
          <div
            className="float-lg-left text-left rounded-circle position-relative"
            style={{
              width: "100px",
              height: "100px",
              overflow: "hidden",
              margin: "0 auto"
            }}
          >
            <img
              src={""}
              className="rounded-circle position-absolute"
              width="100"
              height="100"
            />
            <div
              className="position-absolute w-100 text-center"
              style={{ bottom: 0 }}
            >
              <div
                className="position-relative bg-transparent text-white p-1"
                style={{ top: "32px" }}
              >
                Edit
              </div>
              <form className="position-relative form">
                <input
                  type="file"
                  className="px-1"
                  name="image"
                  style={{ opacity: 0 }}
                />
              </form>
            </div>
          </div>
          <div className="pt-2 ml-2 float-lg-left">
            <p className="mb-0">
              <strong>Enoch Martins Emeka</strong> <br />{" "}
              enochmartinsemeka@gmail.com
            </p>
            <p className="mt-3">
              <span className="text-primary">Followers</span>:{" "}
              <span className="mr-md-3"> 2000</span>
              <span className="text-primary d-block d-md-inline">Following</span>:
              200
            </p>
          </div>
          <div className=" clear"></div>
        </div>
        <form className="form">
          <div className="form-row mt-5 justify-content-between">
              <div className="col-11 col-md-5">
                  <div className="form-group">
                      <label className="text-primary" for="profileName">Name</label>
                      <input type="text" className="form-control border-top-0 border-left-0 border-right-0 rounded-0" name="name" id="profileName" placeholder="e.g: Enoch Martins Emeka" />
                                </div>
                            </div>
                            <div className="col-11 col-md-5">
                                <div className="form-group">
                                    <label className="text-primary" for="profileAddress">Contact Address</label>
                                    <textarea id="profileAddress" className="form-control border-top-0 border-left-0 border-right-0 rounded-0" placeholder="e.g: 123 Bolton Avenue Abuja Nigeria"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="form-group mt-5">
                            <label className="text-primary" for="profileBio">Bio</label>
                            <textarea id="profileBio" className="form-control border-top-0 border-left-0 border-right-0 rounded-0" placeholder="e.g: I am a local business man"></textarea>
                        </div>
                        <div className="form-row mt-5 justify-content-between">
                            <div className="col-11 col-md-5">
                                <div className="form-group">
                                    <label className="text-primary" for="profilePhone">Mobile Number</label>
                                    <input type="tel" id="profilePhone" name="tel" className="form-control border-top-0 border-left-0 border-right-0 rounded-0" placeholder="e.g: +2348165736665" />
                                </div>
                            </div>
                            <div className="col-11 col-md-5">
                                <div className="form-group">
                                    <label className="text-primary" for="profileEmail">Email Address</label>
                                    <input type="email" id="profileEmail" name="email" className="form-control border-top-0 border-left-0 border-right-0 rounded-0" placeholder="e.g: enochmartinsemeka@gmail.com" />
                                </div>
                            </div>
                        </div>
                    </form>
      </>
    );
  }
}

class Product extends Component {
  render() {
    return <div className="p-5 m-5 ">Product</div>;
  }
}

class Orders extends Component {
  render() {
    return <div className="p-5 m-5 ">Orders</div>;
  }
}

class Revenue extends Component {
  render() {
    return <div className="p-5 m-5 ">Revenue</div>;
  }
}

class Analytics extends Component {
  render() {
    return <div className="p-5 m-5 ">Analytics</div>;
  }
}

class Notifications extends Component {
  render() {
    return <div className="p-5 m-5 ">Notifications</div>;
  }
}

class Settings extends Component {
  render() {
    return <div className="p-5 m-5 ">Settings</div>;
  }
}

export {
  Profile,
  Product,
  Orders,
  Revenue,
  Analytics,
  Notifications,
  Settings
};
