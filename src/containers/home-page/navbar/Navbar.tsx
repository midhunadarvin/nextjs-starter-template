import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import './navbar.scss';

import MenuButton from '@/containers/home-page/navbar/menu-button/MenuButton';

import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='navbar fixed z-30 w-full text-sm'>
      {/* Sidebar */}
      <div className='wrapper m-auto flex h-full items-center justify-between px-5 py-4 sm:px-[30px] lg:px-16'>
        <motion.span
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Image src='/images/logo-white.png' height={50} width={56.66} alt='' />
        </motion.span>

        <div id='menu'>
          <div className='flex items-center justify-center gap-5'>
            <div className='button-text text-sm'>
              <span data-hover='Menu'>Menu</span>
            </div>
            <MenuButton setOpen={setOpen} open={open} />
          </div>
        </div>
      </div>
      <Sidebar open={open} />
    </div>
  );
};

export default Navbar;
