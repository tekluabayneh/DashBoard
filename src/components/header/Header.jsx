import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import "./header.css";
import { Link, ScrollRestoration, useLocation } from "react-router-dom";
import LefstNavBar from "../leftSideNavBar/lefstNavBar";
import RightSideSetting, {
  useCheckbox,
} from "../RightSaideSetting/RightSideSetting";
import messageImg1 from "../../assets/img/team-2.jpg";
import messageImg2 from "../../assets/img/team-3.jpg";
import messageImg3 from "../../assets/img/team-4.jpg";

const Header = ({ handeleSettingOpen }) => {
  const [menutoggle, setmenutoggle] = useState(false);
  const [SearchInputValue, setSearchInputValue] = useState("");
  const [LabelVisible, setLabelVisible] = useState(false);
  const [notification, setNotification] = useState(false);
  const [ScrollPassed, setisSCrollPassed] = useState(false);

  // get the location path from the url
  let location = useLocation();
  let path = location.pathname.slice(1);

  //check if the location path is empty if so add the DahsBoard key to the path
  if (path == "") {
    path = "DashBoard";
  }

  // handel toggle meu
  const handelToggle = () => {
    setmenutoggle((prev) => !prev);
  };

  const handelFocus = () => {
    setLabelVisible(true);
  };

  const handelonBlure = () => {
    setLabelVisible(false);
  };

  const handelInputLable = (e) => {
    setSearchInputValue(e.target.value);
  };
  const handelNotification = (e) => {
    setNotification((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20) {
        setisSCrollPassed(true);
      } else {
        setisSCrollPassed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <LefstNavBar menutoggle={menutoggle} setmenutoggle={setmenutoggle} />

      {/* <RightSideSetting /> */}
      <header>
        <div
          className={`text-center- header_Container container  bodyActive 
          ${ScrollPassed ? "header_Container_Active" : ""}
          `}
        >
          <div className="row">
            <div className="content_container">
              <div className="showPageStatu ">
                <span>pages</span>/
                <span className="fw-bold ms-1 text-capitalize">{path}</span>
              </div>

              <div className="SearchContainer">
                <div className="SearchInputDiv">
                  <label
                    className={`SearchLable TypeHere ${
                      LabelVisible ? "SearchLable_active" : ""
                    }`}
                    htmlFor="search"
                  >
                    Type Here..
                  </label>
                  <input
                    onChange={handelInputLable}
                    onFocus={handelFocus}
                    onBlur={handelonBlure}
                    type="text"
                    value={SearchInputValue}
                    name="search"
                    className="search"
                  />
                </div>
              </div>

              <div className="topRightIcon_container">
                <ul>
                  <li
                    onClick={handelToggle}
                    className={`menu_icon_container ${
                      menutoggle ? "active" : ""
                    }`}
                  >
                    <div className="sidenav-toggler-line"></div>
                  </li>
                  <li>
                    <i
                      onClick={handeleSettingOpen}
                      className="material-symbols-rounded fixed-plugin-button-nav"
                    >
                      settings
                    </i>
                  </li>
                  <li
                    onClick={handelNotification}
                    className="position-relative"
                  >
                    <i className="material-symbols-rounded">notifications</i>

                    <ul
                      className={`dropdown-menu dropdown-menu-end px-2 py-3 me-sm-n4 show ${
                        notification ? "active" : ""
                      }`}
                      aria-labelledby="dropdownMenuButton"
                      data-bs-popper="static"
                    >
                      <li className="mb-2">
                        <Link
                          className="dropdown-item border-radius-md"
                          href="javascript:;"
                        >
                          <div className="d-flex py-1">
                            <div className="my-auto">
                              <img
                                src={messageImg1}
                                className="avatar avatar-sm  me-3"
                              />
                            </div>

                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                <span className="font-weight-bold">
                                  New message
                                </span>
                                from Laur
                              </h6>
                              <p className="text-xs text-secondary mb-0">
                                <i className="fa fa-clock me-1"></i>
                                13 minutes ago
                              </p>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="mb-2 pt-3">
                        <Link
                          className="dropdown-item border-radius-md"
                          href="javascript:;"
                        >
                          <div className="d-flex py-1">
                            <div className="my-auto">
                              <img
                                src={messageImg2}
                                className="avatar avatar-sm bg-gradient-dark  me-3 "
                              />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                <span className="font-weight-bold">
                                  New album
                                </span>{" "}
                                by Travis Scott
                              </h6>
                              <p className="text-xs text-secondary mb-0">
                                <i className="fa fa-clock me-1"></i>1 day
                              </p>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item border-radius-md"
                          href="javascript:;"
                        >
                          <div className="d-flex py-1">
                            <img
                              src={messageImg3}
                              className="avatar avatar-sm  me-3 "
                            />

                            <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                              <title>credit-card</title>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                Payment successfully completed
                              </h6>
                              <p className="text-xs text-secondary mb-0">
                                <i className="fa fa-clock me-1"></i>2 days
                              </p>
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={"/profile"}>
                      <i className="material-symbols-rounded">account_circle</i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
