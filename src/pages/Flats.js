import React,{useState}from "react";
import locationPin from "../img/locationPin.png";
import playstore from "../img/playstore.svg";
import appstore from "../img/appstore.svg";
import search from "../img/search.svg";
import profile from "../img/profile.svg";
import message from "../img/message.svg";
import heart from "../img/heart.svg";
import home from "../img/home.svg";
import yellowHeart from "../img/yellowHeart.svg";
import blackPin from "../img/blackPin.svg";
import working from "../img/working.png";
import star from "../img/star.png";
import user from "../img/user.png";
import property1 from "../img/property1.png";
import property2 from "../img/property2.png";
import property3 from "../img/property3.png";
import arrow from "../img/arrow.png";
import rightArrow from "../img/rightArrow.png";
import HeroCards from "../components/HeroCards";
import ServicesCards from "../components/ServicesCards";
import CollectCards from "../components/CollectCards";

function Accordion({number,question,answer}){
    const [show, setShow] = useState(false)
    const handleArrow=(e)=>{
        setShow(!show)
        e.currentTarget.classList.toggle('rotate');
    }
return(
    <>
    <div className="h-auto w-80 mx-10 my-3 rounded-xl border border-faqGrey flex flex-col items-center justify-evenly ">
            <div className="flex items-center justify-evenly w-full py-3">
            <p className="text-m text-black">{number}</p>
            <p className="text-m text-black">{question}</p>
            <img src={arrow} alt="arrow" className="cursor-pointer" onClick={handleArrow} />
            </div>
            {show && <p className="text-m text-black px-5 pb-4 text-justify">{answer}</p>}
        </div>
</>
)
}


function Flats() {
    const [pgClick, setpgClick] = useState(false)
    const [flatClick, setflatClick] = useState(true)
    const handlePgClick=()=>{
       setpgClick(true)
       setflatClick(false)
    }
    const handleFlatClick=()=>{
        setflatClick(true)
        setpgClick(false)
    }
    
  return (
    <>
      {/* HERO-SECTION */}
      <div class={`${flatClick?'flatPic':'pgPic'} h-56 w-full`}>
        <div className="nav flex justify-between text-white">
          <button className="text-neutral-50 mt-4 ml-6 ">☰</button>
          <button className="text-neutral-50 text-sm font-medium px-2 py-0 mt-4 mr-6 rounded-2xl backdrop-blur-sm bg-gray-300 shadow-lg bg-opacity-20">
            List Property
          </button>
        </div>
        <div className="inner-div mt-2 flex-col flex justify-center items-center text-center text-white">
          <div className="text-div mb-5 ">
            <p className="text-lg font-medium">Find your next student home</p>
            <p className="text-base font-normal">
              A broker free student living solution
            </p>
          </div>
          <div>
            <button className={`text-l rounded px-4 py-0.5 mr-1.5 border-2 border-btnYellow ${flatClick?'bg-btnYellow':'backdrop-blur-sm  bg-gray-300 shadow-lg bg-opacity-20'}`} onClick={handleFlatClick}>
              Flats
            </button>
            <button className={`text-l rounded px-4 py-0.5 mr-1.5 border-2 border-btnYellow ${pgClick?'bg-btnYellow':'backdrop-blur-sm  bg-gray-300 shadow-lg bg-opacity-20'}`} onClick={handlePgClick}>
              PG Homes
            </button>
            
          </div>
          <div className="search-bar flex flex-row px-2 py-3 w-72 mt-1 rounded backdrop-blur-sm bg-gray-50 shadow-lg bg-opacity-20">
            <span>
              <img src={locationPin} className="pt-1 pl-2 " alt="locationPic" />
            </span>
            <span className="text-m px-3 font-normal">Delhi</span>
            <span>
              <img
                src={search}
                className="pt-0.5 px-2  border-gray-50 border-l"
                alt="search"
              />
            </span>
            <input
              type="text"
              className=" text-m bg-[transparent] placeholder-white font-normal w-auto"
              placeholder="Search by college"
            />
          </div>
        </div>
      </div>
      {/* END OF HERO SECTION */}

      {/* CARDS SECTION */}
        <HeroCards/>
      {/* END OF CARDS SECTION */}

      {/* SERVICES SECTION */}
      <div className="flex flex-col items-center justify-center mt-8">
        <p className="text-smm font-medium">Services For You</p>
        <p className="text-sm font-normal text-lightGrey">
          One-stop solution to all your home needs
        </p>
        {/* --------------------------------------------------------------------------------- */}
        <div className="flex w-auto justify-center items-center space-x-6 mt-6">
            <ServicesCards service={"Flats"} bg={"bg-services2"}/>
            <ServicesCards service={"PG Homes"} bg={"bg-services1"}/>
            <ServicesCards service={"Furnishing"} bg={"bg-services2"}/>
        </div>
        {/* ------------------------------------------------------------------------------- */}
        <div className="flex w-auto justify-center items-center space-x-6 mt-6">
            <ServicesCards service={"Cleaning"} bg={"bg-services1"}/>
            <ServicesCards service={"Kitchen Aid"} bg={"bg-services2"}/>
            <ServicesCards service={"Online Listing"} bg={"bg-services1"}/>
        </div>
        {/* ------------------------------------------------------------------------------------- */}
        <button className="text-base font-normal rounded-lg border px-4 py-2 border-btnYellow text-btnYellow mt-6 flex items-center">
          View All <img src={rightArrow} className="ml-2" alt="arrow" />
        </button>
      </div>
      {/* END OF SERVICES SECTION */}

      {/* BOOK SECTION */}
      <div className="flex flex-col items-center justify-center mt-8 mb-4">
        <p className="text-smm font-medium">Book your perfect home</p>
        <p className="text-sm font-normal text-lightGrey">
          Say goodbye to brokerage fees and endless searching
        </p>
      </div>
      {/* --------------------------------------------------------------------------------------------- */}
      <div className="h-auto w-auto flex items-center justify-center space-x-8 px-8">
        <div className=" h-[50%] w-[50%] flex flex-col items-center justify-center my-8">
          <img src={working} alt="" />
          <p className="text-l text-center font-medium mt-3 mb-2">No brokerage fees</p>
          <p className="text-sm text-center font-normal text-lightGrey">
            Save time and money without the interference of middleman and
            transparent pricing
          </p>
        </div>
        <div className="h-[50%] w-[50%] flex flex-col items-center justify-center">
          <img src={working} alt="" />
          <p className="text-l text-center font-medium mt-3 mb-2">
            Freedom and flexibility
          </p>
          <p className="text-sm text-center font-normal text-lightGrey">
            Live independently and make your own choices with no stress about
            owner's rules or restrictions
          </p>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------------------- */}
      <div className=" h-auto w-auto flex items-center justify-center space-x-8 px-8">
        <div className="h-[50%] w-[50%] flex flex-col items-center justify-center">
          <img src={working} alt="" />
          <p className="text-l text-center font-medium mt-3 mb-2">
            Freedom and flexibility
          </p>
          <p className="text-sm text-center font-normal text-lightGrey">
            Live independently and make your own choices with no stress about
            owner's rules or restrictions
          </p>
        </div>
        <div className="h-[50%] w-[50%] flex flex-col items-center justify-center">
          <img src={working} alt="" />
          <p className="text-l text-center font-medium mt-3 mb-2">No brokerage fees</p>
          <p className="text-sm text-center font-normal text-lightGrey">
            Save time and money without the interference of middleman and
            transparent pricing
          </p>
        </div>
      </div>
      {/* ----------------------------------------------------------------------------------------------------- */}

      {/* END OF BOOK SECTION */}

      {/* COLLECTION SECTION */}
      <div className="mb-12">
        <div className="flex flex-col items-center justify-center mt-8 mb-4">
          <p className="text-smm font-medium">
            Handpicked collection of Rental Flats
          </p>
        </div>
        {/* ------------------------------------------------------------------------------------- */}
        {flatClick && <div className="flex w-auto justify-center items-center space-x-6 mt-6">
          <CollectCards title={"Furnished"} img={"furnished-img"}/>
          <CollectCards title={"Readily Available"} img={"readilyAvailable-img"}/>
        </div>}
        {pgClick && <div className="flex w-auto justify-center items-center space-x-6 mt-6">
          <CollectCards title={"For Boys"} img={"boys-img"}/>
          <CollectCards title={"For Girls"} img={"girls-img"}/>
        </div>}
        {/* ------------------------------------------------------------------------------------------- */}
      </div>
      {/* END OF COLLECTION SECTION */}

      {/* WHAT THEY SAY SECTION */}
      <div className="main flex mx-10">
        <div className=" flex flex-col items-start justify-start w-[40%] h-auto mr-4">
          <p className="text-lg font-medium mb-5">What they say</p>
          <p className="text-sm font-normal text-lightGrey">
            Whether you're looking for a new home or just want to make a little
            renovations to your existing place, we'll make sure you find what
            you're looking for.
          </p>
          <div className="user-pics flex mt-4">
            <img src={user} className="" alt="user" />
            <img src={user} className="ml-[-8px]" alt="user" />
            <img src={user} className="ml-[-8px]" alt="user" />
            <div className=" bg-siteGrey rounded-full h-[29px] w-[29px] ml-[-8px]">
              <p className=" text-white text-sm flex justify-center pt-[30%] font-normal">
                50+
              </p>
            </div>
          </div>
          <button className="text-base font-normal rounded-lg border px-2 py-1 border-btnYellow text-btnYellow mt-6 flex items-center">
            Read More<img src={rightArrow} className="ml-2" alt="arrow" />
          </button>
        </div>
        <div className="relative w-[60%] flex flex-col">
          <div class="w-auto h-auto flex flex-col items-start justify-center border border-gray-300 rounded-xl drop-shadow-xl bg-boxWhite px-4 py-2 mb-2">
            <div className="user-outer flex space-x-14">
              <div className="username">
                <p className="text-base text-darkGrey font-medium py-0">
                  Urvi Suhane
                </p>
                <div className="stars flex">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <p className="text-ss pl-1 text-lightGrey font-normal">4.3</p>
                </div>
              </div>
              <div className="userpic mt-1">
                <img src={user} className="ml-[-8px]" alt="user" />
              </div>
            </div>
            <p className="text-lm mt-3 text-lightGrey font-normal italic">
              Monkhood living has been helpful in finding me the house I wanted.
              The owner is sweet. I got pretty much all the facilities under my
              budget. I will suggest to every student.
            </p>
          </div>
          {/* ------------------------------------------------------------------------------------ */}
          <div class="w-auto h-auto flex flex-col items-start justify-center border border-gray-300 rounded-xl box-shadow-md bg-boxWhite px-4 py-2 mb-2">
            <div className='absolute w-[165px] h-[150px] rounded-[10px] mt-[0px] ml-[-17px] bg-gradient-to-b from-transparent to-[#f5f5f5]'></div>
            <div className="user-outer flex space-x-14">
              <div className="username">
                <p className="text-base text-darkGrey font-medium py-0">
                  Urvi Suhane
                </p>
                <div className="stars flex">
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <img src={star} alt="star" />
                  <p className="text-ss pl-1 text-lightGrey font-normal">4.3</p>
                </div>
              </div>
              <div className="userpic mt-1">
                <img src={user} className="ml-[-8px]" alt="user" />
              </div>
            </div>
            <p className="text-lm mt-3 text-lightGrey font-normal">
              Monkhood living has been helpful in finding me the house I wanted.
              The owner is sweet. I got pretty much all the facilities under my
              budget. I will suggest to every student.
            </p>
          </div>
        </div>
      </div>
      {/* END OF WHAT THEY SAY SECTION */}

      {/* POST PROPERTY SECTION */}
      <div className="flex justify-center items-center">
      <div className=" bg-siteGrey h-28 w-[100%] mx-8 my-20 rounded-lg flex justify-center items-center ">
        <div className="w-[30%]">
          <img src={property1} alt="property1" className="ml-5 mb-2"/>
          <img src={property2} alt="property2" className="ml-2.5" />
        </div>
        <div className="w-[25%] ml-2">
          <img src={property3} alt="property3" />
        </div>
        <div className=" w-[50%] flex justify-start items-start flex-col">
          <p className="text-m  text-white text-left font-medium mb-4">
            Looking to sell or rent your property?
          </p>
          <button className="text-lm rounded px-4 py-2 mr-1.5 border border-btnYellow bg-transparent text-btnYellow">
            Post Property for FREE
          </button>
        </div>
      </div>
      </div>
      {/* END OF POST PROPERTY SECTION */}

      {/* FAQ SECTION */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-smm font-medium">FAQs</p>
        <p className="text-sm font-normal text-lightGrey">
        Do you have questions? It’s probably been answered
        </p>
      </div>
      {/* ------------------------------------------------------------------------------- */}
      <div className="flex flex-col items-center justify-center">
        <Accordion number={"01."} question={"Do you list houses in other cities?"} answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
        <Accordion number={"02."} question={"Do you list houses in other cities?"} answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
        <Accordion number={"03."} question={"Do you list houses in other cities?"} answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
        <Accordion number={"04."} question={"Do you list houses in other cities?"} answer={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
      </div>

      {/* END OF FAQ SECTION */}

      {/* IPHONE SECTION */}
      <div className="flex justify-center items-center">

        <div className="bg-iphone h-[280px] w-[240px] relative">
        <div className="bg-iphoneContent h-[230px] w-[108px] top-[35px] left-[67px] absolute"></div>
        </div>

        <div className="bg-white drop-shadow-xl h-[113px] w-[107px] rounded-lg absolute ml-40 mt-28 flex flex-col items-center justify-start">
            <div className="bg-innercard h-[72px] w-[93px] mt-2 flex justify-end relative">
                <div className="backdrop-blur-sm bg-gray-300 shadow-lg bg-opacity-20 h-4 w-4 rounded-full mt-1 mr-1 flex justify-center items-center " >
                    <img src={yellowHeart} alt="" />
                </div>
                <div className="backdrop-blur-sm bg-gray-300 shadow-lg bg-opacity-20 h-4 w-auto px-1 rounded-full bottom-1 left-1 absolute flex justify-center items-center " >
                    <p className="text-ss text-white">₹5000/month</p>
                </div>
            </div> 
            <div className="w-full ml-4 mt-1">
                <div className="flex flex-col">
                    <p className="text-lm text-black">Devta Homes</p> 
                </div>
                <div className="flex justify-between w-[90px]">
                    <div className="flex">
                    <img src={blackPin} alt="" />
                    <p className="text-ss text-lightGrey">Rohini</p>
                    </div>
                    <div className="flex items-end justify-center">
                    <img src={star} alt="" />
                    <p className="text-ss text-lightGrey font-normal">4.3</p>
                    </div>

                </div>

            </div>
        </div>

      </div>
      {/* -------------------------------------------------------------------------------------------------------- */}
      <div className="flex flex-col items-center justify-center mt-8">
        <p className="text-smm font-medium">Download our mobile app</p>
        <p className="text-sm font-normal px-16 text-center text-lightGrey">
        Visit your google play store and download our mobile app to keep searching for your perfect home.
        </p>
        <div className="flex mt-2 ">
            <img src={playstore} className="px-2" alt="" />
            <img src={appstore} alt="" />
        </div>
      </div>
      {/* END OF IPHONE SECTION */}

      {/* BOTTOM NAVBAR SECTION */}
      <div className="bg-white drop-shadow-2xl flex justify-evenly items-center justify-center h-16 w-full mt-5 rounded-t-lg">
        <div className="flex flex-col justify-center items-center">
        <img src={home} className="h-[32px] w-[26px]" alt="home" />
        <p className="text-base text-btnYellow ">Home</p>
        </div>
        <div className="flex flex-col justify-center items-center">
        <img src={heart} className="h-[32px] w-[26px]" alt="home" />
        <p className="text-base text-textGrey ">Saved</p>
        </div>
        <div className="flex flex-col justify-center items-center">
        <img src={message} className="h-[32px] w-[26px]" alt="home" />
        <p className="text-base text-textGrey ">Inbox</p>
        </div>
        <div className="flex flex-col justify-center items-center">
        <img src={profile} className="h-[32px] w-[26px]" alt="home" />
        <p className="text-base text-textGrey ">Profile</p>
        </div>
      </div>
      {/* END OF BOTTOM NAVBAR SECTION */}
    </>
  );
}

export default Flats;
