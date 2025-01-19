import React, { createContext, useContext, useEffect, useState } from "react";
import "./RightSideNavBar.css";
import { Link } from "react-router-dom";
import SvgIcon from "@mui/icons-material/Favorite";
import Header from "../header/Header";
import LefstNavBar from "../leftSideNavBar/lefstNavBar";

const RightSideSetting = ({ isactive, handeleSettingClose }) => {
  const [isDarkMode, setisDarkMode] = useState(false);
  const [SideBarColor, setSideBarColor] = useState("dark");

  const sidebarColor = (e) => {
    // console.log(e.target.dataset.color);
    setSideBarColor(e.target.dataset.color);
  };

  useEffect(() => {
    console.log("SideBarColor on mount or update:", SideBarColor);
  }, [sidebarColor]);

  /* handel dark toggle */
  const handleCheckboxChange = (e) => {
    setisDarkMode((prev) => !prev);
  }; 

  useEffect(() => {
    // Add or remove the dark-mode class on the body
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("DarkMode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("DarkMode", "false");
    }
  }, [isDarkMode]);

  return (
    <>
      <LefstNavBar
        SideBarColor={SideBarColor}
        setSideBarColor={setSideBarColor}
      />
      <div
        className={`rightSideNavBar card shadow-lg  py-5 ${
          isactive ? "rightSideNavBar_active" : ""
        } `}
      >
        <div className="card-body pt-sm-3 pt-0">
          <div className="mb-4 d-flex align-items-center justify-content-between">
            <i
              onClick={handeleSettingClose}
              className="material-symbols-rounded fixed-plugin-button-nav cursor-pointer"
            >
              close
            </i>
            <h4 className="text-center fw-bold">Teklu DashBoard</h4>
          </div>
          <div>
            <h6 className="mb-2 fw-bold">Sidebar Colors</h6>
          </div>
          <Link className="switch-trigger background-color">
            <div className="badge-colors my-3 mt-4 text-start">
              <span
                className="badge filter bg-primary"
                data-color="primary"
                onClick={sidebarColor}
              ></span>
              <span
                className="badge filter bg-dark"
                data-color="dark"
                onClick={sidebarColor}
              ></span>
              <span
                className="badge filter bg-info"
                data-color="info"
                onClick={sidebarColor}
              ></span>
              <span
                className="badge filter bg-success"
                data-color="success"
                onClick={sidebarColor}
              ></span>
              <span
                className="badge filter bg-warning"
                data-color="warning"
                onClick={sidebarColor}
              ></span>
              <span
                className="badge filter bg-danger"
                data-color="danger"
                onClick={sidebarColor}
              ></span>
            </div>
          </Link>

          <div className="mt-5">
            <h6 className="mb-0">Sidenav Type</h6>
            <p className="text-sm">Choose between different sidenav types.</p>
          </div>

          <div className="d-flex">
            <button
              className="btn btn-outline-dark  px-3 mb-2"
              data-class="bg-gradient-dark"
            >
              Dark
            </button>
            <button
              className="btn btn-outline px-3 mb-2 ms-2 border"
              data-class="bg-transparent"
            >
              Transparent
            </button>
            <button
              className="btn btn-outline px-3 mb-2 active ms-2"
              data-class="bg-white"
            >
              White
            </button>
          </div>
          <p className="text-sm d-xl-none d-block mt-2">
            You can change the sidenav type just on desktop view.
          </p>

          <hr className="horizontal my-3 light" />
          <div className="mt-2 d-flex">
            <h6 className="mb-0">Light / Dark</h6>
            <div className="form-check form-switch ps-0 ms-auto my-auto is-filled">
              <input
                className="form-check-input mt-1 ms-auto"
                value={isDarkMode}
                onChange={handleCheckboxChange}
                type="checkbox"
                id="dark-version"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSideSetting;
