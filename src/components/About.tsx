import React from "react";

export default function About() {
  return (
    <section
      className="h-screen  text-white md:p-12 max-w-[1440px] mx-auto"
      id="about"
    >
      <div className="h-full flex flex-col md:justify-between gap-16 md:gap-0 py-20 md:py-0 items-center lg:flex-row ">
        <div className="md:px-40 lg:px-0  ">
          <img
            src="assets/7.png"
            alt="Fox Image"
            className="w-72 md:w-96 lg:w-[500px]"
          />
        </div>
        <p className="text-xl p-6 lg:h-full lg:pt-20">
          The Dogs and Frogs have had their day, it’s time for Foxes to take
          reign.
        </p>
      </div>
    </section>
  );
}
