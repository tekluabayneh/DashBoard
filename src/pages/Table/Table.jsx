import React from "react";
import Header from "../../components/header/Header";

import logojira from "../../assets/img/small-logos/logo-jira.svg";
import logoinvision from "../../assets/img/small-logos/logo-invision.svg";
import logoatlassian from "../../assets/img/small-logos/logo-atlassian.svg";
import logoasana from "../../assets/img/small-logos/logo-spotify.svg";
import logoxd from "../../assets/img/ivana-squares.jpg";
import img from "../../assets/img/ivana-squares.jpg";

import Asana from "../../assets/img/small-logos/logo-asana.svg";
import gtiHb from "../../assets/img/small-logos/github.svg";
import Atlassian from "../../assets/img/small-logos/logo-atlassian.svg";
import Bootstrap from "../../assets/img/small-logos/bootstrap.svg";
import Slack from "../../assets/img/small-logos/logo-slack.svg";
import Devto from "../../assets/img/small-logos/devto.svg";

import John from "../../assets/img/team-2.jpg";
import Alexa from "../../assets/img/team-3.jpg";
import Laurent from "../../assets/img/team-4.jpg";
import lucy from "../../assets/img/ivana-squares.jpg";
import Richard from "../../assets/img/ivana-square.jpg";
import Miriam from "../../assets/img/kal-visuals-square.jpg";

import "./table.css";
import Footer from "../../components/footer/Footer";
import LefstNavBar from "../../components/leftSideNavBar/lefstNavBar";
import Setting from "../../components/Setting";
const Table = () => {
  return (
    <>
      <Setting />

      {/* <LefstNavBar /> */}

      <div className="container-fluid bodyActive Table_Active">
        <div className="TableTop">
          <div className="row">
            <div className="Table col-lg-12">
              <div className="TableTitle">
                <h5>Author Table</h5>
              </div>

              <ul className="Table_list_container Table  p-1 pt-5">
                <li className="TebleHeader">
                  <p>Author</p>
                  <p>Function</p>
                  <p>Status</p>
                  <p>Employed</p>
                </li>

                <hr className="Project_hr" />
                <li className="TablecontentContainer">
                  <div className="TableCompeny">
                    <img className="person" src={John} alt="logo" />
                    <div className="companyName_wrapper">
                      <h6>John Michael</h6>
                      <p>john@example.com</p>
                    </div>
                  </div>
                  <span className="functionNameContainer">
                    <span>Manager</span>
                    <span> Organization</span>
                  </span>
                  <p className="status online">online</p>
                  <p className="Employed d-flex flex-column">23/04/18</p>
                  <span className="ms-1 text-capitalize Employed edit">
                    edit
                  </span>
                </li>
                <hr className="Project_hr" />

                <li className="TablecontentContainer">
                  <div className="compeny">
                    <img className="person" src={Alexa} alt="logo" />
                    <div className="companyName_wrapper">
                      <h6>Alexa Liras</h6>
                      <p>alexa@example.com</p>
                    </div>
                  </div>
                  <span className="functionNameContainer">
                    <span>Programator</span>
                    <span>Developer</span>
                  </span>

                  <p className="status online">online</p>

                  <p className="Employed d-flex flex-column">11/01/19</p>
                  <span className="ms-1 text-capitalize Employed edit">
                    edit
                  </span>
                </li>
                <hr className="Project_hr" />

                <li className="TablecontentContainer">
                  <div className="compeny">
                    <img className="person" src={Laurent} alt="logo" />
                    <div className="companyName_wrapper">
                      <h6>Laurent Perrier</h6>
                      <p>laurent@example.com</p>
                    </div>
                  </div>
                  <span className="functionNameContainer">
                    <span>Executive</span>
                    <span>Projects</span>
                  </span>
                  <p className="status offline">offline</p>

                  <p className="Employed d-flex flex-column">27/08/18</p>
                  <span className="ms-1 text-capitalize Employed edit">
                    edit
                  </span>
                </li>
                <hr className="Project_hr" />

                <li className="TablecontentContainer">
                  <div className="compeny">
                    <img className="person" src={lucy} alt="logo" />
                    <div className="companyName_wrapper">
                      <h6> Lucy Levi</h6>
                      <p>michael@example.com</p>
                    </div>
                  </div>
                  <span className="functionNameContainer">
                    <span>Programator</span>
                    <span>Developer</span>
                  </span>
                  <p className="status online">online</p>

                  <p className="Employed d-flex flex-column">21/06/20</p>
                  <span className="ms-1 text-capitalize Employed edit">
                    edit
                  </span>
                </li>
                <hr className="Project_hr" />

                <li className="TablecontentContainer">
                  <div className="compeny">
                    <img className="person" src={Richard} alt="logo" />
                    <div className="companyName_wrapper">
                      <h6>Richard Gran</h6>
                      <p>richard@example.com</p>
                    </div>
                  </div>
                  <span className="functionNameContainer">
                    <span>Manager</span>
                    <span>Executive</span>
                  </span>
                  <p className="status offline">offline</p>
                  <p className="Employed d-flex flex-column">24/06/1</p>
                  <span className="ms-1 text-capitalize Employed edit">
                    edit
                  </span>
                </li>
                <hr className="Project_hr" />

                <li className="TablecontentContainer">
                  <div className="compeny">
                    <img className="person" src={Miriam} alt="logo" />
                    <div className="companyName_wrapper">
                      <h6>Miriam Eric</h6>
                      <p>miriam@example.com</p>
                    </div>
                  </div>
                  <span className="functionNameContainer">
                    <span>Programator</span>
                    <span>Developer</span>
                  </span>
                  <p className="status online">online</p>
                  <p className="Employed d-flex flex-column">29/02/9</p>
                  <span className="ms-1 text-capitalize Employed edit">
                    edit
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* second page */}
        <div className="row">
          <div className="ProjectTable col-12 ProjectsTable">
            <div className="TableTitle">
              <h5>Projuct Table</h5>
            </div>
            <ul className="project_list_container">
              <li className="TebleHeader">
                <p>Project</p>
                <p>Budget</p>
                <p>Status</p>
                <p>Completion</p>
              </li>

              <hr className="Project_hr" />
              <li className="ProjectsTableContent">
                <div className="compeny">
                  <img className="CompnyLogo" src={Asana} alt="logo" />
                  <h6>Asana</h6>
                </div>
                <div className="Budget">$2,500</div>
                <p className="buget">working</p>
                <p className="progrees_container d-flex flex-column">
                  <span className="percent">60%</span>
                  <span className="brogreesBarContainer">
                    <span className="brogreesBar one"></span>
                  </span>
                </p>
              </li>
              <hr className="Project_hr" />

              <li className="ProjectsTableContent">
                <div className="compeny">
                  <img className="CompnyLogo" src={gtiHb} alt="logo" />
                  <h6>Github</h6>
                </div>
                <div className="Budget">$2,500</div>

                <p className="buget">working</p>
                <p className="progrees_container d-flex flex-column">
                  <span className="percent">10%</span>
                  <span className="brogreesBarContainer">
                    <span className="brogreesBar tow"></span>
                  </span>
                </p>
              </li>
              <hr className="Project_hr" />

              <li className="ProjectsTableContent">
                <div className="compeny">
                  <img className="CompnyLogo" src={Atlassian} alt="logo" />
                  <h6>Atlassian</h6>
                </div>
                <div className="Budget">$2,500</div>

                <p className="buget">done</p>
                <p className="progrees_container d-flex flex-column">
                  <span className="percent">100%</span>
                  <span className="brogreesBarContainer">
                    <span className="brogreesBar three"></span>
                  </span>
                </p>
              </li>
              <hr className="Project_hr" />

              <li className="ProjectsTableContent">
                <div className="compeny">
                  <img className="CompnyLogo" src={Bootstrap} alt="logo" />
                  <h6>Bootstrap</h6>
                </div>
                <div className="Budget">$2,500</div>

                <p className="buget">done</p>

                <p className="progrees_container d-flex flex-column">
                  <span className="percent">100%</span>
                  <span className="brogreesBarContainer">
                    <span className="brogreesBar four"></span>
                  </span>
                </p>
              </li>
              <hr className="Project_hr" />

              <li className="ProjectsTableContent">
                <div className="compeny">
                  <img className="CompnyLogo" src={Slack} alt="logo" />
                  <h6>Slack</h6>
                </div>
                <div className="Budget">$2,500</div>

                <p className="buget">working</p>
                <p className="progrees_container d-flex flex-column">
                  <span className="percent">25%</span>
                  <span className="brogreesBarContainer">
                    <span className="brogreesBar five"></span>
                  </span>
                </p>
              </li>
              <hr className="Project_hr" />

              <li className="ProjectsTableContent">
                <div className="compeny">
                  <img className="CompnyLogo" src={Devto} alt="logo" />
                  <h6>Devto</h6>
                </div>
                <div className="Budget">$2,500</div>

                <p className="buget">working</p>
                <p className="progrees_container d-flex flex-column">
                  <span className="percent">40%</span>
                  <span className="brogreesBarContainer">
                    <span className="brogreesBar six"></span>
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Table;
