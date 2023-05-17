'use client';
import { FC, useState } from 'react';
import Link from 'next/link';
import { CgMenuRight } from 'react-icons/cg';
import {
  RiCloseCircleFill,
  RiCustomerService2Fill,
  RiServiceFill,
} from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';
import { HiHome } from 'react-icons/hi';
import { GiTowTruck, GiCargoCrane } from 'react-icons/gi';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';

const NavBar: FC = ({}) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full bg-[var(--color-bg)] relative font-prompt ">
      <div className=" text-[var(--color-text)] flex py-4 items-center justify-between  w-[95%] mx-auto ">
        <h1 className=" leading-5 text-[var(--color-primary)]  text-2xl font-extrabold font-luckiest ">
          R&S <span className="block ">TOWING</span>
        </h1>
        <nav>
          <ul className="md:flex gap-4 hidden cursor-pointer">
            <li>HOME</li>
            <Link href="#about">
              <li>ABOUT US</li>
            </Link>
            <li>SERVICES</li>

            <li>STORE</li>
            <li>CONTACT US</li>
          </ul>
        </nav>
        <button className="md:flex hidden bg-[var(--color-primary)] px-4 py-2 rounded-xl text-[var(--color-bg)] gap-1 items-center">
          GET A QUOTE <BsArrowRight size={10} />
        </button>
        {/* menu button  */}
        <div onClick={handleNav} className="md:hidden">
          {!nav ? <CgMenuRight size={26} /> : <RiCloseCircleFill size={30} />}
        </div>
      </div>
      {/* small screen menu  */}
      <div
        className={
          nav
            ? 'md:hidden bg-[var(--color-text)] absolute p-6 items-center  left-[12.3rem] rounded-2xl ease-in-out duration-[1500ms] shadow-lg shadow-black z-40 '
            : 'fixed left-[-100%] '
        }
      >
        <nav>
          <ul className=" flex flex-col mt-2 gap-2 cursor-pointer ">
            <li className="flex items-center gap-4">
              <HiHome size={20} /> HOME
            </li>
            <li className="flex items-center gap-4">
              <GiTowTruck size={20} /> ABOUT US
            </li>
            <li className="flex items-center gap-4">
              <RiServiceFill size={20} /> SERVICES
            </li>
            <li className="flex items-center gap-4">
              <GiCargoCrane size={20} /> ROTATORS
            </li>
            <li className="flex items-center gap-4">
              <MdOutlineLocalGroceryStore size={20} /> STORE
            </li>
            <li className="flex items-center gap-4">
              <RiCustomerService2Fill size={20} /> CONTACT US
            </li>
          </ul>
        </nav>
        <button className="flex my-4  bg-[var(--color-primary)] px-4 py-2 rounded-xl text-[var(--color-bg)] gap-1 items-center">
          ORDER A TOW <GiTowTruck />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
