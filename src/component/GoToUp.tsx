import React from "react";

export default function GoToUp({ showBtn, topFunction }:any) {
  return (
    <button
      onClick={topFunction}
      id="myBtn"
      className={showBtn}
      title="Go to top"
    >
      <img src="assets/arrow-up.svg" alt="Go to Top" />
    </button>
  );
}
