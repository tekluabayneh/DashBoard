import React from "react";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import "./Auth.css";
const Register = () => {
  return (
    <div className="Authcontainer bodyActive">
      <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
          <div className="col-12">
            {/* Navbar  */}

            <nav className="navbar navbar-expand-lg blur border-radius-lg top-0 z-index-3 shadow position-absolute mt-4 py-2 start-0 end-0 mx-4 px-5 rounded">
              <div className="container-fluid ps-2 pe-0 d-flex align-items-center justify-content-between ms-5">
                <div id="navbar-brand">
                  <Link
                    className="navbar-brand font-weight-bolder ms-lg-0 ms-3"
                    to="/DashBoard"
                  >
                    Teklu Dashboard
                  </Link>
                </div>

                <div className="px-5">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center me-2  fw-bolder"
                        to="/DashBoard"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/profile"} className="nav-link me-2">
                        <i className="fa fa-user opacity-6 text-dark me-1"></i>
                        Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link me-2" to="/login">
                        <i className="fas fa-user-circle opacity-6 text-dark me-1"></i>
                        Sign in
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            {/* End Navbar */}
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 pt-5">
        <div className="row">
          <div className="card card-plain col-lg-4 col-md-4 m-auto mt-5">
            <div className="card-header">
              <h4 className="font-weight-bolder">Sign Up</h4>
              <p className="mb-0">Enter your email and password to register</p>
            </div>
            <div className="card-body">
              <form role="form">
                <div className="input-group input-group-outline mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="input-group input-group-outline mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="input-group input-group-outline mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="form-check form-check-info text-start ps-0 ms-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    I agree the{" "}
                    <a
                      href="javascript:;"
                      className="text-dark font-weight-bolder"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
                <div className="text-center">
                  <Link to={"/DashBoard"}>
                    <button
                      type="button"
                      className="btn btn-lg btn-secondary btn-lg w-100 mt-4 mb-0"
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>
              </form>
            </div>
            <div className="card-footer text-center pt-0 px-lg-2 px-1">
              <p className="mb-2 text-sm mx-auto">
                Already have an account?
                <Link
                  to={"/login"}
                  className="text-primary text-gradient font-weight-bold"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
