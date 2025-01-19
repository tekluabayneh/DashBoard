import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Login = () => {
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

                <div className="px-5" id="navigation">
                  <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center me-2  fw-bold"
                        to="/DashBoard"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link me-2" to="/profile">
                        <i className="fa fa-user opacity-6 text-dark me-1"></i>
                        Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link me-2" to={"/register"}>
                        <i className="fas fa-user-circle opacity-6 text-dark me-1"></i>
                        Sign Up
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

      <main className="main-content mt-6">
        <div className="page-header align-items-start min-vh-100">
          <span className="mask bg-gradient-dark opacity-6 rounded"></span>
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-4 col-md-8 col-12 mx-auto">
                <div className="card z-index-0 fadeIn3 fadeInBottom">
                  <div className="card-header p-0 position-relative mt-n5 mx-3 z-index-2 ">
                    <div className="bg-dark shadow-dark border-radius-lg py-3 pe-1 rounded mt-n5">
                      <h4 className="text-white fs-1 fw-bolder text-center mt-2 mb-0">
                        Sign in
                      </h4>
                      <div className="row mt-3">
                        <div className="col-2 text-center ms-auto">
                          <Link className="btn btn-link px-3">
                            <i className="fa fa-facebook text-white text-lg"></i>
                          </Link>
                        </div>
                        <div className="col-2 text-center px-1">
                          <Link className="btn btn-link px-3">
                            <i className="fa fa-github text-white text-lg"></i>
                          </Link>
                        </div>
                        <div className="col-2 text-center me-auto">
                          <Link className="btn btn-link px-3">
                            <i className="fa fa-google text-white text-lg"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-body">
                    <form role="form" className="text-start">
                      <div className="input-group input-group-outline my-3">
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
                      <div className="form-check form-switch d-flex align-items-center mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="rememberMe"
                          checked
                        />
                        <label
                          className="form-check-label mb-0 ms-3"
                          for="rememberMe"
                        >
                          Remember me
                        </label>
                      </div>
                      <div className="text-center">
                        <Link to={"/DashBoard"}>
                          <button
                            type="button"
                            className="btn btn-secondary w-100 my-4 mb-2"
                          >
                            Sign in
                          </button>
                        </Link>
                      </div>
                      <p className="mt-4 text-sm text-center">
                        Don't have an account?
                        <Link
                          to={"/DashBoard"}
                          className="text-primary text-gradient fw-bold ms-1"
                        >
                          Sign up
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
