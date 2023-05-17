import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdLocationPin } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiMailOpen } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";

const Footer: FC = () => {
  return (
    <div className="bg-[var(--color-idan)] p-6 md:px-[8rem]">
      {/* first big div  */}
      <div className="flex md:flex-row flex-col justify-between md:items-center mb-6  md:gap-6 ">
        {/* image  */}
        <div className="">
          <Image
            src="/images/logo.png"
            width={300}
            height={300}
            alt="logo "
            className="w-[8rem] h-[6rem] md:w-[14rem] md:h-[12rem]"
          />
        </div>
        {/* menu  */}
        <div className="">
          <ul className=" gap-4 cursor-pointer">
            <li>HOME</li>
            <Link href="#about">
              <li>ABOUT US</li>
            </Link>
            <li>SERVICES</li>
            <li>STORE</li>
            <li>CONTACT US</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 mt-5 ">
          <p className="flex items-center gap-2">
            <MdLocationPin className="text-[var(--color-primary)]" size={26} />{" "}
            It would be updated
          </p>
          <p className="flex items-center gap-2">
            <IoIosCall className="text-[var(--color-primary)]" size={26} />{" "}
            +1-562-396-1488
          </p>
          <p className="flex items-center gap-2">
            <HiMailOpen className="text-[var(--color-primary)]" size={26} />{" "}
            josephkz9@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <AiFillInstagram
              className="text-[var(--color-primary)]"
              size={26}
            />
            topgtowing
          </p>
        </div>
      </div>
      {/* second big div  */}
      <div className="text-[var(--color-text)] justify-start  ">
        <hr className="my-2" />
        <p>© 2023 T & S TOWING, All Rights Reserved.</p>
        <p>
          Disclaimer: T&S TOWING is a towing service provider. We connect you
          with professional towing operators in your area. Please note that T&S
          TOWING does not own or operate any roadside assistance services. It is
          the responsibility of each customer to verify that the service
          provider they are connected with meets all necessary licensing and
          insurance requirements as per their state regulations. The images
          shown are for illustrative purposes only and may not represent the
          towing services available in your specific region.
        </p>
      </div>
    </div>
  );
};

export default Footer;
