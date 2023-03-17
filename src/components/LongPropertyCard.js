import React from 'react'
import innercard1 from "../img/innercard1.svg";
import innercard2 from "../img/innercard2.svg";
import blackPin from "../img/blackPin.svg";
import bedroom from "../img/bedroom.svg";
import star from "../img/star.png";
import greyHeart from "../img/greyHeart.png";

function LongPropertyCard() {
  return (
    <>
        <div className="flex flex-col items-center justify-center my-2">
          <div className=" bg-white rounded-lg drop-shadow-l h-26 w-auto mx-auto pr-2 flex">
            <img src={innercard1} className="mx-2 my-2" alt="innercard1" />
            <div className="flex flex-col">
            {/* ----------------------------------------------------------------------- */}
            <div className="flex items-center justify-between w-[230px] mt-2.5">
              <div className="flex items-center">
              <p className="text-smm text-black">Devta Homes</p>
              </div>
              <div className="flex items-center justify-center">
              <p className="text-smm text-black">₹5000/month</p>
              </div>
            </div>
            {/* ---------------------------------------------------------------------------- */}
            
            {/* ----------------------------------------------------------------------- */}
            <div className="flex items-center justify-between w-[230px] my-1">
              <div className="flex items-center">
                <img src={blackPin} alt="blackPin" />
                <p className="text-l text-lightGrey pl-1">Rohini</p>
              </div>
              <div className="flex items-center justify-center">
                <img src={star} className="h-3 w-4" alt="" />
                <p className="text-base text-btnYellow font-normal pt-0.5 pl-1">
                  4.3
                </p>
              </div>
            </div>
            {/* ---------------------------------------------------------------------------- */}
            
            {/* ----------------------------------------------------------------------- */}
            <div className="flex items-center justify-between w-[230px]">
              <div className="flex items-center">
                <img src={bedroom} alt="bedroom" />
                <p className="text-l text-lightGrey pl-1 ">2 bedrooms</p>
              </div>
              <div className=" bg-[#f2f2f2] h-4 w-4 rounded-full mt-1 mr-1 flex justify-center items-center ">
              <img src={greyHeart} className="h-2 w-2" alt="like" />
            </div>
            </div>
            {/* ---------------------------------------------------------------------------- */}
            
            </div>
          </div>
        </div>
    </>
  )
}

export default LongPropertyCard