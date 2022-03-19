import React from 'react'

const SignIn = () => {
  return (
    <div className="container">
        <div className="row justify-content-center align-items-center vh-100">
            <div className="col-12 col-md-6">
                <h4>Sign In</h4>
                <div className="form-floating  mb-3">
                    <input type="text" className="form-control" id="fname" placeholder="name@example.com" />
                    <label for="floatingInputValue">First Name</label>
                </div>
                <div className="form-floating  mb-3">
                    <input type="text" className="form-control" id="lname" placeholder="name@example.com" />
                    <label for="floatingInputValue">Last Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating  mb-3">
                    <input type="password" className="form-control" id="password" placeholder="name@example.com" />
                    <label for="floatingInputValue">Password</label>
                </div>
                <div className="form-floating  mb-3">
                    <input type="password" className="form-control" id="comfirm-password" placeholder="name@example.com" />
                    <label for="floatingInputValue">Comfirm Password</label>
                </div>
                <button className="btn btn-dark">Sign In</button>
            </div>
        </div>
    </div>
  )
}

export default SignIn