import React from "react";
import "./dashboard.css";
import "../../components/header/header.css";
import Footer from "../../components/footer/Footer";
import Charts from "./Charts";
import Setting from "../../components/Setting";

const DashBoard = () => {
  return (
    <>
      <Setting />
      {/* <LefstNavBar /> */}
      <div className="DashBoard_Container container-fluid bodyActive">
        <div className="row">
          {/* header  */}

          {/* DashBoard pages start  here */}
          <section className="DashBoard">
            <div className="container-fluid py-2">
              <div className="row">
                <div className="title_Container">
                  <h1 className="fw-bolder">Dashboard</h1>
                  <p className="text-body-tertiary">
                    Check the sales, value and bounce rate by country.
                  </p>
                </div>
                {/* single */}

                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                  <div className="card">
                    <div className="card-header p-2 ps-3">
                      <div className="d-flex justify-content-between">
                        <div>
                          <p className="text-sm mb-0 text-capitalize">
                            Today's Money
                          </p>
                          <h4 className="mb-0 k_money">$53k</h4>
                        </div>
                        <div className="icon icon-md icon-shape bg-gradient-dark shadow-dark shadow text-center rounded-2">
                          <i className="material-symbols-rounded opacity-10">
                            weekend
                          </i>
                        </div>
                      </div>
                    </div>
                    <hr className="dark horizontal my-0" />
                    <div className="card-footer p-2 ps-3">
                      <p className="mb-0 text-sm show_days">
                        <span className="text-success fw-bolder px-1">
                          +55%
                        </span>
                        than last month
                      </p>
                    </div>
                  </div>
                </div>
                {/* single */}

                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                  <div className="card">
                    <div className="card-header p-2 ps-3">
                      <div className="d-flex justify-content-between">
                        <div>
                          <p className="text-sm mb-0 text-capitalize">
                            Today's Users
                          </p>
                          <h4 className="mb-0 k_money">2300</h4>
                        </div>
                        <div className="icon icon-md icon-shape bg-gradient-dark shadow-dark shadow text-center rounded-2">
                          <i className="material-symbols-rounded opacity-10">
                            person
                          </i>
                        </div>
                      </div>
                    </div>
                    <hr className="dark horizontal my-0" />
                    <div className="card-footer p-2 ps-3">
                      <p className="mb-0 text-sm show_days">
                        <span className="text-success fw-bolder px-1">+3%</span>
                        than last month
                      </p>
                    </div>
                  </div>
                </div>
                {/* single */}
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                  <div className="card">
                    <div className="card-header p-2 ps-3">
                      <div className="d-flex justify-content-between">
                        <div>
                          <p className="text-sm mb-0 text-capitalize">
                            Ads Views
                          </p>
                          <h4 className="mb-0 k_money">3,462</h4>
                        </div>
                        <div className="icon icon-md icon-shape bg-gradient-dark shadow-dark shadow text-center rounded-2">
                          <i className="material-symbols-rounded opacity-10">
                            leaderboard
                          </i>
                        </div>
                      </div>
                    </div>
                    <hr className="dark horizontal my-0" />
                    <div className="card-footer p-2 ps-3">
                      <p className="mb-0 text-sm show_days">
                        <span className="text-danger fw-bolder px-1">-2%</span>
                        than yesterday
                      </p>
                    </div>
                  </div>
                </div>
                {/* single */}
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                  <div className="card">
                    <div className="card-header p-2 ps-3">
                      <div className="d-flex justify-content-between">
                        <div>
                          <p className="text-sm mb-0 text-capitalize">Sales</p>
                          <h4 className="mb-0 k_money">$103,430</h4>
                        </div>
                        <div className="icon icon-md icon-shape bg-gradient-dark shadow-dark shadow text-center rounded-2">
                          <i className="material-symbols-rounded opacity-10">
                            weekend
                          </i>
                        </div>
                      </div>
                    </div>
                    <hr className="dark horizontal my-0" />
                    <div className="card-footer p-2 ps-3">
                      <p className="mb-0 text-sm show_days">
                        <span className="text-success fw-bolder px-1">+5%</span>
                        than last month
                      </p>
                    </div>
                  </div>
                </div>
                {/* single */}
              </div>
            </div>
          </section>

          {/*chart  */}
          <Charts />

          {/* fotter page */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DashBoard;
