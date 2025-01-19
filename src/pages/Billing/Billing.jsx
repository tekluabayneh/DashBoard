import React from "react";
import "./billing.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import bg from "../../assets/img/wifi.jpg";
import BillingInformation from "./BillingInformation";
import LefstNavBar from "../../components/leftSideNavBar/lefstNavBar";
import Setting from "../../components/Setting";
const Billing = () => {
  return (
    <>
      <Setting />

      {/* <LefstNavBar /> */}
      <div className="container-fluid m-2 bodyActive Billing_Active">
        <div className="row">
          <div className="grid_Container">
            {/* wifi container */}
            <div
              className="SubContainer ms-1"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            >
              <span className="wifitMask"></span>
              <div className="wifiContainer pt-2 borderadd rounded">
                <i className="material-symbols-rounded text-white p-2 px-4">
                  wifi
                </i>

                <h6 className="px-5">4562 1122 4594 7852</h6>

                <div className="d-flex flex-column pt-4 px-5 pb-4">
                  <div className="d-flex gap-2">
                    <p>Card Holder </p>
                    <p>Expires</p>
                  </div>
                  <div className="d-flex gap-2 opacity-100">
                    <span className="fw-bold text-white">Jack Peterson</span>
                    <span className="fw-bold text-white">11/22</span>
                  </div>
                </div>
              </div>
            </div>
            {/* paypal and salary */}
            <div className="salary_and_paypal  d-flex gap-2">
              {/* single */}
              <div className="salary borderadd align-items-center mt-5 w-50%">
                <div className="icon icon-shape icon-lg bg-gradient-dark text-center rounded">
                  <i className="material-symbols-rounded opacity-10">
                    account_balance
                  </i>
                  <h6 className="fw-bold p-1">Salary</h6>
                  <p className="text-capitalize">belong Interactive</p>
                  <span className="hrBilling"></span>
                  <h3 className="fw-bold">+$2000</h3>
                </div>
              </div>

              <div className="paypal borderadd align-items-center mt-5 w-50%">
                <div className="icon icon-shape icon-lg bg-gradient-dark  text-center rounded">
                  <i className="material-symbols-rounded opacity-10">
                    account_balance_wallet
                  </i>
                  <h6 className="fw-bold p-1">Paypal</h6>
                  <p className="text-capitalize">Freelance Payment</p>

                  <span className="hrBilling"></span>
                  <h3 className="fw-bold">$455.00</h3>
                </div>
              </div>
            </div>
            {/* Invoices */}
            <div className="aside rounded borderadd p-2 px-3">
              <div className="btnContainer d-flex align-items-center justify-content-between pt-3">
                <h6 className="fw-bold p-0 m-0">Invoices</h6>
                <button className="btn btn-outline-danger">view all</button>
              </div>

              <div className="InvoicesBottom m-0">
                <ul className="d-flex flex-column gap-4 m-0 p-0 pb-5">
                  <li className="w-100 d-flex align-items-center justify-content-between p-0 m-0">
                    <div className="d-flex flex-column  align-items-start ">
                      <span className="fw-bold">March, 01, 2020 </span>
                      <span className="small">#MS-415646</span>
                    </div>

                    <span className="text-body-tertiary">$180</span>

                    <button className="pdf btn  text-dark text-sm mb-0 px-0 ms-4 d-flex align-items-center">
                      <i className="material-symbols-rounded  me-1">
                        picture_as_pdf
                      </i>
                      PDF
                    </button>
                  </li>
                  <li className="w-100 d-flex align-items-center justify-content-between p-0 m-0">
                    <div className="d-flex flex-column  align-items-start ">
                      <span className="fw-bold">February, 10, 2021 </span>
                      <span className="small"> #RV-126749</span>
                    </div>

                    <span className="text-body-tertiary">$250</span>
                    <button className="pdf btn  text-dark text-sm mb-0 px-0 ms-4 d-flex align-items-center">
                      <i className="material-symbols-rounded  me-1">
                        picture_as_pdf
                      </i>
                      PDF
                    </button>
                  </li>

                  <li className="w-100 d-flex align-items-center justify-content-between p-0 m-0">
                    <div className="d-flex flex-column  align-items-start ">
                      <span className="fw-bold">April, 05, 2020</span>
                      <span className="small">#FB-212562</span>
                    </div>

                    <span className="text-body-tertiary">$560</span>
                    <button className="pdf btn  text-dark text-sm mb-0 px-0 ms-4 d-flex align-items-center">
                      <i className="material-symbols-rounded  me-1">
                        picture_as_pdf
                      </i>
                      PDF
                    </button>
                  </li>

                  <li className="w-100 d-flex align-items-center justify-content-between p-0 m-0">
                    <div className="d-flex flex-column  align-items-start ">
                      <span className="fw-bold">June, 25, 2019</span>
                      <span className="small">#QW-103578</span>
                    </div>

                    <span className="text-body-tertiary">$120</span>
                    <button className="pdf btn  text-dark text-sm mb-0 px-0 ms-4 d-flex align-items-center">
                      <i className="material-symbols-rounded  me-1">
                        picture_as_pdf
                      </i>
                      PDF
                    </button>
                  </li>
                  <li className="w-100 d-flex align-items-center justify-content-between p-0 m-0">
                    <div className="d-flex flex-column  align-items-start ">
                      <span className="fw-bold">March, 01, 2019</span>
                      <span className="small">#AR-803481</span>
                    </div>

                    <span className="text-body-tertiary">$300</span>
                    <button className="pdf btn  text-dark text-sm mb-0 px-0 ms-4 d-flex align-items-center">
                      <i className="material-symbols-rounded  me-1">
                        picture_as_pdf
                      </i>
                      PDF
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* Payment Method */}
            <div className="PaymentMethod p-2 borderadd rounded d-flex flex-column gap-3">
              <div className="d-flex align-items-center justify-content-between p-2">
                <h6>Payment Method</h6>
                <button className="AddCard">
                  <span>+</span> Add New Card
                </button>
              </div>

              <div className="addPaymentCon d-flex gap-4 m-auto">
                <div className="firstMethod d-flex gap-3 align-items-center px-3 py-4 rounded">
                  <img
                    src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_640.png"
                    alt=""
                  />
                  <span className="fw-bold">**** **** **** 7852</span>

                  <i
                    className="material-symbols-rounded ms-auto text-dark cursor-pointer"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-original-title="Edit Card"
                  >
                    edit
                  </i>
                </div>

                <div className="secondMethod d-flex gap-3 align-items-center px-3 py-4 rounded">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGluJhW7I1NYU7jF77E-9K9I46_ib_DUNHw&s"
                    alt=""
                  />
                  <span className="fw-bold">**** **** **** 7852</span>

                  <i
                    className="material-symbols-rounded ms-auto text-dark cursor-pointer"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-original-title="Edit Card"
                  >
                    edit
                  </i>
                </div>
              </div>
            </div>
          </div>
          {/* billing information */}

          <BillingInformation />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Billing;
