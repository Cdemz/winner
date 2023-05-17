import { FC } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { MdCall } from 'react-icons/md';
import { BsInstagram, BsGoogle, BsTwitter } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { RiFacebookFill } from 'react-icons/ri';

const TopNav: FC = () => {
  return (
    <div className="bg-[var(--color-idan)] h-8 p-2 flex   justify-around">
      <div className="flex gap-2 text-[10px] md:text-sm ">
        <p className="flex items-center">
          <MdCall className="text-[var(--color-primary)] mr-1" /> 865-438-5984
        </p>
        <p className="flex items-center">
          <HiMail className="text-[var(--color-primary)] mr-1" />{' '}
          rnstowingservice@gmail.com
        </p>
        <p className="flex items-center">
          <BiTimeFive className="text-[var(--color-primary)] mr-1" />
          Open 24hours
        </p>
      </div>
      {/* icons  */}
      <div className=" hidden md:flex gap-4">
        <RiFacebookFill />
        <BsInstagram />
        <BsGoogle />
        <BsTwitter />
      </div>
    </div>
  );
};

export default TopNav;
