import React from "react";
import logoxd from "../../assets/img/small-logos/logo-xd.svg";
import spotyfy from "../../assets/img/small-logos/logo-spotify.svg";
import logoslack from "../../assets/img/small-logos/logo-slack.svg";
import logojira from "../../assets/img/small-logos/logo-jira.svg";
import logoinvision from "../../assets/img/small-logos/logo-invision.svg";
import logoatlassian from "../../assets/img/small-logos/logo-atlassian.svg";
import logoasana from "../../assets/img/small-logos/logo-spotify.svg";
import { Line, Bar } from "react-chartjs-2";
import img from "../../assets/img/team-2.jpg";
import team2 from "../../assets/img/team-2.jpg";
import team3 from "../../assets/img/team-3.jpg";
import team4 from "../../assets/img/team-4.jpg";
import team5 from "../../assets/img/team-5.jpg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Chart,
} from "chart.js";

// registerng to the Chrtjs modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);
const Charts = () => {
  let dataBar = {
    type: "line",

    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [
      {
        label: "view",
        data: [85, 89, 12, 22, 56, 34, 86],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "#37AFE1",
        borderWidth: 1,
        tension: 0.7,
        borderRadius: 5,
      },
    ],
  };

  // data of Line chart
  let dataLine = {
    type: "sales",

    labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    datasets: [
      {
        label: " Sales",
        data: [85, 29, 90, 22, 56, 34, 86, 156, 23, 89, 56, 234],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "#37AFE1",
        borderWidth: 1,
        tension: 0.1,
        borderRadius: 5,
      },
    ],
  };

  let DataTask = {
    type: "line",
    labels: ["Apr", "Jun", "Aug", "Oct", "Des"],

    datasets: [
      {
        label: "Task",
        data: [12, 12, 45, 23, 67],
        backgroundColor: "#37AFE1",
        borderColor: "#37AFE1",
        borderWidth: 1,
        tension: 0.1,
      },
    ],
  };

  let option = {
    responsive: true,

    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        gird: {
          beginAtZero: true,
        },
      },
    },
  };
  return (
    <>
      <div className="row ms-1 bodyActive">
        <div className="chart col-lg-4 col-md-6 mt-4 mb-4">
          <div className="card">
            <div className="card_header">
              <h6 className="text-body-teritory fw-bold">Website Views</h6>
              <p>Last Campaign Performance</p>
            </div>
            <Bar data={dataBar} options={option} />
            <div className="card_body"></div>
            <div className="card_fotter d-flex gap-1 align-items-center">
              <i className="material-symbols-rounded text-sm my-auto me-1">
                schedule
              </i>
              <p>campaign sent 2 days ago</p>
            </div>
          </div>
        </div>

        <div className="chart col-lg-4 col-md-6 mt-4 mb-4">
          <div className="card">
            <div className="card_header">
              <h6 className="text-body-teritory fw-bold">Daily Sales</h6>
              <p>(+15%) increase in today sales</p>
            </div>
            <div className="card_body">
              <Line data={dataLine} options={option} />
            </div>
            <div className="card_fotter d-flex gap-1 align-items-center">
              <i className="material-symbols-rounded text-sm my-auto me-1">
                schedule
              </i>
              <p>updated 4 min ago</p>
            </div>
          </div>
        </div>

        <div className="chart col-lg-4 col-md-6 mt-4 mb-4">
          <div className="card">
            <div className="card_header">
              <h6 className="text-body-teritory fw-bold">Completed Tasks</h6>
              <p>Last Campaign Performance</p>
            </div>

            <div className="card_body">
              <Line data={DataTask} options={option} />{" "}
            </div>
            <div className="card_fotter">
              <i className="material-symbols-rounded text-sm my-auto me-1">
                schedule
              </i>

              <p>just updated</p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects and Orders overview container */}
      <div className="container-fluid">
        <div className="row ms-1">
          <div className="Project col-lg-8 col-md-8 col-sm-12">
            <h5>Projects</h5>
            <p className="subtitle">30 done this month</p>

            <ul className="project_list_container card p-1">
              <li className="project_header">
                <span>Companies</span>
                <span> Members</span>
                <span>Budget</span>
                <span>Completion</span>
              </li>

              <hr className="Project_hr" />
              <li className="contentContainer">
                <div className="compeny">
                  <img className="CompnyLogo" src={logoxd} alt="logo" />
                  <h6>Material XD Version</h6>
                </div>
                <span className="img_container">
                  <img src={team2} alt="img" />
                  <img src={team3} alt="img" />
                  <img src={team4} alt="img" />
                  <img src={team5} alt="img" />
                </span>
                <p className="buget">$14,000</p>
                <p className="progrees_container d-flex flex-column">
                  <span className="percent">60%</span>
                  <span className="brogreesBarContainer">
                    <span className="brogreesBar one"></span>
                  </span>
                </p>
              </li>
              <hr className="Project_hr" />

              <li className="contentContainer">
                <div className="compeny">
                  <img className="CompnyLogo" src={logoatlassian} alt="logo" />
                  <h6>Add Progress Track</h6>
                </div>
                <span className="img_container">
                  <img src={team5} alt="img" />
                  <img src={team4} alt="img" />
                  <img src={img} alt="img" />
                </span>
                <p className="buget">$3,000</p>
                <p className="progrees_container d-flex flex-column">
                  <span className="percent">10%</span>
                  <span className="brogreesBarContainer">
                    <span className="brogreesBar tow"></span>
                  </span>
                </p>
              </li>
              <hr className="Project_hr" />

              <li className="contentContainer">
                <div className="compeny">
                  <img className="CompnyLogo" src={logoslack} alt="logo" />
                  <h6>Fix Platform Errors</h6>
                </div>
                <span className="img_container">
                  <img src={team5} alt="img" />
                </span>
                <p className="buget">Not set</p>
                <p className="progrees_container d-flex flex-column">
                  <span className="percent">100%</span>
                  <span className="brogreesBarContainer">
                    <span className="brogreesBar three"></span>
                  </span>
                </p>
              </li>
              <hr className="Project_hr" />

              <li className="contentContainer">
                <div className="compeny">
                  <img className="CompnyLogo" src={logoasana} alt="logo" />
                  <h6>Launch our Mobile App</h6>
                </div>
                <span className="img_container">
                  <img src={team5} alt="img" />

                  <img src={team2} alt="img" />
                </span>
                <p className="buget">$20,500</p>

                <p className="progrees_container d-flex flex-column">
                  <span className="percent">100%</span>
                  <span className="brogreesBarContainer">
                    <span className="brogreesBar four"></span>
                  </span>
                </p>
              </li>
              <hr className="Project_hr" />

              <li className="contentContainer">
                <div className="compeny">
                  <img className="CompnyLogo" src={logojira} alt="logo" />
                  <h6>Add the New Pricing Page</h6>
                </div>
                <span className="img_container">
                  <img src={team2} alt="img" />
                  <img src={team3} alt="img" />
                </span>
                <p className="buget">$500</p>
                <p className="progrees_container d-flex flex-column">
                  <span className="percent">25%</span>
                  <span className="brogreesBarContainer">
                    <span className="brogreesBar five"></span>
                  </span>
                </p>
              </li>
              <hr className="Project_hr" />

              <li className="contentContainer">
                <div className="compeny">
                  <img className="CompnyLogo" src={logoinvision} alt="logo" />
                  <h6>Redesign New Online Shop</h6>
                </div>
                <span className="img_container">
                  <img src={team2} alt="img" />
                  <img src={team3} alt="img" />
                  <img src={team4} alt="img" />
                </span>
                <p className="buget">$2,000</p>
                <p className="progrees_container d-flex flex-column">
                  <span className="percent">40%</span>
                  <span className="brogreesBarContainer">
                    <span className="brogreesBar six"></span>
                  </span>
                </p>
              </li>
            </ul>
          </div>

          <div className="overViewContainer col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header pb-0">
                <h6>Orders overview</h6>
                <p className="text-sm">
                  <i
                    className="fa fa-arrow-up text-success"
                    aria-hidden="true"
                  ></i>
                  <span className="font-weight-bold">24%</span> this month
                </p>
              </div>
              <div className="card-body">
                <div className="timeline timeline-one-side">
                  <div className="timeline-block mb-3">
                    <span className="timeline-step">
                      <i className="material-symbols-rounded text-success text-gradient">
                        notifications
                      </i>
                    </span>
                    <div className="timeline-content">
                      <h6 className="lan mb-0">$2400, Design changes</h6>
                      <p className="text-secondary  mt-1 mb-0">
                        22 DEC 7:20 PM
                      </p>
                    </div>
                  </div>
                  <div className="timeline-block mb-3">
                    <span className="timeline-step">
                      <i className="material-symbols-rounded text-danger text-gradient">
                        code
                      </i>
                    </span>
                    <div className="timeline-content">
                      <h6 className="ext-sm font-weight-bold mb-0">
                        New order #1832412
                      </h6>
                      <p className="text-secondary  mt-1 mb-0">21 DEC 11 PM</p>
                    </div>
                  </div>
                  <div className="timeline-block mb-3">
                    <span className="timeline-step">
                      <i className="material-symbols-rounded text-info text-gradient">
                        shopping_cart
                      </i>
                    </span>
                    <div className="timeline-content">
                      <h6 className="mb-0">Server payments for April</h6>
                      <p className="text-secondary  mt-1 mb-0">
                        21 DEC 9:34 PM
                      </p>
                    </div>
                  </div>
                  <div className="timeline-block mb-3">
                    <span className="timeline-step">
                      <i className="material-symbols-rounded text-warning text-gradient">
                        credit_card
                      </i>
                    </span>
                    <div className="timeline-content">
                      <h6 className="mb-0">
                        New card added for order #4395133
                      </h6>
                      <p className="text-secondary mt-1 mb-0">20 DEC 2:20 AM</p>
                    </div>
                  </div>
                  <div className="timeline-block mb-3">
                    <span className="timeline-step">
                      <i className="material-symbols-rounded text-primary text-gradient">
                        key
                      </i>
                    </span>
                    <div className="timeline-content">
                      <h6 className="mb-0">Unlock packages for development</h6>
                      <p className="text-secondary  mt-1 mb-0">
                        18 DEC 4:54 AM
                      </p>
                    </div>
                  </div>
                  <div className="timeline-block">
                    <span className="timeline-step">
                      <i className="material-symbols-rounded ext-gradient">
                        payments
                      </i>
                    </span>
                    <div className="timeline-content">
                      <h6 className="b-0">New order #9583120</h6>
                      <p className="text-secondary  mt-1 mb-0">17 DEC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Charts;
