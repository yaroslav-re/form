import React from "react";
import { Link } from "react-router-dom";

export const Experience = () => {
  return (
    <div className="bg-[url('/src/assets/rainbow.jpg')] bg-cover w-screen h-screen">
      <section
        className="h-1/2 w-1/4 bg-white/50 m-auto translate-y-[30%] flex 
      flex-col items-center justify-evenly rounded-[20px] shadow-xl min-w-[350px] p-4 min-h-[400px]"
      >
        <h1 className="text-3xl font-bold text-center">
          How much Project Experience do you have?
        </h1>
        <div className="w-full flex w-4/5 min-w-[350px]">
          <Link
            to="/money"
            className="bg-sky-200 py-4 border m-auto w-1/3 text-center text-xl font-semibold"
          >
            I'm new
          </Link>
          <Link
            to="/money"
            className="bg-sky-200 py-4 border m-auto w-1/3 text-center text-xl font-semibold"
          >
            2-4 years
          </Link>
        </div>
        <div className="w-full flex w-4/5 min-w-[350px]">
          <Link
            to="/money"
            className="bg-sky-200 py-4 border m-auto w-1/3 text-center text-xl font-semibold"
          >
            5+ years
          </Link>
          <Link
            to="/money"
            className="bg-sky-200 py-4 border m-auto w-1/3 text-center text-xl font-semibold"
          >
            10+ years
          </Link>
        </div>
      </section>
    </div>
  );
};
