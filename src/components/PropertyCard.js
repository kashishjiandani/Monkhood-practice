import React from 'react'
import yellowHeart from "../img/yellowHeart.svg";
import blackPin from "../img/blackPin.svg";
import star from "../img/star.png";

function PropertyCard() {
  return (
    <>
    <div className="bg-white drop-shadow-xl h-[165px] w-[155px] rounded-lg flex flex-col items-center justify-start mx-2">
          <div className="bg-innercardBig1 h-[105px] w-[137px] mt-2 flex justify-end relative">
            <div className="backdrop-blur-sm bg-gray-300 shadow-lg bg-opacity-20 h-6 w-6 rounded-full mt-1 mr-1 flex justify-center items-center ">
              <img src={yellowHeart} className="h-3 w-3" alt="like" />
            </div>
            <div className="backdrop-blur-sm bg-gray-300 shadow-lg bg-opacity-20 h-5 w-auto px-2 rounded-full bottom-1 left-1 absolute flex justify-center items-center ">
              <p className="text-base text-white">₹5000/month</p>
            </div>
          </div>
          <div className="w-full ml-5 mt-2">
            <div className="flex flex-col">
              <p className="text-l text-black">Devta Homes</p>
            </div>
            <div className="flex justify-between w-[130px]">
              <div className="flex">
                <img src={blackPin} alt="" />
                <p className="text-base text-lightGrey pl-1 pt-0.5">Rohini</p>
              </div>
              <div className="flex items-center justify-center ">
                <img src={star} className="h-3 w-4" alt="" />
                <p className="text-base text-btnYellow font-normal pt-0.5">4.3</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default PropertyCard