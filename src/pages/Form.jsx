import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// components
import { Login, SignUp, ToggleSwitch } from '../components';

const Form = () => {
  const [isLogin, setIsLogin] = useState(true);

  const variants = {
    initial: {
      opacity: 0.1,
      x: '-10%',
    },
    enter: {
      opacity: 1,
      x: '0%',
    },
    exit: {
      opacity: 0.1,
      x: '5%',
    },
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="m-auto border rounded-[30px] flex flex-col justify-center gap-10 items-center w-[35%] relative">
        <div className="mt-8">
          <ToggleSwitch setIsLogin={setIsLogin} isLogin={isLogin} />
        </div>

        {isLogin ? (
          <motion.div
            className="w-full overflow-hidden"
            key="login"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={variants}>
            <Login />
          </motion.div>
        ) : (
          <motion.div
            className="w-full overflow-hidden"
            key="signup"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={variants}>
            <SignUp />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Form;
