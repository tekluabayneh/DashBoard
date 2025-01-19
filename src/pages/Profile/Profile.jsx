import React, { useState } from "react";
import "./profile.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import profileImg from "../../assets/img/bruce-mars.jpg";
import profileone from "../../assets/img/bruce-mars.jpg";
import profiletow from "../../assets/img/bruce-mars.jpg";
import profilethree from "../../assets/img/bruce-mars.jpg";
import profilefour from "../../assets/img/ivana-square.jpg";
import img from "../../assets/img/ivana-squares.jpg";
import team2 from "../../assets/img/team-2.jpg";
import team3 from "../../assets/img/team-3.jpg";
import team4 from "../../assets/img/team-4.jpg";
import team5 from "../../assets/img/team-5.jpg";
import homedecor1 from "../../assets/img/home-decor-1.jpg";
import homedecor2 from "../../assets/img/home-decor-2.jpg";
import homedecor3 from "../../assets/img/home-decor-3.jpg";
import LefstNavBar from "../../components/leftSideNavBar/lefstNavBar";
import Setting from "../../components/Setting";
// import homedecor4 from "../../assets/img/home-decor-4.jpg";

const Profile = () => {
  let [isActive, setIsactive] = useState({
    one: true,
    tow: false,
    three: false,
  });

  const handelActive = (key) => {
    setIsactive((prev) => ({
      ...(prev = false),
      [key]: true,
    }));
  };

  return (
    <>
      <Setting />

      {/* <LefstNavBar /> */}
      <div className="container-fluid position-relative px-2 px-md-4 bodyActive Profile_Active">
        <div
          className="page-header mt-4"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <span className="mask_img"></span>
        </div>

        {/* profile contsnt */}
        <div className="BottomProfileContent_Container shadow rounded ">
          <div className="profilImg_and_navContainer ">
            <div className="d-flex gap-3 align-items-center ">
              <img className="img-fluid" src={profileImg} alt="" />
              <div>
                <h4>Richard Davis</h4>
                <p>CEO / Co-Founder</p>
              </div>
            </div>

            <div className="Profilenav me-2  p-1 px-3 rounded">
              <ul className="nav">
                <li
                  onClick={() => handelActive("one")}
                  className="nav-item p-1"
                >
                  <a
                    className={`nav-link mb-0 px-0 py-1 ${
                      isActive.one ? "active" : ""
                    }`}
                  >
                    <i className="material-symbols-rounded text-lg position-relative">
                      home
                    </i>
                    <span className="ms-1">App</span>
                  </a>
                </li>

                <li
                  onClick={() => handelActive("tow")}
                  className="nav-item p-1"
                >
                  <a
                    className={`nav-link mb-0 px-0 py-1 ${
                      isActive.tow ? "active" : ""
                    }`}
                  >
                    <i className="material-symbols-rounded text-lg position-relative">
                      email
                    </i>
                    <span className="ms-1">Messages</span>
                  </a>
                </li>

                <li onClick={() => handelActive("three")} className="nav-item">
                  <a
                    className={`nav-link mb-0 px-0 py-1 ${
                      isActive.three ? "active" : ""
                    } `}
                  >
                    <i className="material-symbols-rounded text-lg position-relative">
                      settings
                    </i>
                    <span className="ms-1">Settings</span>
                  </a>
                </li>

                <div className="moving-tab position-absolute nav-link">
                  <a className="nav-link mb-0 px-0 py-1 "></a>
                </div>
              </ul>
            </div>
          </div>

          <div className="card-body p-3">
            <h6 className="text-uppercase  text-xs font-weight-bolder">
              Account
            </h6>
            <ul className="list-group">
              <li className="list-group-item border-0 px-0">
                <div className="form-check form-switch ps-0">
                  <input
                    className="form-check-input ms-auto"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label ms-3 text-truncate w-80 mb-0"
                    for="flexSwitchCheckDefault"
                  >
                    Email me when someone follows me
                  </label>
                </div>
              </li>
              <li className="list-group-item border-0 px-0">
                <div className="form-check form-switch ps-0">
                  <input
                    className="form-check-input ms-auto"
                    type="checkbox"
                    id="flexSwitchCheckDefault1"
                  />
                  <label
                    className="form-check-label  ms-3 text-truncate w-80 mb-0"
                    for="flexSwitchCheckDefault1"
                  >
                    Email me when someone answers on my post
                  </label>
                </div>
              </li>
              <li className="list-group-item border-0 px-0">
                <div className="form-check form-switch ps-0">
                  <input
                    className="form-check-input ms-auto"
                    type="checkbox"
                    id="flexSwitchCheckDefault2"
                  />
                  <label
                    className="form-check-label ms-3 text-truncate w-80 mb-0"
                    for="flexSwitchCheckDefault2"
                  >
                    Email me when someone mentions me
                  </label>
                </div>
              </li>
            </ul>
            <h6 className="text-uppercase  text-xs font-weight-bolder mt-4">
              Application
            </h6>
            <ul className="list-group">
              <li className="list-group-item border-0 px-0">
                <div className="form-check form-switch ps-0">
                  <input
                    className="form-check-input ms-auto"
                    type="checkbox"
                    id="flexSwitchCheckDefault3"
                  />
                  <label
                    className="form-check-label  ms-3 text-truncate w-80 mb-0"
                    for="flexSwitchCheckDefault3"
                  >
                    New launches and projects
                  </label>
                </div>
              </li>
              <li className="list-group-item border-0 px-0">
                <div className="form-check form-switch ps-0">
                  <input
                    className="form-check-input ms-auto"
                    type="checkbox"
                    id="flexSwitchCheckDefault4"
                  />
                  <label
                    className="form-check-label  ms-3 text-truncate w-80 mb-0"
                    for="flexSwitchCheckDefault4"
                  >
                    Monthly product updates
                  </label>
                </div>
              </li>
              <li className="list-group-item border-0 px-0 pb-0">
                <div className="form-check form-switch ps-0">
                  <input
                    className="form-check-input ms-auto"
                    type="checkbox"
                    id="flexSwitchCheckDefault5"
                  />
                  <label
                    className="form-check-label  ms-3 text-truncate w-80 mb-0"
                    for="flexSwitchCheckDefault5"
                  >
                    Subscribe to newsletter
                  </label>
                </div>
              </li>
            </ul>
          </div>

          <div className="information mt-2 p-2">
            <h5>Profile Information</h5>
            <p>
              Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer
              is no. If two equally difficult paths, choose the one more painful
              in the short term (pain avoidance is creating an illusion of
              equality).
            </p>
            {/* /////////////////////////// */}
            <div className="d-flex gap-3 flex-column mt-4">
              {/* single */}
              <span className="d-flex align-items-center gap-2">
                <span className="fw-bold">Full Name:</span>
                <span>Alec M. Thompson</span>
              </span>
              {/* single */}

              <span className="d-flex align-items-center gap-2">
                <span className="fw-bold">Mobile:</span>
                <span>(44) 123 1234 123 </span>
              </span>
              {/* single */}
              <span className="d-flex align-items-center gap-2">
                <span className="fw-bold">Email:</span>
                <span>alecthompson@mail.com</span>
              </span>
              {/* single */}

              <span className="d-flex align-items-center gap-2">
                <span className="fw-bold">Location:</span>
                <span>USA</span>
              </span>
            </div>
            {/* ////////     Conversations //////// */}
            <div className="Conversations mt-5">
              <h5>Conversations</h5>

              <ul className="d-flex w-100 align-items-center flex-column">
                <li className="d-flex w-100 gap-2 align-items-center justify-content-between py-3">
                  <div className="d-flex gap-2 align-items-center">
                    <img src={profileImg} alt="" />
                    <span className="d-flex align-items-start flex-column">
                      <span>Sophie B.</span>
                      <span className="mes"> Hi! I need more information.</span>
                    </span>
                  </div>
                  <span className="text-red fw-bold">Replay</span>
                </li>

                <li className="d-flex w-100 gap-2 align-items-center justify-content-between py-3">
                  <div className="d-flex gap-2 align-items-center">
                    <img src={profileImg} alt="" />
                    <span className="d-flex align-items-start flex-column">
                      <span>Anne Marie</span>
                      <span className="mes"> Awesome work, can you..</span>
                    </span>
                  </div>
                  <span className="text-red fw-bold">Replay</span>
                </li>

                <li className="d-flex w-100 gap-2 align-items-center justify-content-between py-3">
                  <div className="d-flex gap-2 align-items-center">
                    <img src={profilefour} alt="" />
                    <span className="d-flex align-items-start flex-column">
                      <span>Ivanna</span>
                      <span className="mes">About files I can..</span>
                    </span>
                  </div>

                  <span className="text-red fw-bold">Replay</span>
                </li>

                <li className="d-flex w-100 gap-2 align-items-center justify-content-between py-3">
                  <div className="d-flex gap-2 align-items-center">
                    <img src={profileImg} alt="" />
                    <span className="d-flex align-items-start flex-column">
                      <span>Peterson</span>
                      <span className="mes">Have a great afternoon..</span>
                    </span>
                  </div>
                  <span className="text-red fw-bold">Replay</span>
                </li>
              </ul>
            </div>
            {/* Projects
Architects design houses */}
            <div className="ProfileProjects mt-4">
              <h5>Projects </h5>
              <p>Architects design houses</p>

              <div className="ProjuctContainer">
                {/* single */}
                <div className="SingProjuct">
                  <div className="projuctImg">
                    <img src={homedecor1} alt="" />
                  </div>

                  <div className="projuctContent">
                    <h5>Project #1</h5>
                    <h4>Modern</h4>
                    <p className="p-1">
                      Modern As Uber works through a huge amount of internal
                      management turmoil.
                    </p>
                    <div className="btn_and_smallImgContainer">
                      <button>click to View </button>
                      <span className="img_container">
                        <img src={team2} alt="img" />
                        <img src={team3} alt="img" />
                        <img src={team4} alt="img" />
                        <img src={team5} alt="img" />
                      </span>
                    </div>
                  </div>
                </div>
                {/* single */}
                {/* single */}
                <div className="SingProjuct">
                  <div className="projuctImg">
                    <img src={homedecor2} alt="" />
                  </div>

                  <div className="projuctContent">
                    <h5>Project #2</h5>
                    <h4>Scandinavian</h4>
                    <p className="p-1">
                      Scandinavian Music is something that every person has his
                      or her own specific opinion about.
                    </p>

                    <div className="btn_and_smallImgContainer">
                      <button>click to View</button>
                      <span className="img_container">
                        <img src={team5} alt="img" />
                        <img src={team4} alt="img" />
                        <img src={img} alt="img" />
                      </span>
                    </div>
                  </div>
                </div>
                {/* single */}

                <div className="SingProjuct">
                  <div className="projuctImg">
                    <img src={homedecor3} alt="" />
                  </div>

                  <div className="projuctContent">
                    <h5>Project #1</h5>
                    <h4>Minimalist</h4>
                    <p className="p-1">
                      Different people have different taste, and various types
                      of music. Music is life.
                    </p>
                    <div className="btn_and_smallImgContainer">
                      <button>click to View</button>
                      <span className="img_container">
                        <img src={team2} alt="img" />
                        <img src={team3} alt="img" />
                        <img src={team4} alt="img" />
                        <img src={team5} alt="img" />
                      </span>
                    </div>
                  </div>
                </div>
                {/* single */}

                <div className="SingProjuct">
                  <div className="projuctImg">
                    <img
                      src="https://images.unsplash.com/photo-1606744824163-985d376605aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt=""
                    />
                  </div>

                  <div className="projuctContent">
                    <h5>Project #4</h5>
                    <h4> Gothic</h4>
                    <p className="p-1">
                      Why would anyone pick blue over pink? Pink is obviously a
                      better color.
                    </p>
                    <div className="btn_and_smallImgContainer">
                      <button>click to View </button>
                      <span className="img_container">
                        <img src={team2} alt="img" />
                        <img src={team3} alt="img" />
                        <img src={team4} alt="img" />
                      </span>
                    </div>
                  </div>
                </div>
                {/* single */}
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Profile;
