import { motion, Variants } from 'framer-motion';

import './hero.scss';

const textVariants: Variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants: Variants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
};

export default function Hero() {
  return (
    <div className='hero'>
      <div className='wrapper'>
        <motion.div
          className='textContainer'
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>MIDHUN DARVIN</motion.h2>
          <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
          <motion.div variants={textVariants} className='buttons'>
            <motion.button variants={textVariants}>See the latest works</motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate='scrollButton'
            src='/images/scroll.png'
            alt=''
          />
        </motion.div>
      </div>
      <motion.div
        className='slidingTextContainer'
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className='imageContainer'>
        <img src='/images/hero.png' alt='' />
      </div>
    </div>
  );
}
