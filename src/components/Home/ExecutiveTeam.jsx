import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { TiArrowRight } from 'react-icons/ti';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import BC from "./assets/Branch_C.jpeg";
import BCbg from "./assets/Branch_Cbg.png";
import Bharatesh from "./assets/Bharatesh_B.jpg";
import Bharateshbg from "./assets/Bharatesh_Bbg.png";
import Sangamesh from "./assets/Sangamesh_K.jpg";
import Sangameshbg from "./assets/Sangamesh_Kbg.png";
import Swayam from "./assets/Swayam_N.jpg";
import Swayambg from "./assets/Swayam_Nbg.png";
import Panchakshari from "./assets/Panchakshari_J.jpg";
import Panchaksharibg from "./assets/Panchakshari_Jbg.png";

const ExecutiveTeam = () => {
  const [navigate, setNavigate] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": function() {
          const t1 = gsap.timeline({
            scrollTrigger: {
              trigger: ".ExecutiveTeam",
              start: "top 80%",
              end: "top 20%",
              scrub: 2,
            },
          });

          const animeClasses = [".anime1", ".anime2", ".anime3", ".anime4", ".anime5"];
          animeClasses.forEach((animeClass) => {
            t1.to(animeClass, { opacity: 1 });
          });

          const t2 = gsap.timeline({
            scrollTrigger: {
              trigger: ".ExecutiveTeam",
              start: "top top",
              end: "bottom -100%",
              scrub: 2,
              pin: ".pin-wrapper",
            },
          });

          t2.fromTo(
            [".mem1", ".title1", ".img1", ".mem2", ".title2", ".img2", ".mem3", ".title3", ".img3", ".mem4", ".title4", ".img4", ".mem5", ".title5", ".img5"],
            { y: 500, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
          );
        },
      });
    });

    return () => ctx.revert();
  }, []);



  if (navigate) {
    return <Navigate to="/execoms" />;
  }

  return (
    <>
      <div className="ExecutiveTeam h-fit max-w-[90rem] mx-auto">
      <div className="pin-wrapper lg:px-5 sm:px-8 px-5 mt-10 pt-10">
        <div className="lg:h-[33vmin] h-fit flex items-center">
          <div className="xl:w-[55%] lg:w-[48%] w-full">
            <h1 className="anime1 xl:text-[3.62rem] lg:text-5xl md:text-6xl sm:text-5xl text-3xl font-bold opacity-0">
              THE BEC-IEEE EXECUTIVE TEAM
            </h1>
            <h1 className="anime2 xl:text-[3.62rem] lg:text-5xl md:text-6xl sm:text-5xl text-3xl font-thin opacity-0">
              YOU'VE BEEN
            </h1>
            <h1 className="anime3 xl:text-[3.62rem] lg:text-5xl md:text-6xl sm:text-5xl text-3xl font-thin opacity-0">
              LOOKING FOR
            </h1>
          </div>
          <div className="xl:w-[45%] lg:w-[52%] hidden lg:block pl-20 text-justify">
            <p className="anime4 lg:text-sm opacity-0">
              Our executive team is the backbone of our branch, leading with
              passion, innovation, and a relentless commitment to excellence.
              Each member plays a vital role in driving our vision forward,
              fostering a culture of collaboration and growth. Curious to know
              who’s behind the success stories and groundbreaking initiatives?
              Dive deeper and discover the brilliant minds shaping our journey!
            </p>
            <button 
              className="anime5 group bg-white text-black rounded-full px-5 py-3 font-bold flex justify-center items-center gap-2 mt-5 opacity-0"
              onClick={() => setNavigate(true)}
            >
              MEET OUR EXECOM
              <TiArrowRight className="text-3xl group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        <div className="execoms w-full xl:h-[67vmin] lg:h-[90vmin] hidden lg:flex justify-center items-end pb-8">

          <div className="mem1 xl:w-[20%] lg:w-[25%] h-[95%] bg-[#F4A261] rounded-full flex flex-col items-center pt-8 overflow-hidden">
            <div className="title1 px-4">
              <h1 className="text-center text-xl font-bold text-black">
                Dr. Sangamesh .Y. G
              </h1>
              <h1 className="text-center text-lg text-black">
                Branch Counselor
              </h1>
            </div>
            <img src={BCbg} className="img1 w-full mt-auto mb-8" alt="image" />
          </div>

          <div className="mem2 xl:w-[20%] lg:w-[25%] h-[85%] bg-[#CBD5D4] rounded-full flex flex-col items-center pt-8 -ml-4 overflow-hidden">
            <div className="title2 px-4">
              <h1 className="text-center text-2xl font-bold text-black">
                Bharatesh K
              </h1>
              <h1 className="text-center text-lg text-black">Chairperson</h1>
            </div>
            <img src={Bharateshbg} className="img2 w-full mt-auto" alt="image" />
          </div>

          <div className="mem3 xl:w-[20%] lg:w-[25%] h-[80%] bg-[#E4DBD2] rounded-full flex flex-col items-center pt-8 -ml-4 overflow-hidden">
            <div className="title3 px-4">
              <h1 className="text-center text-2xl font-bold text-black">
                Sangamesh K
              </h1>
              <h1 className="text-center text-lg text-black">
                Vice Chairperson
              </h1>
            </div>
            <img src={Sangameshbg} className="img3 w-full mt-auto" alt="image" />
          </div>

          <div className="mem4 xl:w-[20%] lg:w-[27%] h-[90%] bg-[#FFC931] rounded-full flex flex-col items-center pt-8 -ml-4 overflow-hidden">
            <div className="title4 px-4 mt-4">
              <h1 className="text-center text-xl font-bold text-black">
                Swayam N
              </h1>
              <h1 className="text-center text-lg text-black">Secretary</h1>
            </div>
            <img src={Swayambg} className="img4 w-full mt-auto" alt="image" />
          </div>

          <div className="mem5 xl:w-[20%] hidden h-[70%] bg-[#FEB9CE] rounded-full xl:flex flex-col items-center pt-8 -ml-4 overflow-hidden">
            <div className="title5 px-4">
              <h1 className="text-center text-2xl font-bold text-black">
                Panchakshari J
              </h1>
              <h1 className="text-center text-lg text-black">Treasurer</h1>
            </div>
            <img src={Panchaksharibg} className="img5 w-full mt-auto" alt="image" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:hidden gap-6 place-items-center mt-16">

          <div className="bg-gray-200 rounded-md h-48 w-40 sm:h-64 sm:w-56 flex flex-col justify-end items-center border-4 border-zinc-700" style={{backgroundImage: `url(${BCbg})`, backgroundSize: 'cover'}}>
            <div className="bg-black w-full text-center rounded-b-md">
              <h2 className="text-sm sm:text-base font-semibold">Dr. Sangamesh .Y. G</h2>
              <p className="text-sm">Branch Counselor</p>
            </div>
          </div>

          <div className="bg-gray-200 rounded-md h-48 w-40 sm:h-64 sm:w-56 flex flex-col justify-end items-center border-4 border-zinc-700" style={{backgroundImage: `url(${Bharateshbg})`, backgroundSize: 'cover'}}>
            <div className="bg-black w-full text-center rounded-b-md">
              <h2 className="text-md font-semibold">Bharatesh K</h2>
              <p className="text-sm">Chairperson</p>
            </div>
          </div>

          <div className="bg-gray-200 rounded-md h-48 w-40 sm:h-64 sm:w-56 flex flex-col justify-end items-center border-4 border-zinc-700" style={{backgroundImage: `url(${Sangameshbg})`, backgroundSize: 'cover'}}>
            <div className="bg-black w-full text-center rounded-b-md">
              <h2 className="text-md font-semibold">Sangamesh K</h2>
              <p className="text-sm">Vice Chairperson</p>
            </div>
          </div>

          <div className="bg-gray-200 rounded-md h-48 w-40 sm:h-64 sm:w-56 flex flex-col justify-end items-center border-4 border-zinc-700" style={{backgroundImage: `url(${Swayambg})`, backgroundSize: 'cover'}}>
            <div className="bg-black w-full text-center rounded-b-md">
              <h2 className="text-md font-semibold">Swayam N</h2>
              <p className="text-sm">Secretary</p>
            </div>
          </div>

          <div className="bg-gray-200 rounded-md h-48 w-40 sm:h-64 sm:w-56 flex flex-col justify-end items-center border-4 border-zinc-700" style={{backgroundImage: `url(${Panchaksharibg})`, backgroundSize: 'cover', backgroundPosition: 'right'}}>
            <div className="bg-black w-full text-center rounded-b-md">
              <h2 className="text-md font-semibold">Panchashari J</h2>
              <p className="text-sm">Treasurer</p>
            </div>
          </div>



        </div>

        <div className="lg:hidden w-full px-5 sm:text-justify mt-10">
            <p className="anime4 lg:text-sm opacity-0">
              Our executive team is the backbone of our branch, leading with
              passion, innovation, and a relentless commitment to excellence.
              Each member plays a vital role in driving our vision forward,
              fostering a culture of collaboration and growth. Curious to know
              who’s behind the success stories and groundbreaking initiatives?
              Dive deeper and discover the brilliant minds shaping our journey!
            </p>
            <button 
              className="anime5 group bg-white text-black rounded-full px-5 py-3 font-bold flex justify-center items-center gap-2 mt-5 opacity-0"
              onClick={() => setNavigate(true)}
            >
              MEET OUR EXECOM
              <TiArrowRight className="text-3xl  group-hover:opacity-100 transition-opacity duration-300" />
            </button>
        </div>

      </div>
      </div>
    </>
  );
};

export default ExecutiveTeam;
