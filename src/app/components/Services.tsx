import Image from 'next/image';
import { FC } from 'react';

const data = [
  {
    imageUrl: '/images/img 1.png',
    heroText: 'Emergency Towing',
    comment:
      "If your vehicle breaks down or you're involved in an accident, we can come to your location and tow your vehicle to a repair shop or another desired destination.",
  },
  {
    imageUrl: '/images/img-2.png',
    heroText: 'Roadside Assistance',
    comment:
      'Whether you have a flat tire, run out of fuel, or experience a dead battery, we can provide roadside assistance to get you back on the road quickly. We can jump-start your vehicle, deliver fuel, or help you change a tire.',
  },
  {
    imageUrl: '/images/img-3.png',
    heroText: 'Winching',
    comment:
      'If your vehicle is stuck in a difficult situation such as a deep ditch or a tight spot, we offer winching services to safely pull your vehicle out and get you back on the road.',
  },

  {
    imageUrl: '/images/img-4.png',
    heroText: 'Long-Distance Towing',
    comment:
      "If you need to transport your vehicle over a long distance, we can securely tow it to your desired location, whether it's across town or to another city.",
  },

  {
    imageUrl: '/images/img-5.png',
    heroText: 'Junk Car Removal',
    comment:
      'If you have an old, unwanted, or non-functional vehicle taking up space on your property, we can assist you by removing it. Our towing professionals will haul away your junk car and ensure proper disposal or recycling.',
  },

  {
    imageUrl: '/images/img-6.png',
    heroText: 'Accident Recovery',
    comment:
      'In the unfortunate event of a vehicle accident, we offer accident recovery services. We can safely tow your damaged vehicle from the accident scene and transport it to a collision repair facility or another destination of your choice.',
  },
];

const Services: FC = () => {
  return (
    <div className="p-4 bg-[var(--color-bg)]">
      <div className="flex flex-col justify-center items-center gap-2 mb-6">
        <h1 className="text-4xl font-bold font-luckiest text-center text-black mt-10">
          Our Services
        </h1>
        <hr className="bg-[var(--color-primary)] h-2 w-[5rem]" />
      </div>

      <div className=" ">
        <div className="flex flex-wrap items-center justify-center gap-4 key={index}">
          {data.map((item, index) => (
            <div className="w-full md:w-1/4 p-4 bg-white shadow text-[var(--color-text)] md:h-[31rem]">
              <div className="h-[14rem]">
                <Image
                  src={item.imageUrl}
                  alt="Item Image"
                  width={300}
                  height={300}
                  priority={true}
                  className=" w-full h-full object-cover"
                />
              </div>
              <div className="font-gelasio">
                <h1 className="font-extrabold font-inter my-2 text-xl">
                  {item.heroText}
                </h1>
                <p className="text-[var(--color-text)] leading-6">
                  {item.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
