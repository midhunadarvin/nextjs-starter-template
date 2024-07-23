import { motion } from 'framer-motion';
import React from 'react';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
export default function Links() {
  const items = ['Homepage', 'Services', 'Portfolio', 'Contact', 'About'];
  return (
    <motion.div
      className='links absolute flex h-full w-full flex-col items-center justify-center font-six-caps text-[calc(1rem+8vw)] text-white'
      variants={variants}
    >
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          className='button-text leading-[calc(1rem+8vw)] text-[#cdcdcd] opacity-[0.3] hover:text-white hover:opacity-100'
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span data-hover={item}>{item}</span>
        </motion.a>
      ))}
      {/* {items.map((item) => (
        <motion.a key={item} href={`#${item}`} variants={itemVariants}>
          <div className='button-text leading-[calc(1rem+8vw)] text-[#cdcdcd] opacity-[0.3] hover:text-white hover:opacity-100'>
            <span data-hover={item}>{item}</span>
          </div>
        </motion.a>
        // <motion.a
        //   key={item}
        //   href={`#${item}`}
        //   className='font-six-caps text-[calc(1rem+8vw)] text-white'
        //   variants={itemVariants}
        //   whileHover={{ scale: 1.1 }}
        //   whileTap={{ scale: 0.95 }}
        // >
        //   {item}
        // </motion.a>
      ))} */}
    </motion.div>
  );
}
