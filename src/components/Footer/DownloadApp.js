import React from "react";
import { assets } from "../../assets/assets";

const DownloadApp = () => {
  return (
    <div id="app-download" className="flex flex-col items-center gap-10 mt-20">
      <p className="text-3xl text-center font-semibold">
        For Better Experience Download
        <br />
        Tomato App
      </p>
      <div className="flex gap-10">
        <img
          className="w-40 h-auto transition hover:scale-110 cursor-pointer"
          src={assets.app_store}
          alt=""
        />
        <img
          className="w-40 h-auto transition hover:scale-110 cursor-pointer"
          src={assets.play_store}
          alt=""
        />
      </div>
    </div>
  );
};

export default DownloadApp;
