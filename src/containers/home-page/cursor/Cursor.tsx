import { motion } from 'framer-motion';
import lodash from 'lodash';
import { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = lodash.throttle((e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }, 50);
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <motion.div
      className='fixed z-10 h-[50px] w-[50px] rounded-[50%] border border-white'
      animate={{ x: position.x - 25, y: position.y - 25 }}
    ></motion.div>
  );
};

export default Cursor;
