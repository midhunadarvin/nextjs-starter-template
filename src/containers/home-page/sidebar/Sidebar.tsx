'use client';
import { motion } from 'framer-motion';

import Links from './links/Links';

const variants = {
  open: {
    display: 'block',
    opacity: 1,
  },
  closed: {
    transition: {
      delay: 0.5,
    },
    display: 'none',
    opacity: 0,
  },
};

export default function Sidebar({ open }: { open: boolean }) {
  return (
    <>
      <motion.div
        className='sidebar fixed bottom-[100px] left-0 top-[100px] flex w-full flex-col items-center justify-center bg-black text-white'
        initial='closed'
        variants={variants}
        animate={open ? 'open' : 'closed'}
      >
        <motion.div variants={variants} className='bg relative z-30 h-full w-full bg-black'>
          <Links />
        </motion.div>
      </motion.div>
    </>
  );
}
