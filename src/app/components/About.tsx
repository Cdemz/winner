"use client";
import { useEffect } from "react";
import { FC } from "react";
import Image from "next/image";
import { MdAccessTimeFilled } from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaCarCrash, FaUsers } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About: FC = () => {
  useEffect(() => {
    AOS.init({ delay: 200, duration: 1500, once: false });
    AOS.refresh();
  }, []);
  return (
    <div className=" font-prompt " id="about">
      {/* first box  */}
      <div className="px-4 py-8 md:px-[8rem] md:py-10 flex md:flex-row justify-between bg-[var(--color-bg)] text-[var(--color-text)] flex-col md:gap-6">
        <div className="">
          <Image
            src="/images/about-img.png"
            alt="a truck image"
            width={300}
            height={300}
            priority={true}
            className="w-[100%] h-full"
          />
        </div>
        <div className="md:w-[50%] mt-2 md:mt-0">
          <div className="">
            <h1 className="text-2xl font-bold">ABOUT US</h1>
            <div className="w-[4rem] h-1 bg-[var(--color-primary)] rounded "></div>
          </div>
          <p>
            Looking for a reliable towing company? Look no further! Our towing
            service provides fast and professional assistance whenever you need
            it. Our team of experienced professionals is available 24/7 to help
            you with any towing needs, whether it's a flat tire, engine failure,
            or an accident. We offer competitive prices and quick response
            times, ensuring that you're never left stranded on the side of the
            road. Contact us today for all your towing needs!!
          </p>
        </div>
      </div>
      {/* second box  */}
      <div className="relative">
        <div className="w-full md:h-[15rem] h-[26rem] ">
          <Image
            data-aos="flip-right"
            src="/images/idan-bg.png"
            alt="pick up ground"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-black absolute top-0 h-full w-full bg-opacity-50 flex flex-wrap justify-between px-[4rem] items-center ">
          {/* years of experience  */}
          <div className="w-1/2 md:w-1/4 flex-grow p-4 justify-center text-center items-center md:border-r-2  md:border-[var(--color-bg)] md:h-[8rem]  px-4">
            <div className="bg-[var(--color-primary)] text-[var(--color-bg)] h-[5rem]  w-[5rem] flex justify-center rounded-[6rem] items-center mx-auto mb-2   ">
              <MdAccessTimeFilled size={30} />
            </div>
            <h1>15</h1>
            <p>Years Of Experience</p>
          </div>
          {/* number of offices  */}
          <div className="w-1/2 md:w-1/4 flex-grow p-4 justify-center text-center items-center  md:border-r-2  md:border-[var(--color-bg)] md:h-[8rem]  px-4   ">
            <div className="bg-[var(--color-primary)] text-[var(--color-bg)] h-[5rem] w-[5rem] flex justify-center rounded-[6rem] items-center mx-auto mb-2  ">
              <HiOutlineOfficeBuilding size={30} />
            </div>
            <h1>3</h1>
            <p>Office in US</p>
          </div>
          {/* number of vehicles towed  */}
          <div className="w-1/2 md:w-1/4 flex-grow p-4 justify-center text-center items-center md:border-r-2  md:border-[var(--color-bg)] md:h-[8rem]  px-4">
            <div className="bg-[var(--color-primary)] text-[var(--color-bg)] h-[5rem] w-[5rem] flex justify-center rounded-[6rem] items-center mx-auto mb-2   ">
              <FaCarCrash size={30} />
            </div>
            <h1>2583</h1>
            <p>Vehicles Towed</p>
          </div>
          {/* number of worker */}
          <div className="w-1/2 md:w-1/4 flex-grow p-4 justify-center text-center items-center md:border-r-2  md:border-[var(--color-bg)] md:h-[8rem]  px-4">
            <div className="bg-[var(--color-primary)] text-[var(--color-bg)] h-[5rem] w-[5rem] flex justify-center rounded-[6rem] items-center mx-auto mb-2   ">
              <FaUsers size={30} />
            </div>
            <h1>20</h1>
            <p>Workers in Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
