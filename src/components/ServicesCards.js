import React from "react";

function ServicesCards({bg,service}) {
  return (
    <>
      <div className={`${bg} h-20 w-20 flex items-center justify-center pt-14`}>
        <p className="text-lm text-white ">{service}</p>
      </div>
    </>
  );
}

export default ServicesCards;
