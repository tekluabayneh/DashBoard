import React from "react";
import Favorite from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  const ShowDate = () => {
    let date = new Date();
    let fullyear = date.getFullYear();
    return fullyear;
  };

  return (
    <>
      <footer className="footer py-4 mt-4 w-100">
        <div className="container-fluid">
          <div className="row ">
            <div className="footerFlex">
              <div className=" mb-4">
                <div className=" copyright text-center text-sm  text-lg-start">
                  © {ShowDate()}, made <Favorite htmlColor="red" /> by Teklu
                </div>
              </div>
              <div className="">
                <div className="nav nav-footer d-flex">
                  <li className="nav-item">
                    <Link to="/" className="nav-link fw-bold bodyActive">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link fw-bold bodyActive">
                      Blog
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
