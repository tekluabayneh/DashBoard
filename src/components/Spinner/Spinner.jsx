import React from "react";
import { TailSpin } from "react-loader-spinner";

const Spinner = () => (
  <div
    style={{
      width: "100%",
      height: "100vh",
      background: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <TailSpin height="80" width="80" color="#4fa94d" ariaLabel="loading" />
  </div>
);

export default Spinner;
