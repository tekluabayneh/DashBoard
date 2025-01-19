import React, { useEffect, useState } from "react";
import RightSideSetting from "./RightSaideSetting/RightSideSetting";
import Header from "./header/Header";

const Setting = () => {
  const [isactive, setisactive] = useState(false);

  const handeleSettingOpen = () => {
    setisactive((prev) => !prev);
  };

  const handeleSettingClose = () => {
    setisactive(false);
  };

  return (
    <>
      <div onClick={handeleSettingOpen} className="Setting">
        <i className="material-symbols-rounded fixed-plugin-button-nav">
          settings
        </i>
      </div>
      <RightSideSetting
        isactive={isactive}
        handeleSettingClose={handeleSettingClose}
      />
      <Header handeleSettingOpen={handeleSettingOpen} />
    </>
  );
};

export default Setting;
