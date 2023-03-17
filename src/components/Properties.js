import React from "react";
import LongPropertyCard from "./LongPropertyCard";
import PropertyCard from "./PropertyCard";
import rightArrow from "../img/rightArrow.png";


function Properties() {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-smm font-medium">Discover nearby properties</p>
        <div className="flex items-center mt-5">
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-smm font-medium mb-5">Top searches</p>
      <LongPropertyCard/>
      <LongPropertyCard/>
      <LongPropertyCard/>
      <LongPropertyCard/>
      </div>
      <button className="text-base font-normal rounded-lg border px-3 py-1 border-btnYellow text-btnYellow mt-6 flex items-center">
          View All <img src={rightArrow} className="ml-2" alt="arrow" />
        </button>
    </div>
    </>
  );
}

export default Properties;
