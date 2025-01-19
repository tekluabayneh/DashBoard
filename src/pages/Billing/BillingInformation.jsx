import React from "react";
import "./BillingInformation.css";
const BillingInformation = () => {
  return (
    <>
      <div className="BillingInformation mt-4 bodyActive">
        {/*  Information */}
        <div className="Information borderadd shadow p-3 rounded">
          <h5 className="text-capitalize">Billing Information</h5>
          <div className="SingleBillingInformation rounded m-auto p-4 mt-3">
            <div className="d-flex align-item-center justify-content-between">
              <h6>Oliver Liam</h6>
              <span className="text-danger">Delete</span>
              <span>
                <span>
                  <i className="material-symbols-rounded text-sm me-2">edit</i>
                </span>
                Edit
              </span>
            </div>
            <div className="billingContent text-body-tertiary text-capitalize ">
              <span className="d-flex gap-3">
                <span>Company Name:</span>
                <span className="fw-bold">Viking Burrito</span>
              </span>
              <span className="d-flex gap-3">
                <span>Email Address:</span>
                <span className="fw-bold">oliver@burrito.com</span>
              </span>
              <span className="d-flex gap-3">
                <span>VAT Number:</span>
                <span className="fw-bold"> FRB1235476</span>
              </span>
            </div>
          </div>
          <div className="SingleBillingInformation rounded m-auto p-4 mt-3">
            <div className="d-flex align-item-center justify-content-between">
              <h6>Lucas Harper</h6>
              <span className="text-danger">Delete</span>
              <span>
                <span>
                  <i className="material-symbols-rounded text-sm me-2">edit</i>
                </span>
                Edit
              </span>
            </div>
            <div className="billingContent text-body-tertiary text-capitalize ">
              <span className="d-flex gap-3">
                <span>Company Name:</span>
                <span className="fw-bold">Stone Tech Zone</span>
              </span>
              <span className="d-flex gap-3">
                <span>Email Address:</span>
                <span className="fw-bold">lucas@stone-tech.com</span>
              </span>
              <span className="d-flex gap-3">
                <span>VAT Number:</span>
                <span className="fw-bold">FRB1235476</span>
              </span>
            </div>
          </div>
          <div className="SingleBillingInformation rounded m-auto p-4 mt-3">
            <div className="d-flex align-item-center justify-content-between">
              <h6>Ethan James</h6>
              <span className="text-danger">Delete</span>
              <span>
                <span>
                  <i className="material-symbols-rounded text-sm me-2">edit</i>
                </span>
                Edit
              </span>
            </div>
            <div className="billingContent text-body-tertiary text-capitalize ">
              <span className="d-flex gap-3">
                <span>Company Name:</span>
                <span className="fw-bold">Fiber Notion</span>
              </span>
              <span className="d-flex gap-3">
                <span>Email Address:</span>
                <span className="fw-bold">ethan@fiber.com</span>
              </span>
              <span className="d-flex gap-3">
                <span>VAT Number:</span>
                <span className="fw-bold">FRB1235476</span>
              </span>
            </div>
          </div>
        </div>

        {/* Your Transaction's */}
        <div className="YourTransaction shadow borderadd p-2 rounded">
          <div className="d-flex align-items-center justify-content-between">
            <h6 className="pt-2">Your Transaction's</h6>
            <span className="date">
              <i className="material-symbols-rounded me-2 text-lg ">
                date_range
              </i>
              23 - 30 March 2020
            </span>
          </div>
          <span className="fw-bold py-2">Newest</span>

          <ul className="d-flex flex-column">
            <li className="d-flex align-items-center justify-content-between my-3">
              <div className="d-flex gap-3 align-items-center">
                <span className="curcle">
                  <i className="material-symbols-rounded text-lg text-danger">
                    expand_more
                  </i>
                </span>
                <div className="smaller d-flex flex-column gap-1">
                  <span className="fw-bold">Netflix</span>
                  <span className="">27 March 2020, at 12:30 PM</span>
                </div>
              </div>

              <span className="pe-1 text-danger">-$2,500</span>
            </li>
            <li className="d-flex align-items-center justify-content-between my-3">
              <div className="d-flex gap-3 align-items-center">
                <span className="curcle green">
                  <i className="material-symbols-rounded text-lg text-success">
                    expand_more
                  </i>
                </span>
                <div className="smaller d-flex flex-column gap-1">
                  <span className="fw-bold">Apple</span>
                  <span className="">27 March 2020, at 04:30 AM</span>
                </div>
              </div>

              <span className="pe-1 text-success">+$2,000</span>
            </li>
          </ul>
          <span className="fw-bold py-2 ms-1">Yesterday</span>

          <ul className="d-flex flex-column">
            <li className="d-flex align-items-center justify-content-between my-3">
              <div className="d-flex gap-3 align-items-center">
                <span className="curcle green">
                  <i className="material-symbols-rounded text-lg text-success">
                    expand_more
                  </i>
                </span>
                <div className="smaller d-flex flex-column gap-1">
                  <span className="fw-bold">Stripe</span>
                  <span className="">26 March 2020, at 13:45 PM</span>
                </div>
              </div>

              <span className="pe-1 text-success">-$750</span>
            </li>

            <li className="d-flex align-items-center justify-content-between my-3">
              <div className="d-flex gap-3 align-items-center">
                <span className="curcle green">
                  <i className="material-symbols-rounded text-lg text-success">
                    expand_more
                  </i>
                </span>
                <div className="smaller d-flex flex-column gap-1">
                  <span className="fw-bold">HubSpot</span>
                  <span className="">26 March 2020, at 12:30 PM</span>
                </div>
              </div>

              <span className="pe-1 text-success">-$1,000</span>
            </li>
            <li className="d-flex align-items-center justify-content-between my-3">
              <div className="d-flex gap-3 align-items-center">
                <span className="curcle notWork">
                  <i className="material-symbols-rounded text-lg">
                    priority_high
                  </i>
                </span>
                <div className="smaller d-flex flex-column gap-1">
                  <span className="fw-bold">Webflow</span>
                  <span className="">26 March 2020, at 05:00 AM</span>
                </div>
              </div>
              <span className="pe-1">Pendding</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BillingInformation;
