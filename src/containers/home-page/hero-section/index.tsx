import React, { FC } from 'react';

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section className='flex w-full justify-center'>
      <div className='mx-5 flex w-full max-w-screen-xl flex-col items-center gap-8 py-10 md:mx-20 md:gap-24 md:py-28'>
        <div className='flex w-full flex-col items-center gap-8 text-center md:max-w-[800px]'>
          <div className='relative flex'>
            <h1 className='text-2xl font-bold text-black md:text-6xl'>
              Discover Furniture With High Quality Wood
            </h1>
          </div>
          <div>
            <p className='text-textColor text-sm md:text-lg'>
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi,
              adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam
              tincidunt aliquam adipiscing tempor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
