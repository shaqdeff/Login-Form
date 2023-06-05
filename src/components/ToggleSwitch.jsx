import { useState } from 'react';
import { motion } from 'framer-motion';

const ToggleSwitch = ({ setIsLogin, isLogin }) => {
  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const variants = {
    login: {
      x: 0,
    },
    signUp: {
      x: '8%',
    },
  };

  return (
    <div
      className="flex justify-center items-center w-[320px] 
    border-[3px] border-solid border-cyan
    rounded-[30px] bg-melon overflow-hidden">
      {/* Login */}
      <motion.button
        className={`${
          isLogin
            ? 'bg-peach text-melon rounded-[30px]'
            : 'bg-melon text-white rounded-[30px]'
        } font-normal font-poppins py-2.5 px-4 
        w-[160px] outline-none`}
        onClick={handleToggle}
        animate={isLogin ? 'login' : 'signUp'}
        initial={isLogin ? 'login' : 'signUp'}
        variants={variants}>
        Login
      </motion.button>

      {/* Sign Up */}
      <motion.button
        className={`${
          !isLogin ? 'bg-peach text-melon' : 'bg-melon text-white'
        } font-normal font-poppins py-2.5 px-4 
        rounded-[30px] w-[160px] outline-none`}
        onClick={handleToggle}
        animate={isLogin ? 'signUp' : 'login'}
        initial={isLogin ? 'signUp' : 'login'}
        variants={variants}>
        Sign Up
      </motion.button>
    </div>
  );
};

export default ToggleSwitch;
