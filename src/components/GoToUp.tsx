import React from "react";

interface GoToUpProps {
  showBtn: string;
  topFunction: () => void;
  // topFunction: (data: any) => string | undefined;
}

export default function GoToUp({ showBtn, topFunction }: GoToUpProps) {
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
