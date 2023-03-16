import React from "react";
import homecard from "../img/homecard.png";
import CountUp from "react-countup";

function HeroCards() {
  return (
    <>
      <div className="flex  w-auto justify-center items-center space-x-6 mt-[-20px]">
        <div class=" w-24 flex flex-col items-center justify-center rounded-xl drop-shadow-xl bg-boxWhite px-6 py-4 ">
          <img src={homecard} className="h-10 w-10 mb-2" alt="home" />
          <p className="text-xl text-darkGrey font-medium py-0">
            <CountUp start={300} end={450} duration={1.5} suffix="+"></CountUp>
          </p>
          <p className="text-lm text-lightGrey font-normal">Residences</p>
        </div>
        <div class=" w-24 flex flex-col items-center justify-center rounded-xl mx-2 drop-shadow-xl bg-boxWhite px-6 py-4 ">
          <img src={homecard} className="h-10 w-10 mb-2" alt="home" />
          <p className="text-xl text-darkGrey font-medium py-0">
            <CountUp start={300} end={120} duration={1.5} suffix="+"></CountUp>
          </p>
          <p className="text-lm text-lightGrey font-normal">Colleges</p>
        </div>
        <div class=" w-24 flex flex-col items-center justify-center rounded-xl mx-2 drop-shadow-xl bg-boxWhite px-4 py-4 ">
          <img src={homecard} className="h-10 w-10 mb-2" alt="home" />
          <p className="text-xl text-darkGrey font-medium ">
            <CountUp start={300} end={200} duration={1.5} suffix="+"></CountUp>
          </p>
          <p className="text-lm text-lightGrey font-normal ">Happy clients</p>
        </div>
      </div>
    </>
  );
}

export default HeroCards;
