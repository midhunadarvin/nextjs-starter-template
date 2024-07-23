import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className='hero absolute top-0 h-full w-full overflow-hidden px-[60px] py-[80px]'>
      <div className='flex h-full w-full flex-col items-center justify-center'>
        <h1
          className='relative z-20 mb-0 ml-[-0.6vw] block w-auto overflow-visible p-0 text-[calc(1rem+24.15vw)] font-medium leading-[calc(1rem+22vw)]'
          // className='mb-0 block h-[270px] w-auto text-[calc(1rem+22.15vw)] leading-[calc(1rem+20.5vw)] lg:text-[calc(1rem+24.15vw)] lg:leading-[calc(1rem+22vw)]'
        >
          <div className='inline-block'>
            {'MONTOYA'.split('').map((char, i) => (
              <motion.span
                key={i}
                whileHover={{
                  scaleY: 1.3,
                }}
                style={{ transformOrigin: 'bottom center' }}
                className='mt-0 inline-block min-w-[3vw] cursor-default font-six-caps'
              >
                {char}
              </motion.span>
            ))}
          </div>
        </h1>
        <div className='hero-subtitle mt-8 text-center text-lg text-[#6D6D6D]'>
          WE ARE A CREATIVE STUDIO, SPECIALIZED IN STRATEGY, BRANDING <br /> DESIGN, AND
          DEVELOPMENT. OUR WORK IS ALWAYS AT THE INTERSECTION <br /> OF DESIGN AND TECHNOLOGY.
        </div>
      </div>
    </div>
  );
}
