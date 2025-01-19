import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuContext } from "../header/Header";

const LefstNavBar = ({
  menutoggle,
  setmenutoggle,
  SideBarColor,
  setSideBarColor,
}) => {
  const Location = useLocation().pathname.slice(1);

  return (
    <>
      <div
        className={`AsideNavBar pt-4 ${
          menutoggle ? "AsideNavBar_Active" : ""
        } bodyActive`}
      >
        <div className="logoContainer d-flex gap-1 align-items-center flex-column">
          <h5 className="ms-2 cursor-pointer">Teklu DashBoard</h5>
          <span className="lienBottom"></span>
        </div>

        <ul className={`Asidenavbar-nav pt-5`}>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                Location === "DashBoard" ? "sidenavbarActive" : ""
              }  bg-gradient-dark`}
              to="/DashBoard"
            >
              <i className="material-symbols-rounded opacity-5">dashboard</i>
              <span className="nav-link-text ms-1">Dashboard</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className={`nav-link ${
                Location === "table" ? "sidenavbarActive" : ""
              } text-dark`}
              to="/table"
            >
              <i className="material-symbols-rounded opacity-5">table_view</i>
              <span className="nav-link-text ms-1">Tables</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                Location === "billing" ? "sidenavbarActive" : ""
              } text-dark`}
              to="/billing"
            >
              <i className="material-symbols-rounded opacity-5">receipt_long</i>
              <span className="nav-link-text ms-1">Billing</span>
            </Link>
          </li>
          <li className="nav-item mt-2">
            <h6 className="ps-4  text-uppercase font-weight-bolder opacity-5">
              Account pages
            </h6>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                Location === "profile" ? "sidenavbarActive" : ""
              } text-dark`}
              to="/profile"
            >
              <i className="material-symbols-rounded opacity-5">person</i>
              <span className="nav-link-text ms-1">Profile</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                Location === "login" ? "sidenavbarActive" : ""
              } text-dark`}
              to="/login"
            >
              <i className="material-symbols-rounded opacity-5">login</i>
              <span className="nav-link-text ms-1">Sign In</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                Location === "register" ? "sidenavbarActive" : ""
              } text-dark`}
              to="/register"
            >
              <i className="material-symbols-rounded opacity-5">assignment</i>
              <span className="nav-link-text ms-1">Sign Up</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LefstNavBar;
