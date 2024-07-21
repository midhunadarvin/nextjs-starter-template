'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

import Links from './links/Links';
import ToggleButton from './toggle-button/ToggleButton';

const variants = {
  open: {
    clipPath: 'circle(1200px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
  closed: {
    clipPath: 'circle(30px at 50px 50px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className='sidebar flex flex-col items-center justify-center bg-white text-black'
      initial='closed'
      animate={open ? 'open' : 'closed'}
    >
      <motion.div
        variants={variants}
        className='bg fixed bottom-0 left-0 top-0 z-[4] w-[400px] bg-white'
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}
