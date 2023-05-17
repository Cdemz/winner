'use client';
import Image from 'next/image';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { MdLocationPin } from 'react-icons/md';
import { IoIosCall } from 'react-icons/io';
import { HiMailOpen } from 'react-icons/hi';
import { AiFillInstagram } from 'react-icons/ai';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative font-prompt">
      <div className="h-[50rem] md:h-[30rem] w-full">
        <Image
          src="/images/contact bg.jpg"
          alt=""
          width={300}
          height={300}
          priority={true}
          className="object-cover h-full w-full"
        />
      </div>
      {/* send us a message  */}
      <div className="absolute top-0 bg-black bg-opacity-70 h-full w-full flex flex-col md:flex-row p-4 gap-8 md:px-[8rem]  py-[4rem]">
        <div className="md:w-1/2 flex flex-col gap-4">
          <div className="">
            <h1 className="text-2xl font-bold">CONTACT US</h1>
            <hr className="w-[7rem] h-1 bg-[var(--color-primary)]" />
          </div>
          <p>
            Contact us for reliable and efficient towing services. From
            emergency towing and roadside assistance to vehicle recovery and
            more, we have you covered. Get in touch with us now!
          </p>
          {/* social handles  */}
          <div className="flex flex-col gap-4 mt-5 ">
            <p className="flex items-center gap-2">
              <MdLocationPin
                className="text-[var(--color-primary)]"
                size={26}
              />{' '}
              It would be updated
            </p>
            <p className="flex items-center gap-2">
              <IoIosCall className="text-[var(--color-primary)]" size={26} />{' '}
              +1-865-438-5984
            </p>
            <p className="flex items-center gap-2">
              <HiMailOpen className="text-[var(--color-primary)]" size={26} />{' '}
              rnstowingserivce@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <AiFillInstagram
                className="text-[var(--color-primary)]"
                size={26}
              />
              rnstowingservice
            </p>
          </div>
        </div>
        <div className=" md:w-1/2    ">
          <div className="flex gap-2 flex-col mb-4">
            <h1 className="text-2xl font-bold">Send us a Message</h1>
            <hr className="w-[7rem] h-1 bg-[var(--color-primary)]" />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center gap-4"
          >
            <label className="">
              <input
                placeholder="Your Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className=" bg-white bg-opacity-25 h-10 rounded-3xl px-4 w-[22rem]"
              />
            </label>

            <label>
              <input
                type="email"
                name="email"
                placeholder="someone@example.com"
                value={formData.email}
                onChange={handleChange}
                className=" bg-white bg-opacity-25 h-10 rounded-3xl px-4 w-[22rem]"
              />
            </label>

            <label>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className=" bg-white bg-opacity-25 h-[7rem] w-[22rem] rounded-3xl px-4"
              ></textarea>
            </label>

            <button
              type="submit"
              className="bg-[var(--color-primary)] px-[10rem] py-3 rounded-3xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* end of box  */}
    </div>
  );
};

export default FormPage;
