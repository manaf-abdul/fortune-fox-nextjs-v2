import React from "react";

export default function FoxGallery() {
  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="flex items-end justify-center overflow-x-auto pt-24">
        <img
          src="assets/3.png"
          alt=""
          width="300px"
          className="w-1/2 max-w-1/2 md:w-1/4 -mx-1 h-auto"
        />
        <img
          src="assets/16.png"
          alt=""
          width="300px"
          className="w-1/2 max-w-1/2 md:w-1/4 -mx-1 h-auto"
        />
        <img
          src="assets/14.png"
          alt=""
          width="300px"
          className="w-1/2 max-w-1/2 md:w-1/4 -mx-1 h-auto"
        />
        <img
          src="assets/6.png"
          alt=""
          width="300px"
          className="w-1/2 max-w-1/2 md:w-1/4 -mx-1 h-auto"
        />
      </div>
    </section>
  );
}
