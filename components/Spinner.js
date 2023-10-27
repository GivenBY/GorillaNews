import React from "react";
import Loader from "./Loader.gif";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={Loader} alt="Loading" />
    </div>
  );
};

export default Spinner;
