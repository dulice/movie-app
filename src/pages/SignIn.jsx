import React from "react";

const SignIn = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center detail-hero">
        <div className="col-12 col-md-6">
          <h4>Sign In</h4>
          <div className="form-floating  mb-3">
            <input
              type="text"
              className="form-control"
              id="fname"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInputValue">First Name</label>
          </div>
          <div className="form-floating  mb-3">
            <input
              type="text"
              className="form-control"
              id="lname"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInputValue">Last Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating  mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInputValue">Password</label>
          </div>
          <div className="form-floating  mb-3">
            <input
              type="password"
              className="form-control"
              id="comfirm-password"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInputValue">Comfirm Password</label>
          </div>
          <button className="btn btn-dark">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
